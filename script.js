const qs = (s) => document.querySelector(s);
const form = qs("form");
const input = qs("#input");
const output = qs("#output");
const select = qs("#select");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const dropdownValue = parseInt(select.value);
  const inputText = input.value;
  let outputText;
  if (!inputText) return;
  switch (dropdownValue) {
    case 0:
      outputText =
        inputText[0].toUpperCase() + inputText.substring(1).toLowerCase();
      break;
    case 1:
      outputText = inputText.slice(0, inputText.indexOf(" "));
      break;
    case 2:
      outputText = inputText.slice(0, inputText.indexOf(" ")).length;
      break;
    case 3:
      outputText = inputText.slice(
        inputText.indexOf(" "),
        inputText.lastIndexOf(" ")
      );
      break;
    case 4:
      if (inputText.endsWith(".png")) outputText = "It is a png";
      else if (inputText.endsWith(".jpg")) outputText = "It is a jpeg";
      else outputText = "It's probably not an image";
      break;
    case 5:
      outputText = inputText.replace(/./g, "*");
      break;
    case 6:
      outputText =
        inputText.slice(0, 2) +
        inputText.slice(2, 3).toUpperCase() +
        inputText.slice(3, inputText.length);
      break;
    case 7:
      outputText = [...inputText].map((char, i) =>
        inputText[i - 1] === " " || inputText[i - 1] === "-"
          ? inputText[i].toUpperCase()
          : inputText[i]
      );
      outputText = outputText.join().replaceAll(",", "");
      break;
    default:
      outputText = "Something went wrong";
  }
  output.value = outputText;
});

// copied from codepen
var animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("click", animateButton, false);
}
