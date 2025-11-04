// Projects Data
const projectsData = [
    {
        id: 1,
        title: "E-commerce Platform",
        category: "ecommerce",
        description: "A modern e-commerce platform with advanced features and seamless user experience.",
        fullDescription: "We developed a comprehensive e-commerce solution that includes inventory management, payment integration, and customer relationship management. The platform handles over 10,000 products and processes hundreds of orders daily.",
        image: "images/projects/ecommerce.jpg",
        technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
        features: ["Shopping Cart", "Payment Processing", "Inventory Management", "Admin Dashboard"],
        liveUrl: "https://example-ecommerce.com",
        githubUrl: "https://github.com/smartechn/ecommerce"
    },
    {
        id: 2,
        title: "Mobile Banking App",
        category: "app",
        description: "Secure mobile banking application with biometric authentication.",
        fullDescription: "A feature-rich mobile banking application that allows users to manage their accounts, transfer funds, pay bills, and access financial services securely with biometric authentication.",
        image: "images/projects/banking-app.jpg",
        technologies: ["React Native", "Firebase", "Node.js", "MySQL"],
        features: ["Biometric Login", "Fund Transfer", "Bill Payments", "Transaction History"],
        liveUrl: "https://play.google.com/store/apps/details?id=com.bankingapp",
        githubUrl: null
    },
    {
        id: 3,
        title: "Corporate Website",
        category: "web",
        description: "Modern corporate website with CMS and multilingual support.",
        fullDescription: "A responsive corporate website built with a custom CMS that allows the client to easily update content, manage multiple languages, and track user engagement through integrated analytics.",
        image: "images/projects/corporate-website.jpg",
        technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
        features: ["CMS", "Multilingual", "SEO Optimized", "Analytics"],
        liveUrl: "https://corporate-client.com",
        githubUrl: "https://github.com/smartechn/corporate-website"
    },
    {
        id: 4,
        title: "Food Delivery App",
        category: "app",
        description: "Food delivery application with real-time tracking and multiple payment options.",
        fullDescription: "A comprehensive food delivery platform connecting restaurants with customers. Features include real-time order tracking, multiple payment options, restaurant management dashboard, and delivery personnel tracking.",
        image: "images/projects/food-delivery.jpg",
        technologies: ["Flutter", "Firebase", "Node.js", "MongoDB"],
        features: ["Real-time Tracking", "Multiple Payments", "Restaurant Dashboard", "Order Management"],
        liveUrl: "https://play.google.com/store/apps/details?id=com.fooddelivery",
        githubUrl: null
    },
    {
        id: 5,
        title: "Brand Identity Design",
        category: "branding",
        description: "Complete brand identity package including logo, guidelines, and marketing materials.",
        fullDescription: "We created a comprehensive brand identity for a tech startup, including logo design, brand guidelines, business cards, letterheads, and digital marketing templates that reflect their innovative approach.",
        image: "images/projects/branding.jpg",
        technologies: ["Adobe Illustrator", "Photoshop", "InDesign"],
        features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Social Media Kit"],
        liveUrl: null,
        githubUrl: null
    },
    {
        id: 6,
        title: "Learning Management System",
        category: "web",
        description: "Online learning platform with course management and progress tracking.",
        fullDescription: "A sophisticated Learning Management System that enables educational institutions to deliver online courses, track student progress, conduct assessments, and manage educational content efficiently.",
        image: "images/projects/lms.jpg",
        technologies: ["React", "Django", "PostgreSQL", "Docker"],
        features: ["Course Management", "Progress Tracking", "Assessments", "Video Streaming"],
        liveUrl: "https://lms-platform.com",
        githubUrl: "https://github.com/smartechn/lms"
    }
];

// Initialize Projects
function initProjects() {
    renderProjects('all');
    setupFilters();
    setupModal();
}

// Render Projects Grid
function renderProjects(filter = 'all') {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    const filteredProjects = filter === 'all' 
        ? projectsData 
        : projectsData.filter(project => project.category === filter);

    grid.innerHTML = filteredProjects.map(project => `
        <div class="project-card" data-category="${project.category}" data-aos="fade-up">
            <div class="project-image">
                <div class="project-overlay">
                    <a href="#" class="view-project-btn" data-project="${project.id}">
                        View Project <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
                <img src="${project.image}" alt="${project.title}" onerror="this.src='https://via.placeholder.com/400x250/667eea/white?text=Project+Image'">
            </div>
            <div class="project-info">
                <div class="project-category">${project.category}</div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.slice(0, 3).map(tech => 
                        `<span class="tech-tag">${tech}</span>`
                    ).join('')}
                </div>
            </div>
        </div>
    `).join('');

    // Add click events to project cards
    document.querySelectorAll('.view-project-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = parseInt(btn.getAttribute('data-project'));
            openProjectModal(projectId);
        });
    });
}

// Setup Filter Buttons
function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            // Filter projects
            const filter = btn.getAttribute('data-filter');
            renderProjects(filter);
        });
    });
}

// Setup Modal
function setupModal() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close-modal');

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.style.display = 'none';
        }
    });
}

// Open Project Modal
function openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('projectModal');
    const modalBody = document.querySelector('.modal-body');

    modalBody.innerHTML = `
        <div class="project-modal-content">
            <div class="modal-header">
                <span class="project-category">${project.category}</span>
                <h2>${project.title}</h2>
            </div>
            
            <div class="modal-image">
                <img src="${project.image}" alt="${project.title}" onerror="this.src='https://via.placeholder.com/800x400/667eea/white?text=Project+Image'">
            </div>
            
            <div class="modal-details">
                <div class="detail-section">
                    <h3>Project Overview</h3>
                    <p>${project.fullDescription}</p>
                </div>
                
                <div class="detail-section">
                    <h3>Technologies Used</h3>
                    <div class="tech-stack">
                        ${project.technologies.map(tech => 
                            `<span class="tech-tag large">${tech}</span>`
                        ).join('')}
                    </div>
                </div>
                
                <div class="detail-section">
                    <h3>Key Features</h3>
                    <ul class="features-list">
                        ${project.features.map(feature => 
                            `<li><i class="fas fa-check"></i> ${feature}</li>`
                        ).join('')}
                    </ul>
                </div>
                
                <div class="project-links">
                    ${project.liveUrl ? `
                        <a href="${project.liveUrl}" target="_blank" class="project-link live">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    ` : ''}
                    
                    ${project.githubUrl ? `
                        <a href="${project.githubUrl}" target="_blank" class="project-link github">
                            <i class="fab fa-github"></i> View Code
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'block';
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initProjects();
    
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic'
        });
    }
});

