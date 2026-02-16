const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const floatingContainer = document.getElementById("floating-container");

// Arrays of emojis
const hearts = ["❤️", "💖", "💘", "💝"];
const roses = ["🌹", "🥀", "🌺"];

// Create floating heart or rose
function createFloatingElement() {
    const element = document.createElement("div");
    const type = Math.random() < 0.6 ? "heart" : "rose";
    element.classList.add(`floating-${type}`);

    // Random horizontal position
    element.style.left = Math.random() * window.innerWidth + "px";
    // Random font size
    element.style.fontSize = 12 + Math.random() * 24 + "px";
    // Random emoji
    element.textContent = type === "heart"
        ? hearts[Math.floor(Math.random() * hearts.length)]
        : roses[Math.floor(Math.random() * roses.length)];

    // Animation
    element.style.animation = `floatUp ${4 + Math.random() * 4}s linear forwards`;
    floatingContainer.appendChild(element);

    // Remove after animation
    setTimeout(() => element.remove(), 8000);
}

// Continuously create floating elements
setInterval(createFloatingElement, 400);

// Button click: burst animation + redirect
function clickRedirect(url) {
    for (let i = 0; i < 20; i++) createFloatingElement();
    setTimeout(() => window.location.href = url, 500);
}

yesBtn.addEventListener("click", () => clickRedirect("/yes"));
noBtn.addEventListener("click", () => clickRedirect("/no"));
function createFloatingElement() {
    const element = document.createElement("div");
    const type = Math.random() < 0.6 ? "heart" : "rose";
    element.classList.add(`floating-${type}`);

    // Random horizontal position
    element.style.left = Math.random() * window.innerWidth + "px";
    // Random font size
    element.style.fontSize = 12 + Math.random() * 24 + "px";
    // Random emoji
    element.textContent = type === "heart"
        ? hearts[Math.floor(Math.random() * hearts.length)]
        : roses[Math.floor(Math.random() * roses.length)];

    // Start at bottom
    element.style.bottom = "0px";

    // Animation: bottom → top
    element.style.animation = `floatUp ${4 + Math.random() * 4}s linear forwards`;
    floatingContainer.appendChild(element);

    // Remove after animation
    setTimeout(() => element.remove(), 8000);
}
