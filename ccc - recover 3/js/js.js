document.getElementById("paymentMethod").addEventListener("change", function() {
    const paymentNumberInput = document.getElementById("paymentNumber");
    const selectedMethod = this.value;

    // প্রতিটি পেমেন্ট মেথডের নম্বর নির্ধারণ করো
    const paymentNumbers = {
        bkash: "01911772594",
        nagad: "01911772594",
        rocket: "01911772594",
        crypto: "Not available"
    };

    // যদি কোনো অপশন সিলেক্ট না করা থাকে
    if (selectedMethod === "") {
        paymentNumberInput.value = "";
        paymentNumberInput.placeholder = "Select a payment method above";
    } else {
        // নির্দিষ্ট নাম্বার দেখাও
        paymentNumberInput.value = paymentNumbers[selectedMethod];
    }
});





// the link you want to open
  const targetLink = "https:www.facebook.com/profile.php?id=61583494323939";

  // select all elements with class 'contact-info'
  document.querySelectorAll(".live-chat").forEach(el => {
    el.addEventListener("click", () => {
      window.open(targetLink, "_blank"); // opens in new tab
    });
  });
  
  

       
       
       
       // Game data with categories, links, and names
        const games = [

{
                id: 1,
                name: "Aviator",
                category: "Crash",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbCsqhz_zJk2onAvdWOGrtcPanMe74X2gNjg&s",
                playLink: "a",
                tryLink: "https://aviator-demo.spribegaming.com/?currency=USD&operator=demo&jurisdiction=CW&lang=EN&return_url=https%3A%2F%2Fspribe.co%2Fgames&user=86949&token=348qkY297Yp8sqYnM5QWxvQSItBL6gRR"
            },


{
                id: 2,
                name: "Super ACE",
                category: "Slots",
                image: "https://image.winudf.com/v2/image1/Y29tLmhvdDc3Ny5zbG90cGx1cy53aW5qYWNrcG90X2ljb25fMTY2NzM1NTc1MV8wMzg/icon.png?w=280&fakeurl=1",
                playLink: "a",
                tryLink: "https://tadagaming.com/PlusIntro/49?showGame=true"
            },


{
                id: 3,
                name: "Crazy Time",
                category: "Live",
                image: "https://media.royalpanda.com/images/games/crazy-time-live/crazy-time-live-tile.jpg",
                playLink: "a",
                tryLink: ""
            },


{
                id: 4,
                name: "Lucky Jaguar",
                category: "Slots",
                image: "https://static.casino.guru/pict/1035203/Lucky-Jaguar2.png?timestamp=1734087977000&imageDataId=1097597&width=320&height=247",
                playLink: "a",
                tryLink: "https://tadagaming.com/PlusIntro/421?showGame=true"
            },


{
                id: 5,
                name: "Wild Bounty Showdown",
                category: "Slots",
                image: "https://casinos.com/cdn-cgi/image/f=webp,q=86,g=auto/https://objects.kaxmedia.com/auto/o/211735/41925e8bec.jpeg",
                playLink: "a",
                tryLink: "https://www.demoslot.com/free-slots/wild-bounty-showdown-slot/#demo"
            },


{
                id: 6,
                name: "Chicken Road",
                category: "Lottery",
                image: "https://s3-eu-west-1.amazonaws.com/tpd/logos/686b9ab5885e63ea1c7ca7b6/0x0.png",
                playLink: "a",
                tryLink: "https://chickenroadsfr.org/en/"
            },


{
                id: 7,
                name: "Sic Bo",
                category: "Card",
                image: "https://embed.linuxg.net/jili/sic-bo.webp",
                playLink: "a",
                tryLink: "https://tadagaming.com/PlusIntro/125?showGame=true"
            },


{
                id: 8,
                name: "Super Element",
                category: "Slots",
                image: "https://fachaigaming.com/uploads/2680bd43-32bc-4498-aef5-c15984da0386-22055_meta_en.jpg",
                playLink: "a",
                tryLink: "https://www.casinorating.com/games/fa-chai-gaming/slots/super-elements#"
            },


{
                id: 9,
                name: "Bank Fever 2",
                category: "Slots",
                image: "https://hotdog-gaming.com/img/demopage-pic-bank-fever2.png",
                playLink: "a",
                tryLink: "https://cdn.coconut88.com/fun987/?extt=93c3854d-20dc-4e8f-99a9-7d9241a1f057&q=IA%3D%3D%7CNGRmZjQwOGItMmFhYi00YmRhLWFhOGYtMDcyMmU4ZjRlMDI2%7CZnVuT3A%3D&m7=24560&param7=en-us&sc=RG"
            },


{
                id: 10,
                name: "Funky Time",
                category: "Live",
                image: "https://games.evolution.com/wp-content/uploads/2023/05/funky_time_logo_eng_2023_01.svg",
                playLink: "a",
                tryLink: ""
            },


{
                id: 11,
                name: "Roulette",
                category: "Live",
                image: "https://res.cloudinary.com/kalispel/image/upload/f_auto,q_auto/v1714690433/Craft%20Images/Roulette_header_2750x1600_jsg1ap.jpg",
                playLink: "a",
                tryLink: "https://www.247roulette.org/"
            },


{
                id: 12,
                name: "Magic Ace Wild Lock",
                category: "Slots",
                image: "https://assets.slotslaunch.com/29686/magic-ace-wild-lock.jpg",
                playLink: "a",
                tryLink: "https://www.lionbonuses.com/blog/slots/magic-ace-wild-lock/"
            },


{
                id: 13,
                name: "Lucky Neko",
                category: "Slots",
                image: "https://games.okbet.com/wp-content/uploads/2024/08/LUCKY-NEKO-PG-SOFT.png",
                playLink: "a",
                tryLink: "https://slotslaunch.com/pocket-games-soft/lucky-neko"
            },


{
                id: 14,
                name: "Coin Toss",
                category: "Card",
                image: "https://7cricinr.com/blog/wp-content/uploads/2023/08/Coin-Toss-by-Kingmaker.webp",
                playLink: "a",
                tryLink: "https://linuxg.net/game/coin-toss-by-kingmaker/"
            },


{
                id: 15,
                name: "Mega Ball",
                category: "Live",
                image: "https://media.royalpanda.com/images/games/live-mega-ball/live-mega-ball-tile.jpg",
                playLink: "a",
                tryLink: ""
            },


{
                id: 16,
                name: "Charge Buffalo",
                category: "Slots",
                image: "https://embed.linuxg.net/jili/charge-buffalo.webp",
                playLink: "a",
                tryLink: "https://tadagaming.com/PlusIntro/47?showGame=true"
            },


{
                id: 17,
                name: "Fruity Bonanza",
                category: "Slots",
                image: "https://assets.slotslaunch.com/14504/fruity-bonanza.jpg",
                playLink: "a",
                tryLink: "https://slotcatalog.com/en/slots/Fruity-Bonanza"
            },


{
                id: 18,
                name: "7Up 7Down",
                category: "Card",
                image: "https://games.okbet.com/wp-content/uploads/2024/10/7up7down-jili.webp",
                playLink: "a",
                tryLink: "https://tadagaming.com/PlusIntro/124?showGame=true"
            },


{
                id: 19,
                name: "MonoPoly",
                category: "Live",
                image: "https://www.olg.ca/content/dam/olg/web/product/casino/2023/jan-march-2023/game-build-sprint-march-13-27/monopoly-live/ewma/desktop-carousel-logo.png",
                playLink: "a",
                tryLink: ""
            },


{
                id: 20,
                name: "Color Game",
                category: "Slots",
                image: "https://games.okbet.com/wp-content/uploads/2024/08/color-game-jili.webp",
                playLink: "a",
                tryLink: "https://tadagaming.com/PlusIntro/197?showGame=true"
            },


{
                id: 21,
                name: "Mega Ace",
                category: "Slots",
                image: "https://embed.linuxg.net/jili/mega-ace.webp",
                playLink: "a",
                tryLink: "https://tadagaming.com/PlusIntro/134?showGame=true"
            },


{
                id: 22,
                name: "Fortune Games",
                category: "Slots",
                image: "https://s.cafebazaar.ir/images/icons/com.fufafa.jogo.fortuneGems.free.games-004d31cf-2965-44a7-9c92-6162447dcdf9_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize",
                playLink: "a",
                tryLink: "https://tadagaming.com/PlusIntro/109?showGame=true"
            },


{
                id: 23,
                name: "Fortune Games 2",
                category: "Slots",
                image: "https://image.winudf.com/v2/image1/Y29tLmZ1ZmFmYS5qb2dvLmZvcnR1bmUuZ2Vtcy50d28uZnJlZS5nYW1lc19pY29uXzE2OTg4MzQ3NTRfMDQ3/icon.png?w=186&fakeurl=1",
                playLink: "a",
                tryLink: "https://tadagaming.com/PlusIntro/223?showGame=true"
            },


{
                id: 24,
                name: "Fortune Games 3",
                category: "Slots",
                image: "https://static.templodeslots.es/pict/964816/Fortune-Gems-3.png?timestamp=1727156324000&imageDataId=1015210&width=320&height=247",
                playLink: "a",
                tryLink: "https://tadagaming.com/PlusIntro/300?showGame=true"
            },


{
                id: 25,
                name: "Ali Baba",
                category: "Slots",
                image: "https://games.okbet.com/wp-content/uploads/2024/10/ali-baba-jili.webp",
                playLink: "a",
                tryLink: "https://tadagaming.com/PlusIntro/110?showGame=true"
            },


{
                id: 26,
                name: "Crown Of Fortune",
                category: "Slots",
                image: "https://assets.slotslaunch.com/38456/01K5TAX29NVCAFEGRK588H9F87.png",
                playLink: "a",
                tryLink: "https://tadagaming.com/PlusIntro/621?showGame=true"
            },


{
                id: 27,
                name: "Super Rioh",
                category: "Slots",
                image: "https://assets.slotslaunch.com/11367/552x380_EN_GAMEID_100.png",
                playLink: "a",
                tryLink: "https://tadagaming.com/PlusIntro/100?showGame=true"
            },


{
                id: 28,
                name: "Medusa",
                category: "Slots",
                image: "https://frpyol0mhkke.compat.objectstorage.eu-frankfurt-1.oraclecloud.com/lpcms-assets/thumbnail/68d1b560a1bf4Medusa/79a4e9e9f468e277dcff8dff965a67bb.png",
                playLink: "a",
                tryLink: "https://tadagaming.com/PlusIntro/101?showGame=true"
            },


{
                id: 29,
                name: "Romax",
                category: "Slots",
                image: "https://embed.linuxg.net/jili/romax.webp",
                playLink: "a",
                tryLink: "https://tadagaming.com/PlusIntro/102?showGame=true"
            },


{
                id: 30,
                name: "Golden Empire",
                category: "Slots",
                image: "https://games.okbet.com/wp-content/uploads/2024/08/golden-empire-jili.webp",
                playLink: "a",
                tryLink: "https://tadagaming.com/PlusIntro/103?showGame=true"
            },


{
                id: 31,
                name: "Magic Lamp",
                category: "Slots",
                image: "https://static.casino.guru/pict/554682/Magic-Lamp.png?timestamp=1693809786000&imageDataId=598906&width=320&height=247",
                playLink: "a",
                tryLink: "https://tadagaming.com/PlusIntro/108?showGame=true"
            },


{
                id: 32,
                name: "Agent ace",
                category: "Slots",
                image: "https://games.okbet.com/wp-content/uploads/2024/09/agent-ace-jili-slot-game.webp",
                playLink: "a",
                tryLink: "https://tadagaming.com/PlusIntro/115?showGame=true"
            },


{
                id: 33,
                name: "Happy Taxi",
                category: "Slots",
                image: "https://embed.linuxg.net/jili/happy-taxi.webp",
                playLink: "a",
                tryLink: "https://tadagaming.com/PlusIntro/116?showGame=true"
            },


{
                id: 34,
                name: "iRich Bingo",
                category: "Slots",
                image: "https://games.okbet.com/wp-content/uploads/2024/09/irich-bingo-jili.webp",
                playLink: "a",
                tryLink: "https://tadagaming.com/PlusIntro/122?showGame=true"
            },


{
                id: 35,
                name: "Dragon and Tiger",
                category: "Card",
                image: "https://deco-factory-hoesbach.de/_next/image?url=https%3A%2F%2Ffrpyol0mhkke.compat.objectstorage.eu-frankfurt-1.oraclecloud.com%2Flpcms-assets%2Fthumbnail%2F68d16a30b6a02DragonandTigerTaDaGaming%2F64c7e0fc152fe52071c331f3629c6d23.png&w=750&q=75",
                playLink: "a",
                tryLink: "https://tadagaming.com/PlusIntro/123?showGame=true"
            },


{
                id: 36,
                name: "Bone Fortune",
                category: "Slots",
                image: "https://m.media-amazon.com/images/I/91RqWvvK83L.png",
                playLink: "a",
                tryLink: "https://tadagaming.com/PlusIntro/126?showGame=true"
            },


{
                id: 37,
                name: "Ludo",
                category: "Card",
                image: "https://static.casino.guru/pict/555164/Ludo.png?timestamp=1693811762000&imageDataId=599763&width=320&height=247",
                playLink: "a",
                tryLink: "https://tadagaming.com/PlusIntro/128?showGame=true"
            },


{
                id: 38,
                name: "ThorX",
                category: "Slots",
                image: "https://games.okbet.com/wp-content/uploads/2024/09/thor-x-jili.webp",
                playLink: "a",
                tryLink: "https://tadagaming.com/PlusIntro/130?showGame=true"
            },


{
                id: 39,
                name: "Mayan Empire",
                category: "Slots",
                image: "https://assets.slotslaunch.com/11339/552x380_EN_GAMEID_135.png",
                playLink: "a",
                tryLink: "https://tadagaming.com/PlusIntro/135?showGame=true"
            },


{
                id: 40,
                name: "Samba",
                category: "Slots",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGpZBtJT8D6zFahrF1f3Pgp1ciascfHnfYew&s",
                playLink: "a",
                tryLink: "https://tadagaming.com/PlusIntro/136?showGame=true"
            },


{
                id: 41,
                name: "Golad Rush",
                category: "Slots",
                image: "https://media.21.co.uk/images/games/gold-rush/gold-rush-square.jpg",
                playLink: "a",
                tryLink: "https://tadagaming.com/PlusIntro/137?showGame=true"
            },


{
                id: 42,
                name: "Fortune Bingo",
                category: "Slots",
                image: "https://static.templodeslots.es/pict/555086/Fortune-Bingo.png?timestamp=1693811600000&imageDataId=599620&width=320&height=247",
                playLink: "a",
                tryLink: "https://tadagaming.com/PlusIntro/139?showGame=true"
            },


{
                id: 43,
                name: "World Cup",
                category: "Slots",
                image: "https://embed.linuxg.net/jili/world-cup.webp",
                playLink: "a",
                tryLink: "https://tadagaming.com/PlusIntro/146?showGame=true"
            },


{
                id: 45,
                name: "Golden Empire",
                category: "",
                image: "https://st.softgamings.com/uploads/GoldenEmpire.png",
                playLink: "a",
                tryLink: "https://tadagaming.com/PlusIntro/103?showGame=true"
            },


        ];


