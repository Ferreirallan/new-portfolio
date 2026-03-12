function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburguer-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Dark / Light Mode

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
    setDarkMode();
}

btn.addEventListener("click", function() {
    setTheme();
});
btn2.addEventListener("click", function() {
    setTheme();
});

function setTheme () {
    let currentTheme = document.body.getAttribute("theme");

    if (currentTheme === "dark") {
         setLightDarkMode();
    } else {
        setDarkMode();
    }
}

function setDarkMode() {
    document.body.setAttribute("theme", "dark");
    localStorage.setItem("theme", "dark");

    themeIcons.forEach((icon) => {
        icon.src = icon.getAttribute("src-dark");
    });
}
function setLightDarkMode() {
    document.body.removeAttribute("theme");
    localStorage.setItem("theme", "light");
    
    themeIcons.forEach((icon) => {
        icon.src = icon.getAttribute("src-light");
    });
}

// Efeito Typing para o Cargo
const textElement = document.querySelector(".section__text__p2");
const text = "Data Analyst | Python Developer";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        textElement.innerHTML = text.substring(0, index + 1);
        index++;
        setTimeout(typeEffect, 100);
    }
}

// Inicia o efeito quando a página carrega
window.onload = () => {
    typeEffect();
};

// Efeito de revelação ao rolar a página
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.details-container').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
});
// Função para animar números nos cards de projeto
function animateCounters() {
    const counters = document.querySelectorAll('.project-description');
    
    counters.forEach(counter => {
        // Busca apenas os números no texto (ex: 64, 3, 16)
        const text = counter.innerText;
        const numbers = text.match(/\d+/g);
        
        if (numbers) {
            // Aqui você poderia implementar uma lógica de contagem real se quisesse,
            // mas apenas o efeito de Fade-In suave já melhora a experiência.
            counter.style.transition = "all 2s ease";
        }
    });
}

function filterProjects(category) {
    const cards = document.querySelectorAll('.projects-grid-container .details-container');
    
    cards.forEach(card => {
        const tag = card.querySelector('.project-tag').innerText;
        if (category === 'all' || tag.includes(category)) {
            card.style.display = "flex";
            setTimeout(() => card.style.opacity = "1", 10);
        } else {
            card.style.opacity = "0";
            setTimeout(() => card.style.display = "none", 300);
        }
    });
}

// Hover 3D effect nos projetos
const cards = document.querySelectorAll(".color-container");

cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});