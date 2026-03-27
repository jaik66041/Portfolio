// JavaScript Document

/*

TemplateMo 600 Prism Flux

https://templatemo.com/tm-600-prism-flux

*/

// ================= DATA =================

const portfolioData = [
    { id: 1, title: 'Neural Network', description: 'Advanced AI system...', image: 'images/neural-network.jpg', tech: ['TensorFlow', 'Python', 'CUDA'] },
    { id: 2, title: 'Quantum Cloud', description: 'Next-gen cloud...', image: 'images/quantum-cloud.jpg', tech: ['AWS', 'Kubernetes', 'Docker'] },
    { id: 3, title: 'Blockchain Vault', description: 'Secure storage...', image: 'images/blockchain-vault.jpg', tech: ['Ethereum', 'Solidity', 'Web3'] },
    { id: 4, title: 'Cyber Defense', description: 'Cybersecurity system...', image: 'images/cyber-defense.jpg', tech: ['Zero Trust', 'AI Defense', 'Encryption'] },
    { id: 5, title: 'Data Nexus', description: 'Big data platform...', image: 'images/data-nexus.jpg', tech: ['Apache Spark', 'Hadoop', 'Kafka'] },
    { id: 6, title: 'AR Interface', description: 'AR system...', image: 'images/ar-interface.jpg', tech: ['Unity', 'ARCore', 'Computer Vision'] },
    { id: 7, title: 'IoT Matrix', description: 'IoT ecosystem...', image: 'images/iot-matrix.jpg', tech: ['MQTT', 'Edge AI', '5G'] }
];

const skillsData = [
    { name: 'React.js', icon: '⚛️', level: 95, category: 'frontend' },
    { name: 'Node.js', icon: '🟢', level: 90, category: 'backend' },
    { name: 'TypeScript', icon: '📘', level: 88, category: 'frontend' },
    { name: 'AWS', icon: '☁️', level: 92, category: 'cloud' },
    { name: 'Docker', icon: '🐳', level: 85, category: 'cloud' },
    { name: 'Python', icon: '🐍', level: 93, category: 'backend' },
    { name: 'Kubernetes', icon: '☸️', level: 82, category: 'cloud' },
    { name: 'GraphQL', icon: '◈', level: 87, category: 'backend' },
    { name: 'TensorFlow', icon: '🤖', level: 78, category: 'emerging' },
    { name: 'Blockchain', icon: '🔗', level: 75, category: 'emerging' },
    { name: 'Vue.js', icon: '💚', level: 85, category: 'frontend' },
    { name: 'MongoDB', icon: '🍃', level: 90, category: 'backend' }
];

// ================= SCROLL =================

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const header = document.getElementById('header');
    if (section) {
        const offset = section.offsetTop - header.offsetHeight;
        window.scrollTo({ top: offset, behavior: 'smooth' });
    }
}

// ================= PARTICLES =================

function initParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 15; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        p.style.animationDelay = Math.random() * 20 + 's';
        p.style.animationDuration = (18 + Math.random() * 8) + 's';
        container.appendChild(p);
    }
}

// ================= CAROUSEL =================

let currentIndex = 0;
const carousel = document.getElementById('carousel');
const indicatorsContainer = document.getElementById('indicators');

function createCarouselItem(data, index) {
    const item = document.createElement('div');
    item.className = 'carousel-item';

    item.innerHTML = `
        <div class="card">
            <div class="card-number">0${data.id}</div>
            <div class="card-image">
                <img src="${data.image}" alt="${data.title}">
            </div>
            <h3 class="card-title">${data.title}</h3>
            <p class="card-description">${data.description}</p>
            <div class="card-tech">
                ${data.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
            </div>
            <button class="card-cta" onclick="scrollToSection('about')">Explore</button>
        </div>
    `;
    return item;
}