// DOM elements
const gamesContainer = document.getElementById('gamesContainer');
const menuItems = document.querySelectorAll('.menu-item');
const pageContents = document.querySelectorAll('.page-content');
const navItems = document.querySelectorAll('.nav-item');

// Function to render games based on category
function renderGames(category = 'all') {
    gamesContainer.innerHTML = '';
    
    const filteredGames = category === 'all' 
        ? games 
        : games.filter(game => game.category === category);
    
    if (filteredGames.length === 0) {
        gamesContainer.innerHTML = '<div class="no-games">No games found in this category</div>';
        return;
    }
    
    filteredGames.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <div class="game-image-container">
                <img src="${game.image}" alt="${game.name}" class="game-image">
                <div class="game-overlay">
                    <a class="play-btn">PLAY</a>
                    <a href="${game.tryLink}" target="_self" class="try-btn">TRY</a>
                </div>
            </div>
            <div class="game-name">${game.name}</div>
        `;
        gamesContainer.appendChild(gameCard);
    });
}

// Function to show specific page - UPDATED
function showPage(pageId) {
    console.log('Showing page:', pageId);
    
    // Check if user is logged in for protected pages
    const protectedPages = ['referralPage', 'depositPage', 'rewardsPage', 'accountPage'];
    
    if (protectedPages.includes(pageId) && !simpleAuth.isLoggedIn()) {
        // Show login modal instead of protected page
        createAuthModal();
        document.getElementById('authModal').style.display = 'block';
        return;
    }
    
    // Hide all pages
    pageContents.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Update active nav item
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-page') === pageId) {
            item.classList.add('active');
        }
    });
    
    // Update page content if user is logged in
    if (simpleAuth.isLoggedIn() && simpleAuth.currentUser) {
        switch (pageId) {
            case 'accountPage':
                simpleAuth.updateAccountInfo();
                break;
            case 'referralPage':
                simpleAuth.updateReferralPage();
                break;
            case 'rewardsPage':
                simpleAuth.updateRewardsPage();
                break;
            case 'depositPage':
                simpleAuth.updateDepositPage();
                break;
        }
    }
}

// Initialize with all games
renderGames();

// Category filtering
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        // Update active menu item
        menuItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        
        // Filter games
        const category = this.getAttribute('data-category');
        renderGames(category);
    });
});

// Page navigation - UPDATED
navItems.forEach(item => {
    item.addEventListener('click', function() {
        const pageId = this.getAttribute('data-page');
        showPage(pageId);
    });
});

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Auto slide change
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Add click events to dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Login button functionality - UPDATED
document.querySelector('.login-btn').addEventListener('click', function() {
    if (simpleAuth.isLoggedIn()) {
        // User is logged in, show logout confirmation
        if (confirm('Are you sure you want to logout?')) {
            simpleAuth.logout();
        }
    } else {
        // User is not logged in, show auth modal
        createAuthModal();
        const modal = document.getElementById('authModal');
        if (modal) {
            modal.style.display = 'block';
        }
    }
});

// Deposit form submission
document.querySelector('.submit-btn')?.addEventListener('click', function() {
    alert('Deposit request submitted!');
});

// Claim bonus buttons
document.querySelectorAll('.rewards-grid .play-btn').forEach(button => {
    button.addEventListener('click', function() {
        alert('Bonus claimed successfully!');
    });
});

// Account action buttons
document.querySelectorAll('.action-btn').forEach(button => {
    button.addEventListener('click', function() {
        const action = this.textContent.trim();
    });
});

// Auth Modal Functions
function createAuthModal() {
    // Remove existing modal if any
    const existingModal = document.getElementById('authModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    const modalHTML = `
        <div id="authModal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2 style="color: #ffcc00; text-align: center; margin-bottom: 20px;">LUCKY SPIN CASINO</h2>
                <div class="auth-tabs">
                    <button class="tab-btn active" data-tab="login">Login</button>
                    <button class="tab-btn" data-tab="signup">Register</button>
                </div>
                
                <div id="loginTab" class="tab-content active">
                    <form id="loginForm">
                        <div class="form-group">
                            <label class="form-label">Username or Mobile</label>
                            <input type="text" class="form-input" id="loginUsername" required placeholder="Enter username or mobile">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Password</label>
                            <input type="password" class="form-input" id="loginPassword" required placeholder="Enter password">
                        </div>
                        <button type="submit" class="submit-btn">LOGIN</button>
                    </form>
                </div>
                
                <div id="signupTab" class="tab-content">
                    <form id="signupForm">
                        <div class="form-group">
                            <label class="form-label">Username *</label>
                            <input type="text" class="form-input" id="signupUsername" required placeholder="Choose a username">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Mobile Number *</label>
                            <input type="tel" class="form-input" id="signupMobile" required placeholder="Enter mobile number">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Password *</label>
                            <input type="password" class="form-input" id="signupPassword" required minlength="6" placeholder="At least 6 characters">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Email (Optional)</label>
                            <input type="email" class="form-input" id="signupEmail" placeholder="Optional email">
                        </div>
                        <button type="submit" class="submit-btn">CREATE ACCOUNT</button>
                    </form>
                </div>
                
                <div id="authMessage" class="auth-message"></div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add modal event listeners
    const modal = document.getElementById('authModal');
    const closeBtn = modal.querySelector('.close');
    const tabBtns = modal.querySelectorAll('.tab-btn');
    const tabContents = modal.querySelectorAll('.tab-content');
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.getAttribute('data-tab');
            
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(tabName + 'Tab').classList.add('active');
        });
    });
    
    // Form submissions
    document.getElementById('loginForm').addEventListener('submit', handleSimpleLogin);
    document.getElementById('signupForm').addEventListener('submit', handleSimpleSignup);
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

