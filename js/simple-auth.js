// Simple Auth System - Complete Version with All Sections
class SimpleAuth {
    constructor() {
        this.currentUser = null;
        this.init();
    }

    async init() {
        try {
            // Check if user is logged in from localStorage
            const savedUser = localStorage.getItem('casino_user');
            if (savedUser) {
                const userData = JSON.parse(savedUser);
                
                // Verify the user still exists in database
                const { data: user, error } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', userData.id)
                    .single();

                if (error || !user) {
                    // User doesn't exist in database anymore
                    localStorage.removeItem('casino_user');
                    this.currentUser = null;
                    this.updateUIForLoggedOutUser();
                } else {
                    this.currentUser = user;
                    this.updateUIForLoggedInUser();
                    console.log('User restored from storage:', user.username);
                }
            } else {
                this.updateUIForLoggedOutUser();
            }
        } catch (error) {
            console.error('Init error:', error);
            this.updateUIForLoggedOutUser();
        }
    }

    async register(username, mobile, password, email = null) {
        try {
            console.log('Registration started for:', username);

            // Basic validation
            if (!username || username.length < 3) {
                throw new Error('Username must be at least 3 characters');
            }

            if (!mobile || mobile.length < 10) {
                throw new Error('Please enter a valid mobile number');
            }

            if (!password || password.length < 6) {
                throw new Error('Password must be at least 6 characters');
            }

            // Check if username exists using ilike for case-insensitive search
            const { data: existingUsername, error: usernameError } = await supabase
                .from('profiles')
                .select('username')
                .ilike('username', username)
                .maybeSingle();

            if (usernameError) {
                console.error('Username check error:', usernameError);
                throw new Error('Error checking username availability');
            }

            if (existingUsername) {
                throw new Error('Username already taken');
            }

            // Check if mobile exists
            const { data: existingMobile, error: mobileError } = await supabase
                .from('profiles')
                .select('mobile')
                .eq('mobile', mobile)
                .maybeSingle();

            if (mobileError) {
                console.error('Mobile check error:', mobileError);
                throw new Error('Error checking mobile number');
            }

            if (existingMobile) {
                throw new Error('Mobile number already registered');
            }

            // Create user data
            const userData = {
                username: username.trim(),
                mobile: mobile.trim(),
                password: this.hashPassword(password),
                email: email ? email.trim() : null,
                balance: 10.00,
                vip_level: 'Bronze',
                member_since: new Date().toISOString().split('T')[0],
                referral_code: this.generateReferralCode(),
                loyalty_points: 100,
                is_admin: false
            };

            console.log('Creating user with data:', userData);

            // Insert user
            const { data, error } = await supabase
                .from('profiles')
                .insert([userData])
                .select()
                .single();

            if (error) {
                console.error('Insert error:', error);
                throw new Error('Failed to create account: ' + error.message);
            }

            console.log('User created successfully:', data);

            // Create welcome transaction
            await this.createWelcomeTransaction(data.id);

            // Auto-login
            this.currentUser = data;
            localStorage.setItem('casino_user', JSON.stringify(data));
            this.updateUIForLoggedInUser();

            return { success: true, user: data };

        } catch (error) {
            console.error('Registration failed:', error);
            return { success: false, error: error.message };
        }
    }

    async login(identifier, password) {
        try {
            console.log('Login attempt for:', identifier);

            if (!identifier || !password) {
                throw new Error('Please enter username/mobile and password');
            }

            // Search by username or mobile (case-insensitive for username)
            const { data: user, error } = await supabase
                .from('profiles')
                .select('*')
                .or(`username.ilike.${identifier},mobile.eq.${identifier}`)
                .single();

            if (error) {
                console.error('Login query error:', error);
                if (error.code === 'PGRST116') {
                    throw new Error('User not found');
                }
                throw new Error('Login failed: ' + error.message);
            }

            if (!user) {
                throw new Error('Invalid username/mobile or password');
            }

            console.log('User found:', user.username);

            // Check password
            const hashedPassword = this.hashPassword(password);
            console.log('Password check:', hashedPassword, 'vs', user.password);
            
            if (user.password !== hashedPassword) {
                throw new Error('Invalid password');
            }

            // Login successful
            this.currentUser = user;
            localStorage.setItem('casino_user', JSON.stringify(user));
            this.updateUIForLoggedInUser();

            console.log('Login successful:', user.username);

            return { success: true, user: user };

        } catch (error) {
            console.error('Login failed:', error);
            return { success: false, error: error.message };
        }
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('casino_user');
        this.updateUIForLoggedOutUser();
        console.log('User logged out');
    }