function initCarousel() {
    portfolioData.forEach((data, i) => {
        carousel.appendChild(createCarouselItem(data, i));

        const ind = document.createElement('div');
        ind.className = 'indicator';
        if (i === 0) ind.classList.add('active');
        ind.onclick = () => goToSlide(i);
        indicatorsContainer.appendChild(ind);
    });
    updateCarousel();
}

function updateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');

    const isMobile = window.innerWidth <= 768;

    items.forEach((item, i) => {
        let offset = i - currentIndex;
        if (offset > items.length / 2) offset -= items.length;
        if (offset < -items.length / 2) offset += items.length;

        const abs = Math.abs(offset);
        const sign = offset < 0 ? -1 : 1;

        let spacing = isMobile ? 260 : 400;

        if (abs === 0) {
            item.style.transform = 'translate(-50%, -50%) scale(1)';
            item.style.opacity = '1';
            item.style.zIndex = '10';
        } else if (abs === 1) {
            item.style.transform = `translate(-50%, -50%) translateX(${sign * spacing}px) scale(0.85)`;
            item.style.opacity = '0.7';
        } else {
            item.style.opacity = '0';
        }
    });

    indicators.forEach((d, i) => {
        d.classList.toggle('active', i === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % portfolioData.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + portfolioData.length) % portfolioData.length;
    updateCarousel();
}

function goToSlide(i) {
    currentIndex = i;
    updateCarousel();
}

// ================= SKILLS =================

function initSkillsGrid() {
    const grid = document.getElementById('skillsGrid');
    const tabs = document.querySelectorAll('.category-tab');

    function render(cat = 'all') {
        grid.innerHTML = '';
        const list = cat === 'all' ? skillsData : skillsData.filter(s => s.category === cat);

        list.forEach(skill => {
            const el = document.createElement('div');
            el.className = 'skill-hexagon';
            el.innerHTML = `
                <div class="hexagon-inner">
                    <div class="hexagon-content">
                        <div class="skill-icon-hex">${skill.icon}</div>
                        <div class="skill-name-hex">${skill.name}</div>
                        <div class="skill-level">
                            <div class="skill-level-fill" style="width:${skill.level}%"></div>
                        </div>
                        <div class="skill-percentage-hex">${skill.level}%</div>
                    </div>
                </div>
            `;
            grid.appendChild(el);
        });
    }

    tabs.forEach(t => {
        t.onclick = () => {
            tabs.forEach(x => x.classList.remove('active'));
            t.classList.add('active');
            render(t.dataset.category);
        };
    });

    render();
}

// ================= EVENTS =================

document.getElementById('nextBtn').onclick = nextSlide;
document.getElementById('prevBtn').onclick = prevSlide;

// Auto slide (disabled on mobile)
if (window.innerWidth > 768) {
    setInterval(nextSlide, 5000);
}

// Resize fix
window.addEventListener('resize', () => updateCarousel());

// Mobile menu
const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('navMenu');

toggle.onclick = () => {
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
};

// Scroll header
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 100);
});

// Active nav
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let pos = window.scrollY + 100;
    sections.forEach(sec => {
        if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
            links.forEach(l => l.classList.remove('active'));
            document.querySelector(`[href="#${sec.id}"]`).classList.add('active');
        }
    });
});

// Stats animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.querySelectorAll('.stat-number').forEach(el => {
                let target = +el.dataset.target;
                let count = 0;
                let step = target / 100;

                let i = setInterval(() => {
                    count += step;
                    if (count >= target) {
                        el.textContent = target;
                        clearInterval(i);
                    } else {
                        el.textContent = Math.floor(count);
                    }
                }, 20);
            });
        }
    });
});

observer.observe(document.querySelector('.stats-section'));

// Form
document.getElementById('contactForm').onsubmit = e => {
    e.preventDefault();
    alert('Message sent successfully!');
    e.target.reset();
};

// Loader
window.onload = () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 1000);
};

// SAFE PARALLAX (desktop only)
window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) {
        const hero = document.querySelector('.hero');
        hero.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    }
});

// INIT
initCarousel();
initSkillsGrid();
initParticles();
