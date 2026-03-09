/* Particles.js config */

particlesJS("particles-js", {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 800 } },
    color: { value: "#F3BCB4" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#f19d90" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.4,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 5,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 200,
      color: "#f19d90",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 10 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});



/* Word Scramble */

const words = [
  "Data Analyst",
  "PhD Mathematician",
  "BI Specialist",
  "Data Storyteller",
  "Problem Solver",
  "Cat Parent",
  "Creative",
  "Sustainability Advocate",
  "Lifelong Learner",
  "Outdoor Enthusiast",
  "Canadian & German Citizen",
];

let currentIndex = 0;
const scrambleElement = document.getElementById("scramble");

function scrambleEffect() {
  if (!scrambleElement) return;

  const targetWord = words[currentIndex];
  let iteration = 0;

  const interval = setInterval(() => {
    scrambleElement.innerText = targetWord
      .split("")
      .map((letter, index) => {
        // If the iteration has passed this index, show the actual letter
        if (index < iteration) {
          return targetWord[index];
        }

        // Get the character from the target word to check its case
        const char = targetWord[index];

        // Handle spaces immediately
        if (char === " ") return " ";

        // Determine if the target character is uppercase or lowercase
        // and pick the appropriate ASCII start point (65 for 'A', 97 for 'a')
        const isUpper =
          char === char.toUpperCase() && char !== char.toLowerCase();
        const startCode = isUpper ? 65 : 97;

        return String.fromCharCode(startCode + Math.floor(Math.random() * 26));
      })
      .join("");

    if (iteration >= targetWord.length) {
      clearInterval(interval);
      setTimeout(nextWord, 3000);
    }

    iteration += 1 / 3;
  }, 45);
}

function nextWord() {
  currentIndex = (currentIndex + 1) % words.length;
  scrambleEffect();
}

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(scrambleEffect, 1200);
});