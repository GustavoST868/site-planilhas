// Menu Mobile
        const mobileToggle = document.querySelector('.mobile-toggle');
        const nav = document.querySelector('nav');

        mobileToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileToggle.querySelector('i').classList.toggle('fa-bars');
            mobileToggle.querySelector('i').classList.toggle('fa-times');
        });

        // Fechar menu ao clicar em um link
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                mobileToggle.querySelector('i').classList.add('fa-bars');
                mobileToggle.querySelector('i').classList.remove('fa-times');
            });
        });

        // Scroll suave
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        });

        // Filtros do portfólio
        const filterBtns = document.querySelectorAll('.filter-btn');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                
                // Add active class to clicked button
                btn.classList.add('active');
                
                // Here would be the filtering logic for portfolio items
                // For this example, we're just showing all
            });
        });

        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Obrigado por entrar em contato! Retornaremos em breve com uma solução para sua necessidade.');
            this.reset();
        });

        // Animação ao rolar
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.about-img, .service-card, .portfolio-item, .contact-form, .benefit-card');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };

        // Configuração inicial para elementos animados
        document.querySelectorAll('.about-img, .service-card, .portfolio-item, .contact-form, .benefit-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });

        // Evento de scroll
        window.addEventListener('scroll', animateOnScroll);
        // Executa uma vez ao carregar a página
        window.addEventListener('load', animateOnScroll);