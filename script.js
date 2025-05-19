document.addEventListener('DOMContentLoaded', () => {
    // Animation des cartes fonctionnalités au scroll
    const featureCards = document.querySelectorAll('.feature-card');
    
    const featureObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    featureCards.forEach(card => {
        featureObserver.observe(card);
    });
    
    // Animation des étapes d'installation
    const installSection = document.querySelector('.install-steps');
    
    const installObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.2 });
    
    installObserver.observe(installSection);
    
    // Script pour le carrousel
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    let currentIndex = 0;
    const totalItems = items.length;
    
    function updateCarousel() {
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            currentIndex = parseInt(indicator.dataset.index);
            updateCarousel();
        });
    });
    
    let autoSlide = setInterval(nextSlide, 5000);
    
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });
    
    carousel.addEventListener('mouseleave', () => {
        autoSlide = setInterval(nextSlide, 5000);
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    });
    
    // Effet de téléchargement
    const downloadBtn = document.getElementById('download-btn');
    
    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        downloadBtn.textContent = 'Téléchargement...';
        
        setTimeout(() => {
            downloadBtn.textContent = 'Téléchargé !';
            setTimeout(() => {
                downloadBtn.textContent = 'Télécharger l\'extension';
            }, 2000);
        }, 1000);
    });
    
    // Animation des icônes flottantes
        function createFloatingIcons() {
            const icons = ['🎥', '📱', '🎞️', '💻', '🌐'];
            const header = document.querySelector('header');

            const launchWave = () => {
                const iconCount = Math.floor(Math.random() * 3) + 2;
                
                for(let i = 0; i < iconCount; i++) {
                    const icon = document.createElement('div');
                    icon.className = 'floating-icon';
                    icon.style.left = `${Math.random() * 90 + 5}%`;
                    icon.style.top = `${Math.random() * 40 + 60}%`;
                    icon.textContent = icons[Math.floor(Math.random() * icons.length)];
                    icon.style.fontSize = `${Math.random() * 1.5 + 1.2}rem`;
                    icon.style.animationDuration = `${Math.random() * 1 + 1.5}s`;
                    header.appendChild(icon);
                    setTimeout(() => icon.remove(), 2500);
                }
                setTimeout(launchWave, Math.random() * 1000 + 1000);
            }
            launchWave();
        }
        createFloatingIcons();
});