async function handleSimpleLogin(e) {
    e.preventDefault();
    const identifier = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const messageEl = document.getElementById('authMessage');
    
    try {
        messageEl.textContent = 'Logging in...';
        messageEl.className = 'auth-message info';
        
        const result = await simpleAuth.login(identifier, password);
        
        if (result.success) {
            messageEl.textContent = 'Login successful!';
            messageEl.className = 'auth-message success';
            
            setTimeout(() => {
                const modal = document.getElementById('authModal');
                if (modal) {
                    modal.style.display = 'none';
                }
                messageEl.textContent = '';
                document.getElementById('loginForm').reset();
            }, 1000);
        } else {
            throw new Error(result.error);
        }
    } catch (error) {
        messageEl.textContent = error.message;
        messageEl.className = 'auth-message error';
    }
}

async function handleSimpleSignup(e) {
    e.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const mobile = document.getElementById('signupMobile').value;
    const password = document.getElementById('signupPassword').value;
    const email = document.getElementById('signupEmail').value;
    const messageEl = document.getElementById('authMessage');
    
    try {
        messageEl.textContent = 'Creating account...';
        messageEl.className = 'auth-message info';
        
        const result = await simpleAuth.register(username, mobile, password, email);
        
        if (result.success) {
            messageEl.textContent = 'Account created successfully! Welcome to Lucky Spin!';
            messageEl.className = 'auth-message success';
            
            setTimeout(() => {
                const modal = document.getElementById('authModal');
                if (modal) {
                    modal.style.display = 'none';
                }
                messageEl.textContent = '';
                document.getElementById('signupForm').reset();
            }, 2000);
        } else {
            throw new Error(result.error);
        }
    } catch (error) {
        messageEl.textContent = error.message;
        messageEl.className = 'auth-message error';
    }
}

