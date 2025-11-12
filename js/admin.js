// Admin Management - Complete with Bonus Management
class AdminManager {
    constructor() {
        this.isAdmin = false;
        this.init();
    }

    async init() {
        // Wait for simpleAuth to initialize
        setTimeout(() => {
            this.checkAdminStatus();
        }, 1000);
    }

    async checkAdminStatus() {
        if (simpleAuth && simpleAuth.currentUser) {
            this.isAdmin = simpleAuth.currentUser.is_admin === true;
            if (this.isAdmin) {
                document.getElementById('adminBtn').style.display = 'block';
                this.initAdminPanel();
            }
        }
    }

    initAdminPanel() {
        const adminBtn = document.getElementById('adminBtn');
        const adminModal = document.getElementById('adminModal');
        const closeBtn = adminModal.querySelector('.close');

        adminBtn.addEventListener('click', () => {
            adminModal.style.display = 'block';
            this.loadUsers();
        });

        closeBtn.addEventListener('click', () => {
            adminModal.style.display = 'none';
        });

        // Tab switching
        document.querySelectorAll('.admin-tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tabName = btn.getAttribute('data-tab');
                
                document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));
                
                btn.classList.add('active');
                document.getElementById(tabName + 'Tab').classList.add('active');
                
                if (tabName === 'users') this.loadUsers();
                if (tabName === 'transactions') this.loadTransactions();
                if (tabName === 'bonuses') this.loadBonusManagement();
            });
        });

        // Refresh buttons
        document.getElementById('refreshUsers').addEventListener('click', () => this.loadUsers());
        document.getElementById('refreshTransactions').addEventListener('click', () => this.loadTransactions());
        
        // Bonus management
        document.getElementById('addBonusBtn').addEventListener('click', () => this.addBonus());
    }

    async loadUsers() {
        try {
            const { data: users, error } = await supabase
                .from('profiles')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Error loading users:', error);
                return;
            }

            const tbody = document.getElementById('usersTableBody');
            tbody.innerHTML = '';

            if (users.length === 0) {
                tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 20px;">No users found</td></tr>';
                return;
            }

            users.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.id ? user.id.substring(0, 8) + '...' : 'N/A'}</td>
                    <td>
                        ${user.username || 'N/A'}
                        ${user.is_admin ? '<span style="color: #ffcc00; font-size: 10px; margin-left: 5px;">[ADMIN]</span>' : ''}
                    </td>
                    <td>${user.mobile || 'N/A'}</td>
                    <td>$${user.balance?.toFixed(2) || '0.00'}</td>
                    <td>${user.vip_level || 'Bronze'}</td>
                    <td>${user.member_since ? new Date(user.member_since).toLocaleDateString() : 'N/A'}</td>
                    <td>
                        <button class="edit-btn" onclick="adminManager.editUser('${user.id}')">Edit</button>
                        <button class="delete-btn" onclick="adminManager.deleteUser('${user.id}')">Delete</button>
                    </td>
                `;
                tbody.appendChild(row);
            });
        } catch (error) {
            console.error('Error loading users:', error);
        }
    }

    async loadTransactions() {
        try {
            const { data: transactions, error } = await supabase
                .from('transactions')
                .select(`
                    *,
                    profiles (email, username)
                `)
                .order('created_at', { ascending: false })
                .limit(100);

            if (error) {
                console.error('Error loading transactions:', error);
                return;
            }

            const tbody = document.getElementById('transactionsTableBody');
            tbody.innerHTML = '';

            if (transactions.length === 0) {
                tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 20px;">No transactions found</td></tr>';
                return;
            }

            transactions.forEach(tx => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${tx.id ? tx.id.substring(0, 8) + '...' : 'N/A'}</td>
                    <td>${tx.profiles?.email || tx.profiles?.username || 'N/A'}</td>
                    <td>
                        <span style="color: ${tx.type === 'deposit' ? '#4CAF50' : tx.type === 'bonus' ? '#ffcc00' : '#2196F3'}">
                            ${tx.type || 'N/A'}
                        </span>
                    </td>
                    <td>$${tx.amount?.toFixed(2) || '0.00'}</td>
                    <td>${tx.description || 'N/A'}</td>
                    <td>${tx.created_at ? new Date(tx.created_at).toLocaleDateString() : 'N/A'}</td>
                    <td>
                        <span style="color: ${tx.status === 'completed' ? '#4CAF50' : '#ff9800'}">
                            ${tx.status || 'completed'}
                        </span>
                    </td>
                `;
                tbody.appendChild(row);
            });
        } catch (error) {
            console.error('Error loading transactions:', error);
        }
    }

    async loadUsersForBonus() {
        try {
            const { data: users, error } = await supabase
                .from('profiles')
                .select('id, email, username, balance')
                .order('username');

            if (error) {
                console.error('Error loading users:', error);
                return;
            }

            const select = document.getElementById('bonusUserSelect');
            select.innerHTML = '<option value="">Select User</option>';
            
            users.forEach(user => {
                const option = document.createElement('option');
                option.value = user.id;
                option.textContent = `${user.username} (${user.email}) - Balance: $${(user.balance || 0).toFixed(2)}`;
                select.appendChild(option);
            });
        } catch (error) {
            console.error('Error loading users for bonus:', error);
        }
    }

    // BONUS MANAGEMENT FUNCTIONS
    async loadBonusManagement() {
        try {
            const { data: bonuses, error } = await supabase
                .from('available_bonuses')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;

            this.displayBonusManagement(bonuses);
        } catch (error) {
            console.error('Error loading bonuses:', error);
        }
    }

    displayBonusManagement(bonuses) {
        const bonusesTab = document.getElementById('bonusesTab');
        if (!bonusesTab) return;

        bonusesTab.innerHTML = `
            <div class="admin-header">
                <h3>Bonus Management</h3>
                <button id="addNewBonus" class="admin-btn">Add New Bonus</button>
            </div>
            
            <div class="table-container">
                <table class="admin-table">
                    <thead>
                        <tr>
                            <th>Bonus Name</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Description</th>
                            <th>Max Claims</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id="bonusesTableBody">
                        ${bonuses && bonuses.length > 0 ? bonuses.map(bonus => `
                            <tr>
                                <td>${bonus.bonus_name}</td>
                                <td>${bonus.bonus_type}</td>
                                <td>$${bonus.amount}</td>
                                <td>${bonus.description || '-'}</td>
                                <td>${bonus.max_claims_per_user || 1}</td>
                                <td>
                                    <span style="color: ${bonus.is_active ? '#4CAF50' : '#f44336'}">
                                        ${bonus.is_active ? 'Active' : 'Inactive'}
                                    </span>
                                </td>
                                <td>
                                    <button class="edit-btn" onclick="adminManager.editBonus('${bonus.id}')">Edit</button>
                                    <button class="delete-btn" onclick="adminManager.toggleBonus('${bonus.id}', ${!bonus.is_active})">
                                        ${bonus.is_active ? 'Disable' : 'Enable'}
                                    </button>
                                    <button class="edit-btn" style="background: #2196F3;" onclick="adminManager.deleteBonus('${bonus.id}')">Delete</button>
                                </td>
                            </tr>
                        `).join('') : `
                            <tr>
                                <td colspan="7" style="text-align: center; padding: 20px;">No bonuses found</td>
                            </tr>
                        `}
                    </tbody>
                </table>
            </div>
            
            <div id="bonusFormModal" class="modal" style="display: none;">
                <div class="modal-content">
                    <span class="close" onclick="document.getElementById('bonusFormModal').style.display='none'">&times;</span>
                    <h3 id="bonusFormTitle">Add New Bonus</h3>
                    <form id="bonusForm">
                        <input type="hidden" id="bonusId">
                        <div class="form-group">
                            <label class="form-label">Bonus Name</label>
                            <input type="text" class="form-input" id="bonusName" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Bonus Type (Unique)</label>
                            <input type="text" class="form-input" id="bonusType" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Amount</label>
                            <input type="number" class="form-input" id="bonusAmount" step="0.01" min="0" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Description</label>
                            <textarea class="form-input" id="bonusDescription" rows="3"></textarea>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Max Claims Per User</label>
                            <input type="number" class="form-input" id="bonusMaxClaims" value="1" min="1">
                        </div>
                        <div class="form-group">
                            <label class="form-label">
                                <input type="checkbox" id="bonusIsActive" checked>
                                Active Bonus
                            </label>
                        </div>
                        <button type="submit" class="submit-btn">Save Bonus</button>
                    </form>
                </div>
            </div>
        `;

        // Add event listeners
        document.getElementById('addNewBonus').addEventListener('click', () => this.showBonusForm());
        document.getElementById('bonusForm').addEventListener('submit', (e) => this.saveBonus(e));
    }

    showBonusForm(bonus = null) {
        const modal = document.getElementById('bonusFormModal');
        const form = document.getElementById('bonusForm');
        
        if (bonus) {
            document.getElementById('bonusFormTitle').textContent = 'Edit Bonus';
            document.getElementById('bonusId').value = bonus.id;
            document.getElementById('bonusName').value = bonus.bonus_name;
            document.getElementById('bonusType').value = bonus.bonus_type;
            document.getElementById('bonusAmount').value = bonus.amount;
            document.getElementById('bonusDescription').value = bonus.description || '';
            document.getElementById('bonusMaxClaims').value = bonus.max_claims_per_user || 1;
            document.getElementById('bonusIsActive').checked = bonus.is_active;
        } else {
            document.getElementById('bonusFormTitle').textContent = 'Add New Bonus';
            form.reset();
            document.getElementById('bonusMaxClaims').value = 1;
            document.getElementById('bonusIsActive').checked = true;
        }
        
        modal.style.display = 'block';
    }

    async saveBonus(e) {
        e.preventDefault();
        
        try {
            const formData = {
                bonus_name: document.getElementById('bonusName').value,
                bonus_type: document.getElementById('bonusType').value,
                amount: parseFloat(document.getElementById('bonusAmount').value),
                description: document.getElementById('bonusDescription').value,
                max_claims_per_user: parseInt(document.getElementById('bonusMaxClaims').value) || 1,
                is_active: document.getElementById('bonusIsActive').checked,
                updated_at: new Date().toISOString()
            };

            const bonusId = document.getElementById('bonusId').value;
            let error;

            if (bonusId) {
                // Update existing bonus
                ({ error } = await supabase
                    .from('available_bonuses')
                    .update(formData)
                    .eq('id', bonusId));
            } else {
                // Insert new bonus
                ({ error } = await supabase
                    .from('available_bonuses')
                    .insert([formData]));
            }

            if (error) throw error;

            alert('Bonus saved successfully!');
            document.getElementById('bonusFormModal').style.display = 'none';
            this.loadBonusManagement();

        } catch (error) {
            console.error('Error saving bonus:', error);
            alert('Failed to save bonus: ' + error.message);
        }
    }

    async editBonus(bonusId) {
        try {
            const { data: bonus, error } = await supabase
                .from('available_bonuses')
                .select('*')
                .eq('id', bonusId)
                .single();

            if (error) throw error;

            this.showBonusForm(bonus);

        } catch (error) {
            console.error('Error loading bonus:', error);
            alert('Failed to load bonus: ' + error.message);
        }
    }

    async toggleBonus(bonusId, isActive) {
        try {
            const { error } = await supabase
                .from('available_bonuses')
                .update({ is_active: isActive })
                .eq('id', bonusId);

            if (error) throw error;

            alert(`Bonus ${isActive ? 'enabled' : 'disabled'} successfully!`);
            this.loadBonusManagement();

        } catch (error) {
            console.error('Error toggling bonus:', error);
            alert('Failed to update bonus: ' + error.message);
        }
    }

    async deleteBonus(bonusId) {
        if (!confirm('Are you sure you want to delete this bonus? This action cannot be undone.')) {
            return;
        }

        try {
            const { error } = await supabase
                .from('available_bonuses')
                .delete()
                .eq('id', bonusId);

            if (error) throw error;

            alert('Bonus deleted successfully!');
            this.loadBonusManagement();

        } catch (error) {
            console.error('Error deleting bonus:', error);
            alert('Failed to delete bonus: ' + error.message);
        }
    }

    // EXISTING USER MANAGEMENT FUNCTIONS
    async editUser(userId) {
        try {
            const { data: user, error } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', userId)
                .single();

            if (error) {
                alert('Error loading user: ' + error.message);
                return;
            }

            const modalHTML = `
                <div id="editUserModal" class="modal">
                    <div class="modal-content edit-user-modal">
                        <span class="close">&times;</span>
                        <h2 style="color: #ffcc00; margin-bottom: 20px;">Edit User: ${user.username}</h2>
                        <form class="user-form" id="editUserForm">
                            <div class="form-group">
                                <label class="form-label">Username</label>
                                <input type="text" class="form-input" id="editUsername" value="${user.username}" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label">password</label>
                                <input type="text" class="form-input" id="editPassword" value="${user.password || ''}">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Email</label>
                                <input type="email" class="form-input" id="editEmail" value="${user.email || ''}">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Mobile</label>
                                <input type="text" class="form-input" id="editMobile" value="${user.mobile || ''}" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Balance</label>
                                <input type="number" class="form-input" id="editBalance" value="${user.balance || 0}" step="0.01" min="0" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label">VIP Level</label>
                                <select class="form-input" id="editVipLevel">
                                    <option value="Bronze" ${user.vip_level === 'Bronze' ? 'selected' : ''}>Bronze</option>
                                    <option value="Silver" ${user.vip_level === 'Silver' ? 'selected' : ''}>Silver</option>
                                    <option value="Gold" ${user.vip_level === 'Gold' ? 'selected' : ''}>Gold</option>
                                    <option value="Platinum" ${user.vip_level === 'Platinum' ? 'selected' : ''}>Platinum</option>
                                    <option value="Diamond" ${user.vip_level === 'Diamond' ? 'selected' : ''}>Diamond</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Loyalty Points</label>
                                <input type="number" class="form-input" id="editLoyaltyPoints" value="${user.loyalty_points || 0}" min="0" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label">
                                    <input type="checkbox" id="editIsAdmin" ${user.is_admin ? 'checked' : ''}>
                                    Admin User
                                </label>
                            </div>
                            <button type="submit" class="submit-btn" style="width: 100%;">
                                <i class="fas fa-save"></i> Update User
                            </button>
                        </form>
                    </div>
                </div>
            `;

            document.body.insertAdjacentHTML('beforeend', modalHTML);
            
            const modal = document.getElementById('editUserModal');
            modal.style.display = 'block';

            modal.querySelector('.close').addEventListener('click', () => {
                modal.remove();
            });

            document.getElementById('editUserForm').addEventListener('submit', async (e) => {
                e.preventDefault();
                await this.updateUser(userId);
            });

            window.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });

        } catch (error) {
            console.error('Error loading user for edit:', error);
            alert('Failed to load user: ' + error.message);
        }
    }

    async updateUser(userId) {
        try {
            const formData = {
                username: document.getElementById('editUsername').value,
                password: document.getElementById('editPassword').value,
                email: document.getElementById('editEmail').value,
                mobile: document.getElementById('editMobile').value,
                balance: parseFloat(document.getElementById('editBalance').value),
                vip_level: document.getElementById('editVipLevel').value,
                loyalty_points: parseInt(document.getElementById('editLoyaltyPoints').value),
                is_admin: document.getElementById('editIsAdmin').checked
            };

            const { error } = await supabase
                .from('profiles')
                .update(formData)
                .eq('id', userId);

            if (error) throw error;

            alert('User updated successfully!');
            document.getElementById('editUserModal').remove();
            this.loadUsers();
            
            // If current user updated their own profile, refresh
            if (simpleAuth.currentUser && simpleAuth.currentUser.id === userId) {
                simpleAuth.currentUser = { ...simpleAuth.currentUser, ...formData };
                localStorage.setItem('casino_user', JSON.stringify(simpleAuth.currentUser));
                simpleAuth.updateAllUserSections();
            }

        } catch (error) {
            console.error('Error updating user:', error);
            alert('Failed to update user: ' + error.message);
        }
    }

    async deleteUser(userId) {
        if (!confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
            return;
        }

        try {
            const { error } = await supabase
                .from('profiles')
                .delete()
                .eq('id', userId);

            if (error) throw error;

            alert('User deleted successfully!');
            this.loadUsers();

        } catch (error) {
            console.error('Error deleting user:', error);
            alert('Failed to delete user: ' + error.message);
        }
    }

    async addBonus() {
        const userId = document.getElementById('bonusUserSelect').value;
        const amount = parseFloat(document.getElementById('bonusAmount').value);
        const bonusType = document.getElementById('bonusType').value;

        if (!userId) {
            alert('Please select a user');
            return;
        }

        if (!amount || amount <= 0) {
            alert('Please enter a valid bonus amount');
            return;
        }

        if (!bonusType.trim()) {
            alert('Please enter a bonus type');
            return;
        }

        try {
            // Get current user balance and info
            const { data: user, error: userError } = await supabase
                .from('profiles')
                .select('balance, username, mobile')
                .eq('id', userId)
                .single();

            if (userError) throw userError;

            // Calculate new balance
            const newBalance = (user.balance || 0) + amount;

            // Update user balance
            const { error: updateError } = await supabase
                .from('profiles')
                .update({ balance: newBalance })
                .eq('id', userId);

            if (updateError) throw updateError;

            // Record admin bonus in user_bonuses table
            const { error: bonusError } = await supabase
                .from('user_bonuses')
                .insert([
                    {
                        user_id: userId,
                        bonus_type: 'admin_' + bonusType.toLowerCase().replace(/\s+/g, '_'),
                        amount: amount,
                        description: `Admin Bonus: ${bonusType}`
                    }
                ]);

            if (bonusError) throw bonusError;

            // Record transaction
            const { error: txError } = await supabase
                .from('transactions')
                .insert([
                    {
                        user_id: userId,
                        type: 'bonus',
                        amount: amount,
                        description: `Admin Bonus: ${bonusType}`,
                        status: 'completed'
                    }
                ]);

            if (txError) throw txError;

            alert(`Successfully added $${amount} "${bonusType}" bonus to ${user.username}!`);
            
            // Clear form
            document.getElementById('bonusAmount').value = '';
            document.getElementById('bonusType').value = '';
            
            // Refresh data
            this.loadUsers();
            this.loadUsersForBonus();

        } catch (error) {
            console.error('Error adding bonus:', error);
            alert('Failed to add bonus: ' + error.message);
        }
    }
}

// Initialize admin manager
const adminManager = new AdminManager();