    hashPassword(password) {
        // Simple hash for demo
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return Math.abs(hash).toString(36);
    }

    generateReferralCode() {
        return 'LUCKY' + Math.random().toString(36).substr(2, 6).toUpperCase();
    }

    async createWelcomeTransaction(userId) {
        try {
            const { error } = await supabase
                .from('transactions')
                .insert([
                    {
                        user_id: userId,
                        type: 'bonus',
                        amount: 100.00,
                        description: 'Welcome Bonus',
                        status: 'completed'
                    }
                ]);
            if (error) throw error;
            console.log('Welcome transaction created for user:', userId);
        } catch (error) {
            console.error('Error creating welcome transaction:', error);
        }
    }

    // ========== NEW METHODS ADDED HERE ==========

    updateAllUserSections() {
        if (!this.currentUser) return;
        
        console.log('Updating all user sections for:', this.currentUser.username);
        
        // Update Account Page
        this.updateAccountInfo();
        
        // Update Referral Page
        this.updateReferralPage();
        
        // Update Rewards Page
        this.updateRewardsPage();
        
        // Update Deposit Page (if needed)
        this.updateDepositPage();
    }

    updateAccountInfo() {
        if (!this.currentUser) {
            console.error('No current user for account info');
            return;
        }

        console.log('Updating account info for:', this.currentUser.username);

        const accountDetails = document.querySelector('.account-info');
        if (accountDetails) {
            let emailHtml = '';
            if (this.currentUser.email) {
                emailHtml = `
                    <div class="account-detail">
                        <span>Email:</span>
                        <span>${this.currentUser.email}</span>
                    </div>
                `;
            }

            accountDetails.innerHTML = `
                <div class="account-detail">
                    <span>Username:</span>
                    <span>${this.currentUser.username}</span>
                </div>
                <div class="account-detail">
                    <span>Mobile:</span>
                    <span>${this.currentUser.mobile}</span>
                </div>
                ${emailHtml}
                <div class="account-detail">
                    <span>Member Since:</span>
                    <span>${new Date(this.currentUser.member_since).toLocaleDateString()}</span>
                </div>
                <div class="account-detail">
                    <span>VIP Level:</span>
                    <span style="color: #ffcc00;">${this.currentUser.vip_level}</span>
                </div>
                <div class="account-detail">
                    <span>Balance:</span>
                    <span style="color: #4CAF50;">৳${(this.currentUser.balance || 0).toFixed(2)}</span>
                </div>
                <div class="account-detail">
                    <span>Bonus Balance:</span>
                    <span style="color: #ffcc00;">৳${(this.currentUser.pending_bonus || 0).toFixed(2)}</span>
                </div>
            `;
            console.log('Account info updated');
        }
    }

    updateReferralPage() {
        if (!this.currentUser) return;
        
        console.log('Updating referral page for:', this.currentUser.username);
        
        // Update referral code
        const referralCode = document.querySelector('.referral-code .code');
        if (referralCode) {
            referralCode.textContent = this.currentUser.referral_code || 'LUCKY123';
            console.log('Referral code updated:', referralCode.textContent);
        }
        
        // Update referral stats
        const referralStats = document.querySelector('.referral-stats');
        if (referralStats) {
            referralStats.innerHTML = `
                <div class="stat-card">
                    <div class="stat-value">${this.currentUser.friends_referred || 0}</div>
                    <div class="stat-label">Friends Referred</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">৳${this.currentUser.total_earnings || 0}</div>
                    <div class="stat-label">Total Earnings</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${this.currentUser.active_friends || 0}</div>
                    <div class="stat-label">Active Friends</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">৳${this.currentUser.pending_bonus || 0}</div>
                    <div class="stat-label">Pending Bonus</div>
                </div>
            `;
            console.log('Referral stats updated');
        }
        
        // Update referral description text
        const referralDesc = document.querySelector('.referral-code p:last-child');
        if (referralDesc) {
            referralDesc.textContent = `Share code "${this.currentUser.referral_code}" with friends and earn $10 when they join!`;
        }
    }