// Temporary fix: Clear corrupted auth data
function clearAuthData() {
    const savedUser = localStorage.getItem('casino_user');
    if (savedUser) {
        try {
            const user = JSON.parse(savedUser);
            if (!user.id || !user.username) {
                localStorage.removeItem('casino_user');
                console.log('Cleared corrupted auth data');
            }
        } catch (error) {
            localStorage.removeItem('casino_user');
            console.log('Cleared invalid auth data');
        }
    }
}

// Run this on page load
document.addEventListener('DOMContentLoaded', function() {
    clearAuthData();
});


// Global function for bonus claiming
async function claimBonus(bonusType, event = null) {
    if (!simpleAuth.isLoggedIn()) {
        alert('Please login to claim bonuses');
        return;
    }

    try {
        // Get bonus details from available_bonuses table
        const { data: bonusData, error: bonusFetchError } = await supabase
            .from('available_bonuses')
            .select('*')
            .eq('bonus_type', bonusType)
            .eq('is_active', true)
            .single();

        if (bonusFetchError || !bonusData) {
            throw new Error('Bonus not available or not found');
        }

        const amount = bonusData.amount;

        // Check if user already claimed this bonus
        const { data: existingClaims, error: checkError } = await supabase
            .from('user_bonuses')
            .select('id')
            .eq('user_id', simpleAuth.currentUser.id)
            .eq('bonus_type', bonusType);

        if (checkError) throw checkError;

        if (existingClaims && existingClaims.length >= bonusData.max_claims_per_user) {
            alert(`You have already claimed the maximum times for ${bonusData.bonus_name}!`);
            return;
        }

        // Get the button safely
        let button;
        if (event && event.target) {
            button = event.target;
        } else {
            // Fallback: find button by bonus type
            button = document.querySelector(`[data-bonus-type="${bonusType}"]`);
        }

        // Show loading state if button found
        if (button) {
            button.textContent = 'Claiming...';
            button.disabled = true;
        }

        // Add bonus to user's wallet
        const newBalance = (simpleAuth.currentUser.balance || 0) + amount;
        
        // Update user balance in database
        const { data: updatedUser, error: updateError } = await supabase
            .from('profiles')
            .update({ balance: newBalance })
            .eq('id', simpleAuth.currentUser.id)
            .select()
            .single();

        if (updateError) throw updateError;

        // Record the bonus claim
        const { error: bonusError } = await supabase
            .from('user_bonuses')
            .insert([
                {
                    user_id: simpleAuth.currentUser.id,
                    bonus_type: bonusType,
                    amount: amount,
                    description: bonusData.bonus_name
                }
            ]);

        if (bonusError) throw bonusError;

        // Record transaction
        const { error: txError } = await supabase
            .from('transactions')
            .insert([
                {
                    user_id: simpleAuth.currentUser.id,
                    type: 'bonus',
                    amount: amount,
                    description: `${bonusData.bonus_name} Claimed`,
                    status: 'completed'
                }
            ]);

        if (txError) throw txError;

        // Update local user data
        simpleAuth.currentUser.balance = newBalance;
        localStorage.setItem('casino_user', JSON.stringify(simpleAuth.currentUser));
        
        // Update UI
        simpleAuth.updateAllUserSections();

        alert(`🎉 Success! $${amount} ${bonusData.bonus_name} has been added to your wallet!`);
        
        // Update the button if found
        if (button) {
            button.textContent = 'CLAIMED';
            button.style.background = '#4CAF50';
            button.disabled = true;
        }

    } catch (error) {
        console.error('Error claiming bonus:', error);
        alert('Failed to claim bonus: ' + error.message);
        
        // Reset button if found
        let button;
        if (event && event.target) {
            button = event.target;
        } else {
            button = document.querySelector(`[data-bonus-type="${bonusType}"]`);
        }
        
        if (button) {
            button.textContent = 'CLAIM';
            button.disabled = false;
        }
    }
}

