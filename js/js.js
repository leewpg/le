
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
        
        // Login button functionality
        document.querySelector('.login-btn').addEventListener('click', function() {
            alert('Login functionality would go here!');
        });
        
        // Play button functionality
        document.querySelectorAll('.play-btn').forEach(button => {
            button.addEventListener('click', function() {
                alert('Game would launch here!');
            });
        });
        
        // Bottom navigation functionality
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', function() {
                document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
                this.classList.add('active');
                
                const pageName = this.querySelector('span').textContent;
                alert(`Navigating to ${pageName} page`);
            });
        });
