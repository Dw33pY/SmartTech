// Careers Data
const positionsData = [
    {
        id: 1,
        title: "Senior Frontend Developer",
        department: "development",
        type: "Full-time",
        location: "Nairobi, Kenya",
        experience: "3+ years",
        description: "We are looking for an experienced Frontend Developer to join our team and help build amazing user interfaces for our clients.",
        responsibilities: [
            "Develop responsive web applications using modern JavaScript frameworks",
            "Collaborate with designers to implement pixel-perfect UI",
            "Optimize applications for maximum speed and scalability",
            "Write clean, maintainable, and testable code"
        ],
        requirements: [
            "3+ years of experience in frontend development",
            "Proficiency in React, Vue.js, or Angular",
            "Strong knowledge of HTML5, CSS3, and JavaScript ES6+",
            "Experience with responsive design and cross-browser compatibility",
            "Familiarity with version control systems (Git)"
        ]
    },
    {
        id: 2,
        title: "UI/UX Designer",
        department: "design",
        type: "Full-time",
        location: "Nairobi, Kenya",
        experience: "2+ years",
        description: "Join our design team to create beautiful and intuitive user experiences for web and mobile applications.",
        responsibilities: [
            "Create wireframes, prototypes, and high-fidelity designs",
            "Conduct user research and usability testing",
            "Collaborate with developers to ensure design implementation",
            "Develop and maintain design systems"
        ],
        requirements: [
            "2+ years of experience in UI/UX design",
            "Proficiency in design tools (Figma, Adobe XD, Sketch)",
            "Strong portfolio showcasing design process and thinking",
            "Understanding of user-centered design principles",
            "Experience with prototyping and user testing"
        ]
    },
    {
        id: 3,
        title: "Digital Marketing Specialist",
        department: "marketing",
        type: "Full-time",
        location: "Nairobi, Kenya",
        experience: "2+ years",
        description: "Help our clients grow their online presence through effective digital marketing strategies.",
        responsibilities: [
            "Develop and execute digital marketing campaigns",
            "Manage social media accounts and content creation",
            "Analyze campaign performance and optimize strategies",
            "Conduct SEO and SEM activities"
        ],
        requirements: [
            "2+ years of experience in digital marketing",
            "Knowledge of SEO, SEM, and social media marketing",
            "Experience with analytics tools (Google Analytics, etc.)",
            "Excellent written and verbal communication skills",
            "Creative thinking and problem-solving skills"
        ]
    },
    {
        id: 4,
        title: "Backend Developer (Node.js)",
        department: "development",
        type: "Full-time",
        location: "Nairobi, Kenya",
        experience: "2+ years",
        description: "Build robust and scalable backend systems to power our applications and services.",
        responsibilities: [
            "Develop and maintain server-side applications",
            "Design and implement RESTful APIs",
            "Work with databases and optimize queries",
            "Ensure application security and data protection"
        ],
        requirements: [
            "2+ years of experience with Node.js",
            "Knowledge of database systems (MySQL, MongoDB, PostgreSQL)",
            "Experience with API design and development",
            "Understanding of cloud platforms (AWS, Azure, GCP)",
            "Familiarity with Docker and CI/CD pipelines"
        ]
    },
    {
        id: 5,
        title: "Mobile App Developer (React Native)",
        department: "development",
        type: "Full-time",
        location: "Nairobi, Kenya",
        experience: "2+ years",
        description: "Create cross-platform mobile applications that provide exceptional user experiences.",
        responsibilities: [
            "Develop mobile applications using React Native",
            "Collaborate with designers and backend developers",
            "Write clean, maintainable, and testable code",
            "Publish applications to app stores"
        ],
        requirements: [
            "2+ years of experience with React Native",
            "Knowledge of JavaScript and React",
            "Experience with mobile app deployment processes",
            "Understanding of mobile UI/UX principles",
            "Familiarity with native mobile development is a plus"
        ]
    }
];

// Initialize Careers Page
function initCareers() {
    renderPositions('all');
    setupPositionFilters();
    setupApplicationModal();
}

// Render Positions
function renderPositions(department = 'all') {
    const grid = document.getElementById('positionsGrid');
    if (!grid) return;

    const filteredPositions = department === 'all' 
        ? positionsData 
        : positionsData.filter(position => position.department === department);

    grid.innerHTML = filteredPositions.map(position => `
        <div class="position-card" data-aos="fade-up">
            <div class="position-header">
                <div>
                    <h3 class="position-title">${position.title}</h3>
                    <span class="position-department">${position.department}</span>
                </div>
            </div>
            <div class="position-meta">
                <div class="meta-item">
                    <i class="fas fa-briefcase"></i>
                    <span>${position.type}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${position.location}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-chart-line"></i>
                    <span>${position.experience} experience</span>
                </div>
            </div>
            <p class="position-description">${position.description}</p>
            <div class="position-actions">
                <a href="#" class="apply-btn" data-position="${position.id}">Apply Now</a>
                <a href="#" class="details-btn" data-position="${position.id}">View Details</a>
            </div>
        </div>
    `).join('');

    // Add event listeners
    document.querySelectorAll('.apply-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const positionId = parseInt(btn.getAttribute('data-position'));
            openApplicationModal(positionId);
        });
    });

    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const positionId = parseInt(btn.getAttribute('data-position'));
            showPositionDetails(positionId);
        });
    });
}