// Add event listeners for bonus buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('claim-bonus-btn')) {
        const bonusType = e.target.getAttribute('data-bonus-type');
        claimBonus(bonusType, e);
    }
});

// Account Actions Functions

// Show Transaction History
async function showTransactionHistory() {
    if (!simpleAuth.isLoggedIn()) {
        alert('Please login to view transaction history');
        return;
    }

    try {
        const { data: transactions, error } = await supabase
            .from('transactions')
            .select('*')
            .eq('user_id', simpleAuth.currentUser.id)
            .order('created_at', { ascending: false })
            .limit(50);

        if (error) throw error;

        displayTransactionHistory(transactions);
        document.getElementById('transactionHistoryModal').style.display = 'block';

    } catch (error) {
        console.error('Error loading transactions:', error);
        alert('Failed to load transaction history: ' + error.message);
    }
}

function displayTransactionHistory(transactions) {
    const tbody = document.getElementById('transactionHistoryBody');
    tbody.innerHTML = '';

    if (!transactions || transactions.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; padding: 20px;">
                    No transactions found
                </td>
            </tr>
        `;
        return;
    }

    transactions.forEach(tx => {
        const row = document.createElement('tr');
        const date = new Date(tx.created_at).toLocaleDateString();
        const amountColor = tx.type === 'deposit' || tx.type === 'bonus' ? '#4CAF50' : '#f44336';
        const amountSign = tx.type === 'deposit' || tx.type === 'bonus' ? '+' : '-';
        
        row.innerHTML = `
            <td>${date}</td>
            <td>
                <span style="color: ${tx.type === 'deposit' ? '#4CAF50' : tx.type === 'bonus' ? '#ffcc00' : '#2196F3'}">
                    ${tx.type?.toUpperCase() || 'N/A'}
                </span>
            </td>
            <td style="color: ${amountColor}; font-weight: bold;">
                ${amountSign}$${Math.abs(tx.amount).toFixed(2)}
            </td>
            <td>${tx.description || 'N/A'}</td>
            <td>
                <span style="color: ${tx.status === 'completed' ? '#4CAF50' : '#ff9800'}">
                    ${tx.status?.toUpperCase() || 'COMPLETED'}
                </span>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Show Edit Profile
function showEditProfile() {
    if (!simpleAuth.isLoggedIn()) {
        alert('Please login to edit profile');
        return;
    }

    // Fill form with current user data
    document.getElementById('editProfileUsername').value = simpleAuth.currentUser.username || '';
    document.getElementById('editProfileEmail').value = simpleAuth.currentUser.email || '';
    document.getElementById('editProfileMobile').value = simpleAuth.currentUser.mobile || '';

    document.getElementById('editProfileModal').style.display = 'block';
}

// Update Profile
document.addEventListener('DOMContentLoaded', function() {
    // Edit Profile Form
    const editProfileForm = document.getElementById('editProfileForm');
    if (editProfileForm) {
        editProfileForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            await updateUserProfile();
        });
    }

    // Change Password Form
    const changePasswordForm = document.getElementById('changePasswordForm');
    if (changePasswordForm) {
        changePasswordForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            await changeUserPassword();
        });
    }
});

