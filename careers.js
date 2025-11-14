// Careers Data - MERGED with new positions
const positionsData = [
    // Your existing positions
    {
        id: 1,
        title: "Senior Frontend Developer",
        department: "development",
        type: "Full-time",
        location: "Nairobi, Kenya",
        experience: "3+ years",
        description: "We are looking for an experienced Frontend Developer to join our team and help build amazing user interfaces for our clients.",
        image: "images/careers/frontend-dev.jpg",
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
        image: "images/careers/ui-ux-designer.jpg",
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
        image: "images/careers/digital-marketing.jpg",
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
        image: "images/careers/backend-dev.jpg",
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
        image: "images/careers/mobile-dev.jpg",
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
    },
    // NEW OUTSOURCED POSITIONS
    {
        id: 6,
        title: "Delivery Riders",
        department: "outsourced",
        type: "Contract",
        location: "Nairobi, Kenya",
        experience: "0-1 years",
        description: "Join our partner delivery network. Flexible hours, competitive pay, and growth opportunities in the logistics sector.",
        image: "images/careers/delivery-rider.jpg",
        responsibilities: [
            "Deliver packages and food orders to customers",
            "Maintain delivery timelines and customer satisfaction",
            "Handle cash and digital payments securely",
            "Maintain delivery equipment and vehicle"
        ],
        requirements: [
            "Valid driving license for motorcycle/bicycle",
            "Smartphone with GPS capabilities",
            "Good knowledge of Nairobi routes",
            "Excellent customer service skills"
        ]
    },
    {
        id: 7,
        title: "Taxi Drivers",
        department: "outsourced",
        type: "Contract",
        location: "Nairobi, Kenya",
        experience: "1+ years",
        description: "Partner with our transportation network. Earn competitive rates with flexible scheduling and bonus opportunities.",
        image: "images/careers/taxi-driver.jpg",
        responsibilities: [
            "Provide safe and reliable transportation services",
            "Maintain vehicle cleanliness and maintenance",
            "Follow traffic laws and safety regulations",
            "Provide excellent customer service"
        ],
        requirements: [
            "Valid driver's license and PSV badge",
            "Clean driving record",
            "Well-maintained vehicle",
            "Knowledge of Nairobi and surrounding areas"
        ]
    },
    {
        id: 8,
        title: "Warehouse Workers",
        department: "outsourced",
        type: "Full-time/Part-time",
        location: "Nairobi, Kenya",
        experience: "0-1 years",
        description: "Join our logistics partners in warehouse operations. Opportunities for growth in supply chain management.",
        image: "images/careers/warehouse-worker.jpg",
        responsibilities: [
            "Receive, sort, and store incoming shipments",
            "Pick, pack, and prepare orders for shipment",
            "Maintain inventory accuracy and organization",
            "Operate warehouse equipment safely"
        ],
        requirements: [
            "Ability to lift heavy objects (25+ kg)",
            "Attention to detail and accuracy",
            "Basic math and reading skills",
            "Reliable and punctual"
        ]
    },
    {
        id: 9,
        title: "Packagers & Assemblers",
        department: "outsourced",
        type: "Full-time/Part-time",
        location: "Nairobi, Kenya",
        experience: "0-1 years",
        description: "Work with our manufacturing and distribution partners in packaging and product assembly.",
        image: "images/careers/packager.jpg",
        responsibilities: [
            "Assemble products according to specifications",
            "Package finished goods for shipment",
            "Quality control and inspection",
            "Maintain clean and organized work area"
        ],
        requirements: [
            "Good hand-eye coordination",
            "Attention to detail",
            "Ability to follow instructions",
            "Basic quality control understanding"
        ]
    },
    {
        id: 10,
        title: "Housekeeping Staff",
        department: "outsourced",
        type: "Full-time/Part-time",
        location: "Nairobi, Kenya",
        experience: "0-1 years",
        description: "Join our partner hospitality companies. Maintain cleanliness and provide excellent service in various facilities.",
        image: "images/careers/housekeeping.jpg",
        responsibilities: [
            "Clean and maintain assigned areas",
            "Restock supplies and amenities",
            "Follow cleaning protocols and standards",
            "Report maintenance issues"
        ],
        requirements: [
            "Attention to detail and cleanliness",
            "Physical stamina for standing and moving",
            "Reliable and trustworthy",
            "Good time management skills"
        ]
    },
    {
        id: 11,
        title: "Waiters & Service Staff",
        department: "outsourced",
        type: "Full-time/Part-time",
        location: "Nairobi, Kenya",
        experience: "0-1 years",
        description: "Work with our partner restaurants and hospitality establishments. Develop customer service skills in dynamic environments.",
        image: "images/careers/waiter.jpg",
        responsibilities: [
            "Take customer orders and serve food/drinks",
            "Provide excellent customer service",
            "Maintain clean dining areas",
            "Handle cash and card payments"
        ],
        requirements: [
            "Excellent communication skills",
            "Friendly and outgoing personality",
            "Ability to work in fast-paced environment",
            "Basic math skills"
        ]
    },
    // INTERNSHIPS & ATTACHMENTS
    {
        id: 12,
        title: "IT Intern/Attachee",
        department: "development",
        type: "Internship",
        location: "Nairobi, Kenya",
        experience: "Students/Fresh Graduates",
        description: "Gain hands-on experience in web development, software engineering, and IT infrastructure. Perfect for students and recent graduates.",
        image: "images/careers/it-intern.jpg",
        responsibilities: [
            "Assist in website and application development",
            "Learn and apply programming languages",
            "Participate in team projects and meetings",
            "Document code and processes"
        ],
        requirements: [
            "Currently pursuing IT/Computer Science degree",
            "Basic knowledge of programming concepts",
            "Eagerness to learn new technologies",
            "Good problem-solving skills"
        ]
    },
    {
        id: 13,
        title: "Digital Marketing Intern",
        department: "marketing",
        type: "Internship",
        location: "Nairobi, Kenya",
        experience: "Students/Fresh Graduates",
        description: "Learn digital marketing strategies, social media management, and content creation in a real-world environment.",
        image: "images/careers/marketing-intern.jpg",
        responsibilities: [
            "Assist in social media content creation",
            "Learn SEO and content marketing strategies",
            "Help analyze marketing campaign performance",
            "Participate in brainstorming sessions"
        ],
        requirements: [
            "Interest in digital marketing and social media",
            "Good writing and communication skills",
            "Familiarity with major social media platforms",
            "Creative thinking and enthusiasm"
        ]
    }
];