    updateRewardsPage() {
        if (!this.currentUser) return;
        
        console.log('Updating rewards page for:', this.currentUser.username);
        
        // Update loyalty points and VIP level
        const rewardsGrid = document.querySelector('.rewards-grid');
        if (rewardsGrid) {
            // Calculate progress percentages
            const loyaltyProgress = Math.min(((this.currentUser.loyalty_points || 0) / 2000) * 100, 100);
            const vipProgress = 40; // Fixed for demo
            
            rewardsGrid.innerHTML = `
                <div class="reward-card">
                    <i class="fas fa-coins reward-icon"></i>
                    <div class="stat-value">${this.currentUser.loyalty_points || 100}</div>
                    <div class="stat-label">Loyalty Points</div>
                    <div class="progress-bar">
                        <div class="progress" style="width: ${loyaltyProgress}%"></div>
                    </div>
                    <div class="stat-label">Next: 2000 pts</div>
                </div>
                <div class="reward-card">
                    <i class="fas fa-trophy reward-icon"></i>
                    <div class="stat-value">${this.currentUser.vip_level || 'Bronze'}</div>
                    <div class="stat-label">VIP Level</div>
                    <div class="progress-bar">
                        <div class="progress" style="width: ${vipProgress}%"></div>
                    </div>
                    <div class="stat-label">Next: Platinum</div>
                </div>
            `;
            console.log('Rewards grid updated');
        }
        
        // Update available bonuses section
        const bonusSections = document.querySelectorAll('.rewards-grid');
        if (bonusSections.length > 1) {
            const bonusSection = bonusSections[1];
            bonusSection.innerHTML = `
                <div class="reward-card">
                    <i class="fas fa-gift reward-icon"></i>
                    <div class="stat-value">৳500</div>
                    <div class="stat-label">Welcome Bonus</div>
                    <button class="play-btn" style="margin-top: 10px; padding: 8px 15px;" onclick="claimBonus('welcome')">CLAIM</button>
                </div>
                <div class="reward-card">
                    <i class="fas fa-birthday-cake reward-icon"></i>
                    <div class="stat-value">৳5000</div>
                    <div class="stat-label">Birthday Bonus</div>
                    <button class="play-btn" style="margin-top: 10px; padding: 8px 15px;" onclick="claimBonus('birthday')">CLAIM</button>
                </div>
                <div class="reward-card">
                    <i class="fas fa-calendar reward-icon"></i>
                    <div class="stat-value">৳100</div>
                    <div class="stat-label">Weekly Bonus</div>
                    <button class="play-btn" style="margin-top: 10px; padding: 8px 15px;" onclick="claimBonus('weekly')">CLAIM</button>
                </div>
                <div class="reward-card">
                    <i class="fas fa-share reward-icon"></i>
                    <div class="stat-value">৳4500</div>
                    <div class="stat-label">Referral Bonus</div>
                    <button class="play-btn" style="margin-top: 10px; padding: 8px 15px;" onclick="claimBonus('referral')">CLAIM</button>
                </div>
            `;
            console.log('Bonus section updated');
        }
    }

updateDepositPage() {
    if (!this.currentUser) return;
    
    console.log('Updating deposit page for:', this.currentUser.username);

    let depositBalance = document.querySelector('.deposit-balance');

    if (!depositBalance) {
        const depositForm = document.querySelector('.deposit-form');
        if (depositForm) {
            const balanceHtml = `
                <div class="form-group deposit-balance" style="text-align: center; margin-bottom: 20px;">
                    <div style="color: #ffcc00; font-size: 18px; font-weight: bold;">
                        Current Balance: ৳${(this.currentUser.balance || 0).toFixed(2)}
                    </div>
                </div>
            `;
            depositForm.insertAdjacentHTML('afterbegin', balanceHtml);
            depositBalance = document.querySelector('.deposit-balance');
        }
    }

    if (depositBalance) {
        depositBalance.textContent = `Current Balance: ৳${(this.currentUser.balance || 0).toFixed(2)}`;
    }
}


