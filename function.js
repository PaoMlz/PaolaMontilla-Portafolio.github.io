let idiomaActual = "es"; // Por defecto, el idioma es español

function cambiarIdioma() {
    const banderaEspana = document.getElementById("banderaEspana");
    const banderaInglaterra = document.getElementById("banderaInglaterra");

    if (idiomaActual === "es") {
        idiomaActual = "en";
        banderaEspana.style.display = "none";
        banderaInglaterra.style.display = "block";
        cambiarTextoIdioma("en");
    } else {
        idiomaActual = "es";
        banderaInglaterra.style.display = "none";
        banderaEspana.style.display = "block";
        cambiarTextoIdioma("es");
    }
}

function cambiarTextoIdioma(idioma) {
    const textos = {
        es: {
            Home: "Inicio",
            aboutLink: "Sobre mí",
            projectsLink: "Portafolio",
            Skills: "Habilidades",
            curriculum: "Hoja de vida",
            contactLink: "Contacto",
            privacyPolicy: "Política de privacidad",
            termsOfService: "Términos de servicio",
            heroTitle: "Diseñando experiencias digitales cautivadoras.",
            heroMessage: "¡Estoy lista para trabajar contigo!",
            botonContact: "Contactar",
            titleAboutMe: "Sobre mi",
            aboutMeContent: `
                <div class="about-details">
                    <div class="about-photo">
                        <img src="./img/31448169-66ba-4dbf-acd0-78956adfdeff.jpg" alt="Paola Montilla" class="about-photoAM">
                    </div>
                    <div class="about-description">
                        <h2 class="SobreMi">Sobre mí</h2>
                        <p class="about-description">
                            Soy una desarrolladora web y docente de corazón. A lo largo de mi trayectoria, he aprendido que los sueños no son imposibles, y aquí estoy, llevando mi vocación y pasión de la mano. Siempre he disfrutado del placer de aprender, lo cual me ha llevado a explorar diferentes áreas académicas y profesionales. Finalmente, encontré mi camino en el mundo tecnológico, donde el aprendizaje es constante y se transforma día a día. Me encanta resolver dilemas tecnológicos y enfrentarme a lo desconocido en un entorno cambiante. Mi objetivo es seguir creciendo profesionalmente y contribuir a este emocionante campo en constante evolución.
                        </p>
                    </div>
                </div>`,
            programmingLanguages: "Lenguajes de programación: HTML, CSS, JavaScript, TypeScript.",
            frameworksLibraries: "Frameworks/Librerías: React, Font Awesome, Bootstrap.",
            databases: "Bases de Datos: Firebase.",
            tools: "Herramientas: Git, Node.js.",
            projectManagementMethodologies: "Metodologías de Gestión de Proyectos: Scrum, Gantt.",
            dataFormats: "Formatos de datos: JSON.",
            projectManagement: "Gestión de Proyectos: Trello, GitProject.",
            designPrototyping: "Diseño y Prototipado: Figma, Canva."
        },
        en: {
            Home: "Home",
            aboutLink: "About",
            projectsLink: "Portfolio",
            Skills: "Skills",
            curriculum: "Curriculum",
            contactLink: "Contact",
            privacyPolicy: "Privacy Policy",
            termsOfService: "Terms of Service",
            heroTitle: "Designing captivating digital experiences.",
            heroMessage: "I'm ready to work with you!",
            botonContact: "Contact",
            titleAboutMe: "About me",
            aboutMeContent: `
                <div class="about-details">
                    <div class="about-photo">
                        <img src="./img/31448169-66ba-4dbf-acd0-78956adfdeff.jpg" alt="Paola Montilla" class="about-photoAM">
                    </div>
                    <div class="about-description">
                        <h2 class="SobreMi">About me</h2>
                        <p class="about-description">
                            I am a web developer and teacher at heart. Throughout my career, I have learned that dreams are not impossible, and here I am, pursuing my vocation and passion hand in hand. I have always enjoyed the pleasure of learning, which has led me to explore different academic and professional areas. Finally, I found my path in the technological world, where learning is constant and transforms day by day. I love solving technological dilemmas and facing the unknown in a changing environment. My goal is to continue growing professionally and contribute to this exciting field in constant evolution.
                        </p>
                    </div>
                </div>`,
            programmingLanguages: "Programming Languages: HTML, CSS, JavaScript, TypeScript.",
            frameworksLibraries: "Frameworks/Libraries: React, Font Awesome, Bootstrap.",
            databases: "Databases: Firebase.",
            tools: "Tools: Git, Node.js.",
            projectManagementMethodologies: "Project Management Methodologies: Scrum, Gantt.",
            dataFormats: "Data Formats: JSON.",
            projectManagement: "Project Management: Trello, GitProject.",
            designPrototyping: "Design & Prototyping: Figma, Canva."
        }


    };


    // Actualizar textos de los elementos del menú según el idioma seleccionado
    const homeLink = document.querySelector("#Home");
    const aboutLink = document.querySelector("#aboutLink");
    const projectsLink = document.querySelector("#projectsLink");
    const skillsLink = document.querySelector('a[href="#skillsLinks"]');
    const curriculumLink = document.querySelector("#curriculum");
    const contactLink = document.querySelector("#contactLink");

    homeLink.textContent = textos[idioma].Home;
    aboutLink.textContent = textos[idioma].aboutLink;
    projectsLink.textContent = textos[idioma].projectsLink;
    skillsLink.textContent = textos[idioma].Skills;
    curriculumLink.textContent = textos[idioma].curriculum;
    contactLink.textContent = textos[idioma].contactLink;
    // Actualizar mensaje en el héroe
    const heroTitle = document.querySelector(".hero-title");
    heroTitle.textContent = textos[idioma].heroTitle;

    const heroMessage = document.querySelector(".hero-message");
    heroMessage.textContent = textos[idioma].heroMessage;

    const botonContact = document.querySelector(".contact-button");
    botonContact.textContent = textos[idioma].botonContact;

    const privacyPolicy = document.querySelectorAll(".footer-links a")[0];
    const termsOfService = document.querySelectorAll(".footer-links a")[1];
    privacyPolicy.textContent = textos[idioma].privacyPolicy;
    termsOfService.textContent = textos[idioma].termsOfService;

    // Actualizar el contenido de "Sobre Mí" según el idioma
    const aboutMeContent = document.getElementById("aboutMeContent");
    aboutMeContent.innerHTML = textos[idioma].aboutMeContent;

    // Reemplazar el ID de la imagen en el contenido de "Sobre Mí"
    aboutMeContent.innerHTML = aboutMeContent.innerHTML.replace('about-photoAM', 'aboutPhoto');

    const titleAboutMe = document.querySelector("#aboutMeContent h2");
    titleAboutMe.textContent = textos[idioma].titleAboutMe;
}

