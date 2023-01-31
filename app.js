// Defining DOM Elements
const bladeElement = document.querySelector(".blade");
const switchButton = document.querySelector(".switch-button");
const colorButtons = document.querySelectorAll("button");

// => function - change lightsaber color
const changeColor = (color) => {
  const colorElement = document.querySelector(".color");
  colorElement.style.background = color;
};

switchButton.addEventListener("click", () => {
  bladeElement.classList.toggle("blade-active");
});

colorButtons.forEach((element) =>
  element.addEventListener("click", (ev) => {
    const elementStyles = window.getComputedStyle(ev.target);
    changeColor(elementStyles.background);
  })
);
