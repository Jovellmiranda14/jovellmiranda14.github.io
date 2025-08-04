document.addEventListener('DOMContentLoaded', () => {

    const timelineData = [
        {
            type: 'work',
            title: 'Quality Assurance Engineer Intern',
            company: 'Codebility',
            date: 'June 2025 - Present',
            description: [
                'Assisted in QA testing for a live mobile application using a Kanban workflow, ensuring software reliability.',
                'Contributed to clear and accurate bug tickets by documenting identified defects, facilitating efficient resolution.',
                'Participated in weekly team huddles to stay informed on project status and discuss QA progress, fostering agile collaboration.'
            ]
        },
        {
            type: 'work',
            title: 'Agile Software Engineer Intern',
            company: 'TWIST RESOURCES.inc',
            date: 'January 2025 - May 2025',
            description: [
                'Contributed to both QA and development tasks within Agile sprints, utilizing Redmine for efficient task tracking and project management.',
                'Developed and implemented Playwright test suites, significantly improving test coverage and actively contributing to reducing reported bugs.',
                'Actively participated in daily stand-ups, sprint planning, and retrospectives, enhancing team productivity and project alignment.',
                'Completed 15+ intensive tech trainings, covering Agile methodologies, Security, Full Stack development, and advanced Testing techniques.'
            ]
        },
        {
            type: 'education',
            title: 'Bachelor of Science in Information Technology',
            company: 'University of the Assumption',
            date: '2021 - June 2025',
            description: [
                'Successfully completed Capstone project: UA-TRAX Web-Based Ticketing System, demonstrating comprehensive IT project management and development skills.'
            ]
        }
    ];

    const skillsData = {
        'Frontend Development': ['JavaScript', 'React', 'HTML5', 'CSS'],
        'Backend Development': ['PHP', 'Node.js', 'Express', 'Laravel Filament', 'RESTful APIs', 'Axios', 'Git'],
        'Cloud & DevOps': ['AWS'],
        'Quality Assurance & Methodologies': ['Playwright', 'Selenium', 'Redmine', 'Kanban', 'Agile Methodologies', 'Test Automation', 'BDD (Behavior-Driven Development)', 'GitHub']
    };

    const projectsData = [
        {
            title: 'NewsApp - News Aggregator Web App',
            description: 'Designed and developed a modern news aggregator web application, integrating React for a dynamic frontend and Node.js/Express for a scalable backend. Implemented efficient RESTful APIs and utilized Axios for seamless HTTP requests, alongside robust search and filter functionalities for enhanced content discovery.',
            link: 'https://news-aggregator-react-eta.vercel.app',
            github: 'https://github.com/Jovellmiranda14/news-app'
        },
        {
            title: 'News App Test Automation',
            description: 'Engineered robust automated test suites for a news aggregator web application using Selenium, ensuring comprehensive functionality and optimal user experience across various scenarios. This project focused on implementing efficient and reliable end-to-end testing processes to maintain high software quality.',
            github: 'https://github.com/Jovellmiranda14/news-app-test'
        },
        {
            title: 'News App Version 2 (Static Page)',
            description: 'Developed a static web page version of a news application, focusing on clean UI/UX design and responsive layout. This project showcases frontend development skills in creating a visually appealing and accessible information display.',
            link: 'https://news-app-v2-ruddy.vercel.app/',
            github: 'https://github.com/Jovellmiranda14/NewsAppV2'
        },
        {
            title: 'Choveterano Services Website',
            description: 'Developed and deployed a responsive, user-centric website for Choveterano Services. Focused on modern frontend development practices to create an accessible and informative online presence, enhancing client engagement and service presentation.',
            link: 'https://choveterano.netlify.app/home',
            github: 'https://github.com/Jovellmiranda14/CHOVETERANO'
        },
        {
            title: 'UA-TRAX - Web-Based Ticketing System',
            description: 'Led the full-stack development of UA-TRAX, a comprehensive Laravel Filament-based ticketing system. Implemented critical features including dynamic role-based access control, advanced analytics dashboards, and real-time email notifications. This system significantly streamlined issue tracking and project planning through custom metrics and intuitive UI.',
            github: 'https://github.com/Jovellmiranda14/UA-TRAX'
        },
        {
            title: 'UA-TRAX - Web-Based Ticketing System - Automation Testing',
            description: 'Led the full-stack development of UA-TRAX, a comprehensive Laravel Filament-based ticketing system. Implemented critical features including dynamic role-based access control, advanced analytics dashboards, and real-time email notifications. This system significantly streamlined issue tracking and project planning through custom metrics and intuitive UI.',
            github: 'https://github.com/Jovellmiranda14/UA-Trax/tree/playwright/tests/playwright',
        },
        {
            title: 'Multi-Bot Minecraft System using Mineflayer',
            description: 'Developed a Multi-Bot Minecraft System using Mineflayer, enabling automated gameplay and server management. This project showcases advanced programming skills in creating bots that can perform various tasks within the Minecraft environment, enhancing gameplay efficiency and server interaction.',
            link: 'https://bot-wq83.onrender.com/',
            github: 'https://github.com/Jovellmiranda14/mc-bot-v3'
        }
    ];

    const timelineContainer = document.getElementById('timeline-container');
    timelineContainer.innerHTML = `
        <div class="absolute h-full border-r-2 border-gray-200" style="left: 1.5rem;"></div>
        ${timelineData.map((item, index) => `
            <div class="timeline-item mb-12 cursor-pointer group" data-index="${index}">
                <div class="flex items-center mb-2">
                    <div class="flex-shrink-0 bg-white border-2 ${item.type === 'work' ? 'border-[#7C9D96]' : 'border-blue-400'} rounded-full h-12 w-12 flex items-center justify-center z-10 group-hover:scale-110 transition-transform shadow-sm timeline-icon">
                        ${item.type === 'work' ?
            `<svg class="w-6 h-6 text-[#7C9D96]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>` :
            `<svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v11.494m-9-5.747h18M5 12.25a6.25 6.25 0 0114 0c0 4.97-6.25 10-6.25 10S5 17.22 5 12.25z"></path></svg>`
        }
                    </div>
                    <div class="flex-1 ml-6">
                        <h4 class="font-bold text-xl text-gray-800">${item.title}</h4>
                        <p class="text-base text-gray-500">${item.company} / ${item.date}</p>
                    </div>
                </div>
                <div class="timeline-item-content ml-18">
                   <ul class="list-disc list-inside text-gray-700 space-y-2 text-base">
                        ${item.description.map(d => `<li>${d}</li>`).join('')}
                   </ul>
                </div>
            </div>
        `).join('')}
    `;

    document.querySelectorAll('.timeline-item').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    const skillsTagsContainer = document.getElementById('skills-tags-container');
    let skillsHTML = '';
    for (const category in skillsData) {
        skillsHTML += `<div class="mb-8">
            <h4 class="font-bold text-xl mb-4 text-gray-800">${category}</h4>
            <div class="flex flex-wrap gap-3">
                ${skillsData[category].map(skill => `
                    <span class="skill-tag text-base font-medium px-4 py-2 rounded-full hover:scale-105 transition-transform duration-200">${skill}</span>
                `).join('')}
            </div>
        </div>`;
    }
    skillsTagsContainer.innerHTML = skillsHTML;

    const skillsCtx = document.getElementById('skillsChart').getContext('2d');
    new Chart(skillsCtx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(skillsData),
            datasets: [{
                label: 'Skills Distribution',
                data: Object.values(skillsData).map(arr => arr.length),
                backgroundColor: ['#7C9D96', '#A1BEB4', '#C5DED7', '#4A5568'],
                borderColor: '#FDFBF6',
                borderWidth: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#3C3633',
                        font: { size: 15 }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed !== null) {
                                label += context.parsed + ' skills';
                            }
                            return label;
                        }
                    },
                    backgroundColor: '#4A5568',
                    titleColor: '#FFFFFF',
                    bodyColor: '#FFFFFF',
                    padding: 10,
                    cornerRadius: 6
                }
            }
        }
    });

    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = projectsData.map((project, index) => `
        <div class="rounded-lg shadow-md p-8 transition-all duration-300 project-card">
            <h3 class="font-bold text-2xl mb-4 text-gray-800">${project.title}</h3>
            <p class="text-gray-700 mb-6 text-base">${project.description.substring(0, 150)}...</p>
            <button class="learn-more-btn font-semibold text-[#7C9D96] hover:text-[#6a8a83] transition-colors text-lg" data-index="${index}">View Details &rarr;</button>
        </div>
    `).join('');

    const modal = document.getElementById('project-modal');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalLinkContainer = document.getElementById('modal-link-container');
    const modalCloseButton = document.getElementById('modal-close-button');

    document.querySelectorAll('.learn-more-btn').forEach(button => {
        button.addEventListener('click', () => {
            const projectIndex = button.getAttribute('data-index');
            const project = projectsData[projectIndex];
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;
            modalLinkContainer.innerHTML = '';

            if (project.link) {
                modalLinkContainer.innerHTML += `
                    <a href="${project.link}" target="_blank" class="inline-block bg-[#7C9D96] text-white font-bold rounded-full py-2 px-6 text-base hover:bg-[#6a8a83] transition-colors">
                        View Project &rarr;
                    </a>
                `;
            }
            if (project.github) {
                modalLinkContainer.innerHTML += `
                    <a href="${project.github}" target="_blank" class="inline-block bg-gray-700 text-white font-bold rounded-full py-2 px-6 text-base hover:bg-gray-800 transition-colors">
                        View GitHub &rarr;
                    </a>
                `;
            }

            modal.classList.add('show');
            modalBackdrop.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeModal() {
        modal.classList.remove('show');
        modalBackdrop.classList.remove('show');
        document.body.style.overflow = '';
    }

    modalCloseButton.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);


    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section');
    const navbar = document.getElementById('navbar');

    function changeNavOnScroll() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - navbar.clientHeight - 50 && pageYOffset < sectionTop + sectionHeight - navbar.clientHeight - 50) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', changeNavOnScroll);
    changeNavOnScroll();

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
});
