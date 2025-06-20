document.addEventListener("DOMContentLoaded", function () {
    const pagina = window.location.pathname;

    if (pagina.includes("habilidades.html")) {
        
        document.querySelector(".conocimiento").innerText = "Conocimiento";
        document.querySelector(".mejorando").innerText = "Mejorando";
        document.querySelector(".aprendiendo").innerText = "Aprendiendo";
        
        document.querySelector(".comunicacion").innerText = "Comunicación";        
        document.querySelector(".trabajoEquipo").innerText = "Trabajo en equipo";
        document.querySelector(".resoluConflictos").innerText = "Resolución de conflictos";
        document.querySelector(".aprendizajeContinuo").innerText = "Aprendizaje Continuo";
        document.querySelector(".gestionTiempo").innerText = "Gestión de tiempo";
    }

    if (pagina.includes("contacto.html")) {
        
        document.querySelector(".linkdn").innerText = "LinkedIn";
        document.querySelector(".mail").innerText = "Email";
        document.querySelector(".tel").innerText = "Whatsapp";
    }
});