    // ========== END OF NEW METHODS ==========

    updateUIForLoggedInUser() {
        console.log('Updating UI for logged in user');
        
        if (!this.currentUser) {
            console.error('No current user for logged in UI');
            return;
        }
        
        // Update login button
        const loginBtn = document.querySelector('.login-btn');
        if (loginBtn) {
            loginBtn.textContent = 'LOGOUT';
            loginBtn.style.background = 'linear-gradient(to right, #ff6b6b, #ee5a52)';
            console.log('Login button updated to LOGOUT');
        }
        
        // Show ALL navigation buttons
        document.querySelectorAll('.nav-item').forEach(item => {
            item.style.display = 'flex';
        });
        
        // Update ALL user sections with current data
        this.updateAllUserSections();
        
        // Show home page by default
        this.showPage('homePage');
        
        // Show admin button if user is admin
        if (this.currentUser.is_admin) {
            const adminBtn = document.getElementById('adminBtn');
            if (adminBtn) {
                adminBtn.style.display = 'block';
                console.log('Admin button shown');
            }
        }
        
        console.log('UI fully updated for logged in user');
    }

    updateUIForLoggedOutUser() {
        console.log('Updating UI for logged out user');
        
        // Update login button
        const loginBtn = document.querySelector('.login-btn');
        if (loginBtn) {
            loginBtn.textContent = 'LOGIN';
            loginBtn.style.background = 'linear-gradient(to right, #ffcc00, #ff9900)';
            console.log('Login button updated to LOGIN');
        }
        
        // Reset to home page
        this.showPage('homePage');
        
        // Show only Home button for logged-out users
        document.querySelectorAll('.nav-item').forEach(item => {
            const pageId = item.getAttribute('data-page');
            if (pageId !== 'homePage') {
                item.style.display = 'none';
            } else {
                item.style.display = 'flex';
            }
        });
        
        // Hide admin button
        const adminBtn = document.getElementById('adminBtn');
        if (adminBtn) {
            adminBtn.style.display = 'none';
        }
        
        console.log('UI updated for logged out state');
    }

    showPage(pageId) {
        console.log('Showing page:', pageId);
        
        // Hide all pages
        document.querySelectorAll('.page-content').forEach(page => {
            page.classList.remove('active');
        });
        
        // Show selected page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            console.log('Page activated:', pageId);
            
            // Update the specific page data when navigated to
            if (this.currentUser) {
                switch (pageId) {
                    case 'accountPage':
                        this.updateAccountInfo();
                        break;
                    case 'referralPage':
                        this.updateReferralPage();
                        break;
                    case 'rewardsPage':
                        this.updateRewardsPage();
                        break;
                    case 'depositPage':
                        this.updateDepositPage();
                        break;
                }
            }
        } else {
            console.error('Page not found:', pageId);
        }
        
        // Update active nav item
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-page') === pageId) {
                item.classList.add('active');
                console.log('Nav item activated for:', pageId);
            }
        });
    }

    async updateBalance(amount) {
        if (!this.currentUser) return;

        try {
            const { data, error } = await supabase
                .from('profiles')
                .update({ balance: amount })
                .eq('id', this.currentUser.id)
                .select()
                .single();

            if (error) throw error;

            this.currentUser.balance = amount;
            localStorage.setItem('casino_user', JSON.stringify(this.currentUser));
            this.updateAllUserSections();

            return { data, error: null };
        } catch (error) {
            return { data: null, error };
        }
    }

    async addToBalance(amount) {
        const newBalance = (this.currentUser.balance || 0) + amount;
        return await this.updateBalance(newBalance);
    }

    isLoggedIn() {
        return this.currentUser !== null;
    }

    getUser() {
        return this.currentUser;
    }
}

// Initialize auth system
const simpleAuth = new SimpleAuth();