function cambiarContenidoSobreMi() {
    const aboutMeContent = document.getElementById("aboutMeContent");
    aboutMeContent.style.display = 'block';

    const hero = document.querySelector('.hero');
    hero.style.display = 'none';

    const portfolioSection = document.getElementById('portfolioSection');
    portfolioSection.style.display = 'none';

    const curriculumSection = document.getElementById('curriculumSection');
    curriculumSection.style.display = 'none';
}

document.getElementById("aboutLink").addEventListener("click", cambiarContenidoSobreMi);


//PORTAFOLIO
function mostrarPortafolio() {
    const aboutMeContent = document.getElementById("aboutMeContent");
    aboutMeContent.style.display = 'none';

    const hero = document.querySelector('.hero');
    hero.style.display = 'none';

    const curriculumSection = document.getElementById('curriculumSection');
    curriculumSection.style.display = 'none';

    const skillsContent = document.getElementById("skillsLinks"); // Aquí selecciona el ID correcto
    skillsContent.style.display = 'none';

    const portfolioSection = document.getElementById('portfolioSection');
    portfolioSection.style.display = 'grid';


}

document.getElementById("projectsLink").addEventListener("click", mostrarPortafolio);



//SKILLS
function mostrarSkills() {
    const aboutMeContent = document.getElementById("aboutMeContent");
    aboutMeContent.style.display = 'none';

    const hero = document.querySelector('.hero');
    hero.style.display = 'none';

    const portfolioSection = document.getElementById('portfolioSection');
    portfolioSection.style.display = 'none';

    const curriculumSection = document.getElementById('curriculumSection');
    curriculumSection.style.display = 'none';

    const skillsContent = document.getElementById("skillsLinks"); // Aquí selecciona el ID correcto
    skillsContent.style.display = 'block';
}

// Asociar la función al hacer clic en el enlace o botón
const skillsLink = document.getElementById("skills"); // Selecciona el enlace con ID "skills"
skillsLink.addEventListener("click", mostrarSkills);

////////////////////////////////////HOJA DE VIDA/////////////////////////////////////////////////

// Función para desplazarse a la sección de la hoja de vida al hacer clic en el enlace del menú
function irAHojaDeVida() {

    const aboutMeContent = document.getElementById("aboutMeContent");
    aboutMeContent.style.display = 'none';

    const hero = document.querySelector('.hero');
    hero.style.display = 'none';

    const portfolioSection = document.getElementById('portfolioSection');
    portfolioSection.style.display = 'none';

    const skillsContent = document.getElementById("skillsLinks"); // Aquí selecciona el ID correcto
    skillsContent.style.display = 'none'

    const contactoSection = document.getElementById('contactSection');
    contactoSection.style.display = 'none';

    const curriculumSection = document.getElementById('curriculumSection');
    curriculumSection.style.display = 'block';


    // Obtiene la posición vertical (en píxeles) de la sección de la hoja de vida
    const sectionOffset = curriculumSection.offsetTop;

    // Desplaza la ventana hasta la posición de la sección de la hoja de vida con una animación suave
    window.scrollTo({
        top: sectionOffset,
        behavior: 'smooth' // Animación suave de desplazamiento
    });
}

// Asocia la función al hacer clic en los enlaces del menú
const curriculumLink = document.getElementById('curriculum');
const contactLink = document.getElementById('contactLink');

curriculumLink.addEventListener('click', function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace (navegación)
    irAHojaDeVida();
});

contactLink.addEventListener('click', function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace (navegación)
    irAContacto();
});

////////////////////////////////////////////contacto///////////////////////////////////////////////
// Otras funciones para otras secciones (como la sección de contacto)
function irAContacto() {
    const aboutMeContent = document.getElementById("aboutMeContent");
    aboutMeContent.style.display = 'none';

    const hero = document.querySelector('.hero');
    hero.style.display = 'none';

    const portfolioSection = document.getElementById('portfolioSection');
    portfolioSection.style.display = 'none';

    const skillsContent = document.getElementById("skillsLinks"); // Aquí selecciona el ID correcto
    skillsContent.style.display = 'none'

    const curriculumSection = document.getElementById('curriculumSection');
    curriculumSection.style.display = 'none';

    const contactoSection = document.getElementById('contactSection');
    contactoSection.style.display = 'block';

    const sectionOffset = contactoSection.offsetTop;
    window.scrollTo({
        top: sectionOffset,
        behavior: 'smooth'
    });
}