async function updateUserProfile() {
    try {
        const username = document.getElementById('editProfileUsername').value;
        const email = document.getElementById('editProfileEmail').value;
        const mobile = document.getElementById('editProfileMobile').value;

        if (!username || !mobile) {
            alert('Username and mobile number are required');
            return;
        }

        // Check if username is already taken (excluding current user)
        const { data: existingUser, error: checkError } = await supabase
            .from('profiles')
            .select('id')
            .eq('username', username)
            .neq('id', simpleAuth.currentUser.id)
            .single();

        if (existingUser && !checkError) {
            alert('Username is already taken. Please choose another one.');
            return;
        }

        const { error } = await supabase
            .from('profiles')
            .update({
                username: username,
                email: email,
                mobile: mobile,
                updated_at: new Date().toISOString()
            })
            .eq('id', simpleAuth.currentUser.id);

        if (error) throw error;

        // Update local user data
        simpleAuth.currentUser.username = username;
        simpleAuth.currentUser.email = email;
        simpleAuth.currentUser.mobile = mobile;
        localStorage.setItem('casino_user', JSON.stringify(simpleAuth.currentUser));

        // Update UI
        simpleAuth.updateAccountInfo();

        alert('Profile updated successfully!');
        closeModal('editProfileModal');

    } catch (error) {
        console.error('Error updating profile:', error);
        alert('Failed to update profile: ' + error.message);
    }
}

