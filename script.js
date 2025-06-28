// Brutalist Portfolio JavaScript - Bug Fixed Version
let portfolioData = {};

// Load portfolio data
async function loadPortfolioData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        portfolioData = await response.json();
        populateContent();
    } catch (error) {
        console.error('Error loading portfolio data:', error);
        // Use fallback data if JSON fails to load
        portfolioData = getFallbackData();
        populateContent();
    }
}

// Fallback data in case JSON loading fails
function getFallbackData() {
    return {
        about: {
            description: "Passionate backend and mobile app developer with 5+ years of experience building scalable server-side applications and user-friendly mobile experiences. I specialize in creating robust APIs, microservices, and cross-platform mobile applications that deliver exceptional performance and user satisfaction.",
            skills: {
                backend: ["Node.js", "Python", "Java", "C#", "Go", "PHP", "Ruby"],
                mobile: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic"],
                tools: ["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Firebase", "Kubernetes"]
            }
        },
        experience: [
            {
                date: "2023 - Present",
                title: "Senior Backend Developer",
                company: "Tech Solutions Inc.",
                description: "Lead backend development for enterprise applications, design scalable microservices architecture, and mentor junior developers. Implemented CI/CD pipelines and improved system performance by 40%. Responsible for architecture decisions and technical leadership."
            },
            {
                date: "2021 - 2023",
                title: "Full Stack Developer",
                company: "StartupCorp",
                description: "Developed mobile applications and backend APIs for fintech startup. Built RESTful APIs serving 100K+ users and created cross-platform mobile apps with React Native. Collaborated with product team to deliver features on tight deadlines."
            },
            {
                date: "2019 - 2021",
                title: "Backend Developer",
                company: "Digital Agency",
                description: "Built custom backend solutions for various clients, integrated third-party APIs, and optimized database performance. Worked with diverse technologies and client requirements. Delivered 20+ successful projects across different industries."
            },
            {
                date: "2018 - 2019",
                title: "Junior Developer",
                company: "Code Academy",
                description: "Started career developing small web applications and learning industry best practices. Gained experience in multiple programming languages and frameworks. Participated in code reviews and agile development processes."
            }
        ],
        projects: [
            {
                title: "E-Commerce API Platform",
                description: "Scalable microservices-based e-commerce platform handling 50K+ transactions daily. Features include inventory management, payment processing, and real-time analytics. Built with modern cloud-native architecture.",
                technologies: ["Node.js", "PostgreSQL", "Redis", "Docker", "AWS", "RabbitMQ"],
                github: "https://github.com/username/ecommerce-api",
                demo: "https://demo.ecommerce-api.com"
            },
            {
                title: "Task Management Mobile App",
                description: "Cross-platform mobile application for team collaboration and task management. Features real-time updates, offline synchronization, and push notifications. Supports multiple project management methodologies.",
                technologies: ["React Native", "Firebase", "Redux", "TypeScript", "Expo"],
                github: "https://github.com/username/task-app",
                demo: "https://taskapp.demo.com"
            },
            {
                title: "Real-time Chat System",
                description: "Distributed chat application supporting 10K+ concurrent users with WebSocket connections and message persistence. Features include file sharing, group chats, and message encryption.",
                technologies: ["Socket.io", "MongoDB", "Node.js", "React", "WebRTC"],
                github: "https://github.com/username/chat-system",
                demo: "https://chat.demo.com"
            },
            {
                title: "IoT Data Processing Pipeline",
                description: "High-throughput data processing system for IoT devices. Processes millions of sensor readings daily with real-time analytics and anomaly detection. Handles data from 1000+ connected devices.",
                technologies: ["Python", "Apache Kafka", "InfluxDB", "Grafana", "TensorFlow"],
                github: "https://github.com/username/iot-pipeline",
                demo: "https://iot-dashboard.demo.com"
            },
            {
                title: "Blockchain Voting System",
                description: "Secure and transparent voting system built on blockchain technology. Ensures vote integrity and provides real-time results. Features voter authentication and audit trails.",
                technologies: ["Solidity", "Web3.js", "Ethereum", "React", "IPFS"],
                github: "https://github.com/username/blockchain-voting",
                demo: "https://voting.demo.com"
            },
            {
                title: "AI-Powered Content API",
                description: "RESTful API that leverages machine learning for content classification and recommendation. Processes thousands of articles daily and provides intelligent content suggestions.",
                technologies: ["Python", "FastAPI", "TensorFlow", "PostgreSQL", "Redis"],
                github: "https://github.com/username/ai-content-api",
                demo: "https://ai-api.demo.com"
            }
        ],
        contact: {
            email: "developer@example.com",
            linkedin: "https://linkedin.com/in/backend-developer",
            github: "https://github.com/backend-developer",
            twitter: "https://twitter.com/backend_dev"
        }
    };
}

// Populate content from data
function populateContent() {
    try {
        // Populate about section
        const aboutDesc = document.querySelector('.about-description');
        if (aboutDesc && portfolioData.about && portfolioData.about.description) {
            aboutDesc.textContent = portfolioData.about.description;
        }
        
        // Populate skills
        if (portfolioData.about && portfolioData.about.skills) {
            populateSkills('backend-skills', portfolioData.about.skills.backend || []);
            populateSkills('mobile-skills', portfolioData.about.skills.mobile || []);
            populateSkills('tools-skills', portfolioData.about.skills.tools || []);
        }
        
        // Populate experience
        populateExperience();
        
        // Populate projects
        populateProjects();
        
        // Populate contact
        populateContact();
    } catch (error) {
        console.error('Error populating content:', error);
    }
}

