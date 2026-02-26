// Matrix Rain Animation
class MatrixRain {
    constructor(canvasId = 'matrix') {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.chars = '01アウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        this.fontSize = 16;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        this.drops = Array(this.columns).fill(0);
        this.animationId = null;

        this.init();
    }

    init() {
        this.handleResize();
        window.addEventListener('resize', () => this.handleResize());
        this.draw();
    }

    handleResize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        this.drops = Array(this.columns).fill(0);
    }

    draw() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = '#00FF00';
        this.ctx.font = this.fontSize + 'px monospace';

        for (let i = 0; i < this.drops.length; i++) {
            const char = this.chars.charAt(Math.floor(Math.random() * this.chars.length));
            this.ctx.fillText(char, i * this.fontSize, this.drops[i] * this.fontSize);
            if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.95) {
                this.drops[i] = 0;
            }
            this.drops[i]++;
        }

        this.animationId = requestAnimationFrame(() => this.draw());
    }

    stop() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}

// Smooth Scrolling Navigation
class SmoothScroll {
    constructor() {
        this.setupNavigation();
    }

    setupNavigation() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Contact Form Handler
class ContactForm {
    constructor(formSelector = '.contact-form') {
        this.form = document.querySelector(formSelector);
        if (this.form) {
            this.setupFormHandler();
        }
    }

    setupFormHandler() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);

        if (this.validateForm(data)) {
            this.sendForm(data);
        }
    }

    validateForm(data) {
        if (!data.email || !this.isValidEmail(data.email)) {
            console.error('Invalid email');
            return false;
        }
        if (!data.message || data.message.trim().length === 0) {
            console.error('Message is required');
            return false;
        }
        return true;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    sendForm(data) {
        console.log('Form submitted:', data);
        this.form.reset();
        this.showSuccessMessage();
    }

    showSuccessMessage() {
        const message = document.createElement('div');
        message.className = 'success-message';
        message.textContent = 'Message sent successfully!';
        this.form.appendChild(message);
        setTimeout(() => message.remove(), 3000);
    }
}

// Intersection Observer for Animation Triggers
class AnimationTrigger {
    constructor() {
        this.setupObserver();
    }

    setupObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        document.querySelectorAll('.project-card, .skill-card').forEach(el => {
            observer.observe(el);
        });
    }
}

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
    new MatrixRain();
    new SmoothScroll();
    new ContactForm();
    new AnimationTrigger();
});
