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
                langauges: ["Python", "Java", "C/C++", "Javascript","HTML","Kotlin"],
                frameworks:  ["Express.JS"],
                tools: ["PostgreSQL", "MongoDB", "Docker", "AWS", "Firebase", "mySQL", "CSS/Tailwind CSS"]
            }
        },
        experience: [
            {
                date: "October 2025- Present",
                title: "Tech Lead",
                company: "IEI Student Chapter CSE, AOT",
                description: "Leading the tech team at IEI Student Chapter CSE, AOT, managing projects, mentoring members, and delivering digital solutions for student initiatives."
            },
            {
                date: "September 2025 - Present",
                title: "Tech-Team Member",
                company: "Resourcio Community",
                description: "Contributing to the technical initiatives of the Resourcio Community by developing and maintaining web applications, automating tasks, and assisting in organizing technical events and workshops."
            },
            {
                date: "September 2025 - Present",
                title: "Tech-Team Member",
                company: "GDG On Campus AOT",
                description: "Contributing to the technical initiatives of GDG on Campus AOT by building and maintaining web applications, automating workflows, and supporting the organization of technical events and workshops."
            },
            {
                date: "June 2025 - September 2025",
                title: "Junior Software Developer Intern",
                company: "Resourcio Pvt Ltd",
                description: "Working on client projects involving full-stack web development. Responsible for building responsive user interfaces using HTML, CSS, and JavaScript, integrating APIs, and assisting in backend logic. Collaborating with the development team to deliver scalable and maintainable solutions tailored to client requirements."
            },
            {
                date: "2024-2025",
                title: "Tech-Team Member",
                company: "Student Chapter CSE, AOT",
                description: "Contributing to the technical initiatives of the CSE student chapter by developing and maintaining web applications, automating tasks, and assisting in organizing technical events and workshops. Collaborate with peers on projects involving frontend and backend development, aiming to enhance the community's digital presence and engagement."
            },
            
        ],
        projects: [

            {
                title: "Pain-O-Relief",
                description: "Pain-O-Relief is a user-friendly platform providing personalized exercise routines and support for individuals, especially students and professionals, with joint, back, neck and muscle pain. Its goal is to alleviate pain and improve mobility with accessible, effective solutions for all ages. It includes interactive features like a chatbot, live doctor consultation, and a recommendation system to enhance the user experience.",
                technologies: ["HTML", "CSS", "JavaScript","Node.js","MongoDB","EJS","Botpress","Agora"],
                github: "https://github.com/Subhajitroy03/Pain-O-Relief",
                demo: "#"
            },
            
            {
                title: "Vaani",
                description: "Volunteer Service: Contributed to the official website development for the AICTE-VAANI initiative, a scheme by AICTE to promote technical education and research in regional Indian languages. The website highlights the scheme objectives, department details, and the national seminar held on 15th–16th November 2024, organized by the Department of Computer Science & Engineering, Academy of Technology",
                technologies: ["HTML", "Tailwind CSS", "JavaScript"],
                github: "#",
                demo: "https://www.vaani.aot.edu.in/index.html"
            },
            {
                title: "The Gnosis Week",
                description: "Volunteer Service: Contributed to backend development for the event, focusing on building and implementing core functionalities for the Treasure Hunt CTF competition. Worked closely with the tech team to ensure smooth execution, secure data handling, and a responsive challenge-solving system for participants.",
                technologies: ["Node.JS","ExpressJS"],
                github: "https://github.com/Subhajitroy03/treasurehunt-ctf-backend",
                demo: "#"
            }
        ],
        education: [
            {
                degree: "School Education (CBSE)",
                school: "Satish Chandra Memorial School, Chakdaha, India",
                date: "April 2007 – June 2022",
                description: "Completed secondary and higher secondary education with 97% in Class 10 and 92.6% in Class 12. Scored 100% in Mathematics in Class 10, and in Class 12 secured 99 in Mathematics and 96 in Computer Science."
            },
            {
                degree: "Bachelor of Technology in Computer Science",
                school: "Academy of Technology",
                date: "2023–Present",
                description: "Specializing in software engineering and data structures, with hands-on experience in real-world projects. Actively participating in coding competitions and hackathons to enhance problem-solving and development skills."
            }
        ]
        ,
        contact: {
            email: "roysubhajit2003@gmail.com",
            linkedin: "https://www.linkedin.com/in/subhajit-roy-6b2673277/",
            github: "https://github.com/Subhajitroy03",
            Instagram: "https://www.instagram.com/subhajit_roy03/"
        }
    };
}