// Show Change Password
function showChangePassword() {
    if (!simpleAuth.isLoggedIn()) {
        alert('Please login to change password');
        return;
    }

    document.getElementById('changePasswordModal').style.display = 'block';
}

// Change Password
async function changeUserPassword() {
    try {
        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (!currentPassword || !newPassword || !confirmPassword) {
            alert('Please fill all password fields');
            return;
        }

        if (newPassword.length < 6) {
            alert('New password must be at least 6 characters long');
            return;
        }

        if (newPassword !== confirmPassword) {
            alert('New passwords do not match');
            return;
        }

        // Verify current password
        const hashedCurrentPassword = simpleAuth.hashPassword(currentPassword);
        if (hashedCurrentPassword !== simpleAuth.currentUser.password) {
            alert('Current password is incorrect');
            return;
        }

        // Hash new password
        const hashedNewPassword = simpleAuth.hashPassword(newPassword);

        // Update password in database
        const { error } = await supabase
            .from('profiles')
            .update({
                password: hashedNewPassword,
                updated_at: new Date().toISOString()
            })
            .eq('id', simpleAuth.currentUser.id);

        if (error) throw error;

        // Update local user data
        simpleAuth.currentUser.password = hashedNewPassword;
        localStorage.setItem('casino_user', JSON.stringify(simpleAuth.currentUser));

        alert('Password changed successfully!');
        document.getElementById('changePasswordForm').reset();
        closeModal('changePasswordModal');

    } catch (error) {
        console.error('Error changing password:', error);
        alert('Failed to change password: ' + error.message);
    }
}

// Logout User
function logoutUser() {
    if (confirm('Are you sure you want to logout?')) {
        simpleAuth.logout();
        alert('You have been logged out successfully!');
    }
}

// Close Modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Update Account Info Display
function updateAccountDisplay() {
    if (!simpleAuth.currentUser) return;

    const user = simpleAuth.currentUser;
    
    // Update account info display
    document.getElementById('accountUsername').textContent = user.username || 'N/A';
    document.getElementById('accountMobile').textContent = user.mobile || 'N/A';
    document.getElementById('accountEmail').textContent = user.email || 'N/A';
    document.getElementById('accountMemberSince').textContent = user.member_since ? new Date(user.member_since).toLocaleDateString() : 'N/A';
    document.getElementById('accountVipLevel').textContent = user.vip_level || 'Bronze';
    document.getElementById('accountBalance').textContent = `$${(user.balance || 0).toFixed(2)}`;
    document.getElementById('accountBonusBalance').textContent = `$${(user.pending_bonus || 0).toFixed(2)}`;
}

// Update SimpleAuth to use this function
// Add this to your simple-auth.js in the updateAccountInfo method:
/*
updateAccountInfo() {
    if (!this.currentUser) return;
    updateAccountDisplay(); // Call the new display function
}
*/


// --- 1️⃣ Function to get VIP Level dynamically ---
function getVipLevel() {
  let vipText = null;
  document.querySelectorAll(".account-detail").forEach(detail => {
    let label = detail.querySelector("span:first-child")?.textContent.trim().toLowerCase();
    if (label === "vip level:") {
      vipText = detail.querySelector("span:last-child")?.textContent.trim().toLowerCase();
    }
  });
  return vipText || "normal";
}

// --- 2️⃣ Create popup container ---
const popup = document.createElement("div");
popup.innerHTML = `
  <div id="popup-overlay" style="
    position: fixed; top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.5);
    display: none; justify-content: center; align-items: center;
    z-index: 9999;
  "></div>
`;
document.body.appendChild(popup);

