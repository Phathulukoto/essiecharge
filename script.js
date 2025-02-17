// Number of logos to create
const logoCount = 10;

// Get the container element for the rain effect
const container = document.querySelector('.rain-container');

// Function to create the falling logos
function createRain() {
    for (let i = 0; i < logoCount; i++) {
        const logo = document.createElement('img');
        logo.src = 'img/IMG-20240803-WA0003-removebg-preview (1)'; // Path to your logo
        logo.classList.add('logo');

        // Randomize position and animation
        const xPosition = Math.random() * window.innerWidth;
        const delay = Math.random() * 5;

        logo.style.left = `${xPosition}px`;
        logo.style.animationDuration = `${Math.random() * 5 + 3}s`;
        logo.style.animationDelay = `${delay}s`;

        container.appendChild(logo);
    }
}

// Call the function to create the rain effect
createRain();

// Rain Effect Code
document.addEventListener("DOMContentLoaded", () => {
    const rainContainer = document.querySelector(".rain-container");
  
    function randomValue(max) {
      return Math.random() * max;
    }
  
    function createRaindrop() {
      const logo = document.createElement("img");
      logo.src = "logo.png"; // Ensure 'logo.png' is in the correct folder
      logo.classList.add("logo");
      logo.style.left = `${randomValue(100)}%`;
      logo.style.animationDuration = `${randomValue(5) + 2}s`;
      logo.style.animationDelay = `${randomValue(3)}s`;
      rainContainer.appendChild(logo);
  
      setTimeout(() => {
        rainContainer.removeChild(logo);
      }, 8000); // Remove the raindrop after it has fallen
    }
  
    // Generate a lot of raindrops
    setInterval(createRaindrop, 150); // Adjust interval for density
  });
  