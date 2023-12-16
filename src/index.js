import projects from "./projects.js";


// Navigation

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Auto Typing Text

const textElement = document.getElementById('typingText');
const textToType = "Front End Developer";
const typingSpeed = 100;
const pauseDuration = 1000;

function typeText() {
    let i = 0;

    function typeNextCharacter() {
        if (i < textToType.length) {
            textElement.textContent += textToType.charAt(i);
            i++;
            setTimeout(typeNextCharacter, typingSpeed);
        } else {
            setTimeout(() => {
                i = 0;
                textElement.textContent = '';
                typeNextCharacter();
            }, pauseDuration);
        }
    }

    typeNextCharacter();
}

typeText();

// Featured Project

function featuredProject() {
    const featured = document.getElementById('featured');


    const maxIdProject = projects.reduce((prev, current) => (prev.id > current.id) ? prev : current);

    const projectDiv = document.createElement('div');
    projectDiv.innerHTML = `
        <h2>${maxIdProject.projectName}</h2>
        <p>${maxIdProject.projectDesc}</p>
        <img src="${maxIdProject.projectImg}" alt="${maxIdProject.projectName} Image">
        <div>
        <a href="${maxIdProject.projectLink}" class="button" target="_blank">Visit Project</a>
        <a href="${maxIdProject.projectGithub}" class="button" target="_blank">GitHub Repository</a>
        </div>
    `;

    featured.appendChild(projectDiv);
    console.log(projects);
};

featuredProject();

//projects

function allProjects() {
    const projectContainer = document.getElementById('projects');

    projects.forEach(project => {
        const projectsDiv = document.createElement('div');
        projectsDiv.innerHTML = `
        <h2>${project.projectName}</h2>
        <p>${project.projectDesc}</p>
        <img src="${project.projectImg}" alt="${project.projectName} Image">
        <div>
        <a href="${project.projectLink}" class="button" target="_blank">Visit Project</a>
        <a href="${project.projectGithub}" class="button" target="_blank">GitHub Repository</a>
        </div>
    `;

    projectContainer.appendChild(projectsDiv);
    })
}

allProjects();