// Populate skills with error handling
function populateSkills(containerId, skills) {
    try {
        const container = document.getElementById(containerId);
        if (!container || !Array.isArray(skills)) return;
        
        container.innerHTML = skills.map(skill => 
            `<span class="skill-tag">${escapeHtml(skill)}</span>`
        ).join('');
    } catch (error) {
        console.error(`Error populating skills for ${containerId}:`, error);
    }
}

// Populate experience timeline with error handling
function populateExperience() {
    try {
        const timeline = document.getElementById('experience-timeline');
        if (!timeline || !Array.isArray(portfolioData.experience)) return;
        
        timeline.innerHTML = portfolioData.experience.map((exp, index) => `
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-date">${escapeHtml(exp.date || '')}</div>
                    <h3 class="timeline-title">${escapeHtml(exp.title || '')}</h3>
                    <div class="timeline-company">${escapeHtml(exp.company || '')}</div>
                    <p class="timeline-description">${escapeHtml(exp.description || '')}</p>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error populating experience:', error);
    }
}

// Populate projects with error handling
function populateProjects() {
    try {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid || !Array.isArray(portfolioData.projects)) return;
        
        projectsGrid.innerHTML = portfolioData.projects.map((project, index) => `
            <div class="project-card">
                <div class="project-content">
                    <h3 class="project-title">${escapeHtml(project.title || '')}</h3>
                    <p class="project-description">${escapeHtml(project.description || '')}</p>
                    <div class="project-tech">
                        ${Array.isArray(project.technologies) ? 
                            project.technologies.map(tech => `<span class="tech-tag">${escapeHtml(tech)}</span>`).join('') : 
                            ''
                        }
                    </div>
                    <div class="project-links">
                        ${project.github ? `<a href="${escapeHtml(project.github)}" class="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>` : ''}
                        ${project.demo ? `<a href="${escapeHtml(project.demo)}" class="project-link" target="_blank" rel="noopener noreferrer">Live Demo</a>` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error populating projects:', error);
    }
}

// Populate contact links with error handling
function populateContact() {
    try {
        const contactLinks = document.getElementById('contact-links');
        if (!contactLinks || !portfolioData.contact) return;
        
        const contact = portfolioData.contact;
        
        contactLinks.innerHTML = `
            ${contact.email ? `<a href="mailto:${escapeHtml(contact.email)}" class="contact-link">
                <span class="contact-link-text">${escapeHtml(contact.email)}</span>
            </a>` : ''}
            ${contact.linkedin ? `<a href="${escapeHtml(contact.linkedin)}" class="contact-link" target="_blank" rel="noopener noreferrer">
                <span class="contact-link-text">LinkedIn Profile</span>
            </a>` : ''}
            ${contact.github ? `<a href="${escapeHtml(contact.github)}" class="contact-link" target="_blank" rel="noopener noreferrer">
                <span class="contact-link-text">GitHub Profile</span>
            </a>` : ''}
            ${contact.twitter ? `<a href="${escapeHtml(contact.twitter)}" class="contact-link" target="_blank" rel="noopener noreferrer">
                <span class="contact-link-text">Twitter Profile</span>
            </a>` : ''}
        `;
    } catch (error) {
        console.error('Error populating contact:', error);
    }
}

// Utility function to escape HTML and prevent XSS
function escapeHtml(text) {
    if (typeof text !== 'string') return '';
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

// Mobile menu toggle with error handling
function initMobileMenu() {
    try {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (!hamburger || !navMenu) return;
        
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    } catch (error) {
        console.error('Error initializing mobile menu:', error);
    }
}

// Smooth scrolling for navigation links
function initSmoothScroll() {
    try {
        const anchors = document.querySelectorAll('a[href^="#"]');
        anchors.forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    } catch (error) {
        console.error('Error initializing smooth scroll:', error);
    }
}

// Contact form handling with enhanced feedback
function initContactForm() {
    try {
        const form = document.getElementById('contact-form');
        if (!form) return;
        
        const submitBtn = form.querySelector('.btn-primary');
        if (!submitBtn) return;
        
        const originalText = submitBtn.textContent;
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Button loading state
            submitBtn.textContent = 'SENDING...';
            submitBtn.style.opacity = '0.7';
            submitBtn.style.pointerEvents = 'none';
            
            const formData = new FormData(form);
            const name = formData.get('name') || 'User';
            
            // Simulate sending delay
            setTimeout(() => {
                // Success state
                submitBtn.textContent = 'MESSAGE SENT!';
                submitBtn.style.background = '#000';
                submitBtn.style.color = '#fff';
                
                setTimeout(() => {
                    alert(`Thank you ${name}! Your message has been sent. I'll get back to you soon.`);
                    
                    // Reset form and button
                    form.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.style.color = '';
                    submitBtn.style.opacity = '';
                    submitBtn.style.pointerEvents = '';
                }, 1000);
            }, 1500);
        });
    } catch (error) {
        console.error('Error initializing contact form:', error);
    }
}

// Enhanced scroll indicator
function initScrollIndicator() {
    try {
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (!scrollIndicator) return;
        
        scrollIndicator.addEventListener('click', function() {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    } catch (error) {
        console.error('Error initializing scroll indicator:', error);
    }
}

// Initialize all functionality
function init() {
    try {
        loadPortfolioData();
        initMobileMenu();
        initSmoothScroll();
        initContactForm();
        initScrollIndicator();
    } catch (error) {
        console.error('Error during initialization:', error);
    }
}

// Start when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Handle page load
window.addEventListener('load', function() {
    try {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    } catch (error) {
        console.error('Error during page load:', error);
    }
});

// Handle errors globally
window.addEventListener('error', function(e) {
    console.error('Global error caught:', e.error);
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
});