// --- 3️⃣ Function to show popup with styled design ---
function showPopup() {
  const vipLevel = getVipLevel();
  const overlay = document.getElementById("popup-overlay");
  overlay.innerHTML = "";

  let popupHTML = "";

  if (vipLevel === "bronze") {
    popupHTML = `
      <div id="popup-box" style="
        background: #fff3cd; padding: 25px 30px;
        border-radius: 12px; max-width: 400px;
        text-align: center; box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        font-family: Arial, sans-serif; line-height: 1.5;
      ">
        <h2 style="color:#b87333; margin-bottom: 15px;">🥉 Bronze VIP</h2>
        <p style="color:#333; font-size: 16px; margin-bottom: 10px;">অনুগ্রহ করে খেলা শুরু করতে ডিপোজিট করুন</p>
        <p style="color:#333; font-size: 16px; margin-bottom: 10px;">♥️ প্রথম 1000 ডিপোজিটে ১০০% বোনাস</p>
        <p style="color:#333; font-size: 16px; margin-bottom: 20px;">♥️ প্রথম ৫০০০ ডিপোজিটে ২০০% বোনাস</p>
        <p style="color:#333; font-size: 16px; margin-bottom: 20px;">♥️ প্রথম ১০০০০ বেশি ডিপোজিটে ৩০০% বোনাস</p>
        <button id="close-popup" style="
          background: #b87333; color: white; border: none;
          padding: 10px 20px; border-radius: 6px; cursor: pointer;
          font-size: 15px;
        ">Close</button>
      </div>
    `;
  } else if (vipLevel === "silver") {
    popupHTML = `
      <div id="popup-box" style="
        background: #e6e6e6; padding: 25px 30px;
        border-radius: 12px; max-width: 400px;
        text-align: center; box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        font-family: Arial, sans-serif; line-height: 1.5;
      ">
        <h2 style="color:silver; margin-bottom: 15px;">🥈 Silver VIP</h2>
        <p style="color:#333; font-size: 16px; margin-bottom: 10px;">আপনি বোনাস নিয়ে খেলছেন , অনুগ্রহ করে ৫ জন বন্ধুকে রেফার করুন</p>
        <p style="color:#333; font-size: 16px; margin-bottom: 10px;">♥️ প্রতি রেফারে ৪৫০০ টাকা বোনাস পাবেন</p>
        <p style="color:#333; font-size: 16px; margin-bottom: 20px;">♥️ ৫ জন রেফার করে ২২৫০০ টাকা পাবেন</p>
        <button id="close-popup" style="
          background: #777; color: white; border: none;
          padding: 10px 20px; border-radius: 6px; cursor: pointer;
          font-size: 15px;
        ">Close</button>
      </div>
    `;
  } else if (vipLevel === "gold") {
    popupHTML = `
      <div id="popup-box" style="
        background: #fffbe6; padding: 25px 30px;
        border-radius: 12px; max-width: 400px;
        text-align: center; box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        font-family: Arial, sans-serif; line-height: 1.5;
      ">
        <h2 style="color:gold; margin-bottom: 15px;">🥇 Gold VIP</h2>
        <p style="color:#333; font-size: 16px; margin-bottom: 10px;">আপনি বোনাস নিয়ে খেলছেন, রেফারকে মিনিমাম ১০০০ ডিপোজিট করতে হবে  💎</p>
        <p style="color:#333; font-size: 16px; margin-bottom: 10px;">♥️ প্রতি ডিপোজিটের আপনি ১০% কমিশন পাবেন</p>
        <p style="color:#333; font-size: 16px; margin-bottom: 20px;">♥️ লস বোনাস পাবেন ২০%</p>
        <button id="close-popup" style="
          background: gold; color: white; border: none;
          padding: 10px 20px; border-radius: 6px; cursor: pointer;
          font-size: 15px;
        ">Close</button>
      </div>
    `;
  } else {
    popupHTML = `
      <div id="popup-box" style="
        background: #fff; padding: 25px 30px;
        border-radius: 12px; max-width: 400px;
        text-align: center; box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        font-family: Arial, sans-serif; line-height: 1.5;
      ">
        <h2 style="color:black; margin-bottom: 15px;">অনুগ্রহ করে প্রথমে একটি আইডি খুলুন</h2>
        <p style="color:#333; font-size: 16px; margin-bottom: 20px;">♥️ ওয়েলকাম ফ্রি বোনাস ৫১০ টাকা</p>
        <p style="color:#333; font-size: 16px; margin-bottom: 20px;">♥️ ৪৫০০ টাকা প্রতি রেফার বোনাস</p>
        <p style="color:#333; font-size: 16px; margin-bottom: 10px;">♥️ ১০০০ ডিপোজিটে ১০০% বোনাস</p>
        <p style="color:#333; font-size: 16px; margin-bottom: 10px;">♥️ ৫০০০ ডিপোজিটে ২০০% বোনাস</p>
        <p style="color:#333; font-size: 16px; margin-bottom: 20px;">♥️ ১০০০০ ডিপোজিটে ৩০০% বোনাস</p>
        <button id="close-popup" style="
          background: #ff4444; color: white; border: none;
          padding: 10px 20px; border-radius: 6px; cursor: pointer;
          font-size: 15px;
        ">Close</button>
      </div>
    `;
  }

  overlay.innerHTML = popupHTML;
  overlay.style.display = "flex";
}

// --- 4️⃣ Trigger popup on play-btn click ---
document.querySelectorAll(".play-btn").forEach(btn => {
  btn.addEventListener("click", showPopup);
});

// --- 5️⃣ Close popup ---
document.addEventListener("click", e => {
  const overlay = document.getElementById("popup-overlay");
  if (!overlay) return;
  if (e.target.id === "close-popup" || e.target.id === "popup-overlay") {
    overlay.style.display = "none";
  }
});


// Show popup on .play-btn click
document.querySelectorAll(".play-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("popup-overlay").style.display = "flex";
  });
});

// Close popup on close button or outside click
document.addEventListener("click", e => {
  const overlay = document.getElementById("popup-overlay");
  if (!overlay) return;

  if (e.target.id === "close-popup" || e.target.id === "popup-overlay") {
    overlay.style.display = "none";
  }
});
