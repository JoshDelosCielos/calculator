  const display = document.querySelector(".display input");
const buttons = document.querySelectorAll(".buttons input");

// Select Element for time
const Hours = document.querySelector("#hrs");
const Mins = document.querySelector("#mins");
const Period = document.querySelector("#ampm");

// Select Element to change the theme
const container = document.querySelector(".container");
const buttonsWrapper = document.querySelector("#buttonsWrapper");
const darkMode = document.querySelector("#dark");
const lightMode = document.querySelector("#light");
const navItem = document.querySelector("nav");
const timeText = document.querySelector(".time h1");
const modeBtn = document.querySelector(".modeBtn");
const modeIcon = document.querySelectorAll(".modeIcon");

// Calculator functionality
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.value) {
      case "=":
        display.value = display.value.replace(/÷/g, "/");
        display.value = display.value.replace(/×/g, "*");
        display.value = display.value.replace(/−/g, "-");
        display.value = eval(display.value);
        break;
      case "AC":
        display.value = "";
        break;
      case "DEL":
        display.value = display.value.slice(0, -1);
        break;
      default:
        display.value += button.value;
    }
  });
});