// Initialize Careers Page
function initCareers() {
    renderPositions('all');
    setupPositionFilters();
    setupApplicationModal();
}

// Render Positions - UPDATED with images
function renderPositions(department = 'all') {
    const grid = document.getElementById('positionsGrid');
    if (!grid) return;

    const filteredPositions = department === 'all' 
        ? positionsData 
        : positionsData.filter(position => position.department === department);

    grid.innerHTML = filteredPositions.map(position => `
        <div class="position-card" data-aos="fade-up">
            <div class="position-image">
                <img src="${position.image}" alt="${position.title}" 
                     onerror="this.src='https://via.placeholder.com/400x200/667eea/white?text=${encodeURIComponent(position.title)}'">
            </div>
            <div class="position-content">
                <div class="position-header">
                    <div>
                        <h3 class="position-title">${position.title}</h3>
                        <span class="position-department ${position.department}">${position.department}</span>
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
                        <span>${position.experience}</span>
                    </div>
                </div>
                <p class="position-description">${position.description}</p>
                <div class="position-actions">
                    <a href="#" class="apply-btn" data-position="${position.id}">Apply Now</a>
                    <a href="#" class="details-btn" data-position="${position.id}">View Details</a>
                </div>
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

// Setup Position Filters - UPDATED with new department
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

// Add this CSS for the images
const positionImageStyles = `
.position-card {
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    margin-bottom: 30px;
}

.position-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.position-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.position-card:hover .position-image img {
    transform: scale(1.05);
}

.position-content {
    padding: 25px;
}

.position-department {
    background: #edf2f7;
    color: #4a5568;
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    display: inline-block;
    margin-top: 5px;
}

.position-department.development {
    background: #e6fffa;
    color: #234e52;
}

.position-department.design {
    background: #faf5ff;
    color: #553c9a;
}

.position-department.marketing {
    background: #fff5f5;
    color: #c53030;
}

.position-department.outsourced {
    background: #f0fff4;
    color: #22543d;
}
`;

// Add the CSS to the page
const styleSheet = document.createElement('style');
styleSheet.textContent = positionImageStyles;
document.head.appendChild(styleSheet);

// KEEP ALL YOUR EXISTING FUNCTIONS BELOW (setupApplicationModal, openApplicationModal, showPositionDetails, handleApplicationSubmit)
// Setup Application Modal
function setupApplicationModal() {
    const modal = document.getElementById('applicationModal');
    if (!modal) return;
    
    const closeBtn = modal.querySelector('.close-modal');
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

// Open Application Modal
function openApplicationModal(positionId) {
    const position = positionsData.find(p => p.id === positionId);
    if (!position) return;

    const modal = document.getElementById('applicationModal');
    const modalBody = modal.querySelector('.modal-body');

    modalBody.innerHTML = `
        <div class="application-form">
            <h2>Apply for ${position.title}</h2>
            <form id="jobApplicationForm" action="https://formsubmit.co/el/yadasu" method="POST">
                <input type="hidden" name="_subject" value="New Job Application: ${position.title}">
                <input type="hidden" name="_template" value="table">
                <input type="hidden" name="_captcha" value="false">
                
                <div class="form-group">
                    <label for="fullName">Full Name *</label>
                    <input type="text" id="fullName" name="name" required>
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
                    <textarea id="coverLetter" name="message" rows="5" placeholder="Tell us why you're interested in this position and what makes you a good fit..." required></textarea>
                </div>
                
                <div class="form-group">
                    <label>Upload Resume/CV *</label>
                    <div class="file-upload" id="resumeUpload">
                        <i class="fas fa-cloud-upload-alt"></i>
                        <p>Click to upload your resume (PDF, DOC, DOCX)</p>
                        <input type="file" id="resume" name="attachment" accept=".pdf,.doc,.docx" style="display: none;" required>
                    </div>
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

    if (fileUpload && fileInput) {
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
    }

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
                <span class="position-department ${position.department}">${position.department}</span>
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
                    <span>${position.experience}</span>
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

// Handle Application Form Submission - UPDATED FOR FORMSPREE
function handleApplicationSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('.submit-application');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
    submitBtn.disabled = true;
    
    // Submit to Formspree
    const formData = new FormData(form);
    
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Success
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Application Submitted!';
            submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            
            // Show success notification
            if (typeof showNotification !== 'undefined') {
                showNotification('Application submitted successfully! We\'ll get back to you soon.', 'success');
            }
            
            // Close modal and reset form
            setTimeout(() => {
                document.getElementById('applicationModal').style.display = 'none';
                form.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 3000);
        } else {
            throw new Error('Form submission failed');
        }
    })
    .catch(error => {
        // Error handling
        submitBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Failed to Submit';
        submitBtn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
        
        if (typeof showNotification !== 'undefined') {
            showNotification('Failed to submit application. Please try again or contact us directly.', 'error');
        }
        
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
        }, 3000);
    });
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