// Setup Position Filters
function setupPositionFilters() {
    const filterBtns = document.querySelectorAll('.positions-filter .filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            // Filter positions
            const department = btn.getAttribute('data-department');
            renderPositions(department);
        });
    });
}

// Setup Application Modal
function setupApplicationModal() {
    const modal = document.getElementById('applicationModal');
    const closeBtn = modal.querySelector('.close-modal');

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

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

// Open Application Modal
function openApplicationModal(positionId) {
    const position = positionsData.find(p => p.id === positionId);
    if (!position) return;

    const modal = document.getElementById('applicationModal');
    const modalBody = modal.querySelector('.modal-body');

    modalBody.innerHTML = `
        <div class="application-form">
            <h2>Apply for ${position.title}</h2>
            <form id="jobApplicationForm">
                <div class="form-group">
                    <label for="fullName">Full Name *</label>
                    <input type="text" id="fullName" name="fullName" required>
                </div>
                
                <div class="form-group">
                    <label for="email">Email Address *</label>
                    <input type="email" id="email" name="email" required>
                </div>
                
                <div class="form-group">
                    <label for="phone">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required>
                </div>
                
                <div class="form-group">
                    <label for="experience">Years of Experience *</label>
                    <select id="experience" name="experience" required>
                        <option value="">Select Experience</option>
                        <option value="0-1">0-1 years</option>
                        <option value="1-2">1-2 years</option>
                        <option value="2-5">2-5 years</option>
                        <option value="5+">5+ years</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="coverLetter">Cover Letter *</label>
                    <textarea id="coverLetter" name="coverLetter" rows="5" placeholder="Tell us why you're interested in this position and what makes you a good fit..." required></textarea>
                </div>
                
                <div class="form-group">
                    <label>Upload Resume/CV *</label>
                    <div class="file-upload" id="resumeUpload">
                        <i class="fas fa-cloud-upload-alt"></i>
                        <p>Click to upload your resume (PDF, DOC, DOCX)</p>
                        <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" style="display: none;" required>
                    </div>
                </div>
                
                <div class="form-group">
                    <label>Portfolio/LinkedIn (Optional)</label>
                    <input type="url" id="portfolio" name="portfolio" placeholder="https://">
                </div>
                
                <input type="hidden" name="position" value="${position.title}">
                
                <button type="submit" class="submit-application">
                    <i class="fas fa-paper-plane"></i> Submit Application
                </button>
            </form>
        </div>
    `;

    // Setup file upload
    const fileUpload = document.getElementById('resumeUpload');
    const fileInput = document.getElementById('resume');

    fileUpload.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            fileUpload.innerHTML = `
                <i class="fas fa-check-circle" style="color: #10b981;"></i>
                <p>${e.target.files[0].name}</p>
            `;
        }
    });

    // Handle form submission
    const form = document.getElementById('jobApplicationForm');
    form.addEventListener('submit', handleApplicationSubmit);

    modal.style.display = 'block';
}

// Show Position Details
function showPositionDetails(positionId) {
    const position = positionsData.find(p => p.id === positionId);
    if (!position) return;

    const modal = document.getElementById('applicationModal');
    const modalBody = modal.querySelector('.modal-body');

    modalBody.innerHTML = `
        <div class="position-details">
            <h2>${position.title}</h2>
            <div class="position-meta">
                <span class="position-department">${position.department}</span>
                <div class="meta-item">
                    <i class="fas fa-briefcase"></i>
                    <span>${position.type}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${position.location}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-chart-line"></i>
                    <span>${position.experience} experience</span>
                </div>
            </div>
            
            <div class="detail-section">
                <h3>Job Description</h3>
                <p>${position.description}</p>
            </div>
            
            <div class="detail-section">
                <h3>Key Responsibilities</h3>
                <ul class="responsibilities-list">
                    ${position.responsibilities.map(responsibility => 
                        `<li><i class="fas fa-check"></i> ${responsibility}</li>`
                    ).join('')}
                </ul>
            </div>
            
            <div class="detail-section">
                <h3>Requirements</h3>
                <ul class="requirements-list">
                    ${position.requirements.map(requirement => 
                        `<li><i class="fas fa-check"></i> ${requirement}</li>`
                    ).join('')}
                </ul>
            </div>
            
            <div class="position-actions" style="margin-top: 30px;">
                <a href="#" class="apply-btn" data-position="${position.id}">Apply Now</a>
            </div>
        </div>
    `;

    // Add apply button event listener
    const applyBtn = modalBody.querySelector('.apply-btn');
    applyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openApplicationModal(positionId);
    });

    modal.style.display = 'block';
}

// Handle Application Form Submission
function handleApplicationSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('.submit-application');
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
    submitBtn.disabled = true;
    
    // Simulate API call (replace with actual form submission)
    setTimeout(() => {
        // Success state
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Application Submitted!';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        
        // Close modal after success
        setTimeout(() => {
            document.getElementById('applicationModal').style.display = 'none';
            
            // Show success notification
            if (typeof showNotification !== 'undefined') {
                showNotification('Application submitted successfully! We\'ll get back to you soon.', 'success');
            }
            
            // Reset form
            form.reset();
        }, 2000);
    }, 2000);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initCareers();
    
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic'
        });
    }
});