// Populate content from data
function populateContent() {
    try {
        // Populate skills
        if (portfolioData.about && portfolioData.about.skills) {
            populateSkills('backend-skills', portfolioData.about.skills.langauges || []);
            populateSkills('mobile-skills', portfolioData.about.skills.frameworks || []);
            populateSkills('tools-skills', portfolioData.about.skills.tools || []);
        }
        
        // Populate experience
        populateExperience();
        
        // Populate projects
        populateProjects();
        
        // Populate education
        populateEducation();
        
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

// Populate education with error handling
function populateEducation() {
    try {
        const educationContent = document.getElementById('education-content');
        if (!educationContent || !Array.isArray(portfolioData.education)) return;
        
        educationContent.innerHTML = portfolioData.education.map((edu, index) => `
            <div class="education-item">
                <h3 class="education-degree">${escapeHtml(edu.degree || '')}</h3>
                <div class="education-school">${escapeHtml(edu.school || '')}</div>
                <div class="education-date">${escapeHtml(edu.date || '')}</div>
                <p class="education-description">${escapeHtml(edu.description || '')}</p>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error populating education:', error);
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
            ${contact.Instagram ? `<a href="${escapeHtml(contact.Instagram)}" class="contact-link" target="_blank" rel="noopener noreferrer">
                <span class="contact-link-text">Instagram Profile</span>
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

// Global flag to prevent multiple form initializations
let contactFormInitialized = false;

// Contact form handling with enhanced feedback
function initContactForm() {
    // Prevent multiple initializations
    if (contactFormInitialized) {
        console.log('Contact form already initialized, skipping...');
        return;
    }

    const form = document.getElementById('contact-form');
    if (!form) return;

    const submitBtn = form.querySelector('.btn-primary');
    if (!submitBtn) return;

    const originalText = submitBtn.textContent;
    let isSubmitting = false; // Prevent multiple submissions

    // Remove any existing event listeners
    const newForm = form.cloneNode(true);
    form.parentNode.replaceChild(newForm, form);
    
    // Get references to the new form elements
    const freshForm = document.getElementById('contact-form');
    const freshSubmitBtn = freshForm.querySelector('.btn-primary');

    freshForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        e.stopPropagation(); // Prevent event bubbling
        
        if (isSubmitting) {
            console.log('Form already submitting, ignoring duplicate submission');
            return;
        }
        
        isSubmitting = true;
        console.log('Form submission started');

        freshSubmitBtn.textContent = 'SENDING...';
        freshSubmitBtn.disabled = true;
        freshSubmitBtn.style.opacity = '0.7';
        freshSubmitBtn.style.pointerEvents = 'none';

        const formData = new FormData(freshForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                freshSubmitBtn.textContent = 'MESSAGE SENT!';
                freshSubmitBtn.style.background = '#000';
                freshSubmitBtn.style.color = '#fff';
                alert(`Thank you ${data.name || 'User'}! Your message has been sent.`);
                freshForm.reset();
            } else {
                alert('❌ Failed to send message. Please try again later.');
            }
        } catch (error) {
            console.error('Fetch error:', error);
            alert('❌ Something went wrong while sending your message.');
        } finally {
            // Reset button state
            setTimeout(() => {
                freshSubmitBtn.textContent = originalText;
                freshSubmitBtn.disabled = false;
                freshSubmitBtn.style.opacity = '';
                freshSubmitBtn.style.pointerEvents = '';
                freshSubmitBtn.style.background = '';
                freshSubmitBtn.style.color = '';
                isSubmitting = false;
                console.log('Form submission completed');
            }, 1000);
        }
    });

    contactFormInitialized = true;
    console.log('Contact form initialized successfully');
}

// Resume download functionality
function initResumeDownload() {
    try {
        const resumeBtn = document.getElementById('resume-btn');
        if (!resumeBtn) return;
        
        resumeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create a temporary download link
            const link = document.createElement('a');
            link.href = 'https://drive.google.com/uc?export=download&id=1z1DLBN0A7KcplRYIskdywiu2uV6jBxKo';
            link.download = 'Subhajit_Roy_Resume.pdf';

            // Trigger the download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    } catch (error) {
        console.error('Error initializing resume download:', error);
    }
}

// Initialize all functionality
function init() {
    try {
        loadPortfolioData();
        initMobileMenu();
        initSmoothScroll();
        initContactForm(); // Only called once here
        initResumeDownload();
    } catch (error) {
        console.error('Error during initialization:', error);
    }
}

// Start when DOM is loaded - SINGLE ENTRY POINT
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