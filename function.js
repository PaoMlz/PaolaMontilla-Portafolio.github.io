// Función para crear los elementos en el CV

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
            botonContact:"Contactar",
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
            botonContact:"Contact",
        }
    };

    //Actualziar mensaje en el titulo en el héroe 
    const heroTitle = document.querySelector(".hero-title");
    heroTitle.textContent = textos[idioma].heroTitle;


    // Actualizar mensaje en el héroe
    const heroMessage = document.querySelector(".hero-message");
    heroMessage.textContent = textos[idioma].heroMessage;

    //Actualizar texto boton contactame
    const botonContact = document.querySelector(".contact-button");
    botonContact.textContent =textos [idioma].botonContact;

    // Actualizar texto en el footer
    const privacyPolicy = document.querySelectorAll(".footer-links a")[0];
    const termsOfService = document.querySelectorAll(".footer-links a")[1];
    privacyPolicy.textContent = textos[idioma].privacyPolicy;
    termsOfService.textContent = textos[idioma].termsOfService;

    // Actualizar textos del menú
    const menuItems = document.querySelectorAll("#menu ul li a");
    menuItems.forEach(item => {
        const id = item.id;
        item.textContent = textos[idioma][id];
    });
}

// Llamar a la función para crear elementos cuando se cargue la página
window.onload = function () {
    cambiarTextoIdioma(idiomaActual);
};


