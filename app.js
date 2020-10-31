// var modelBtn = document.querySelector(".btn");
// console.log(modelBtn);
// var modelBg = document.querySelector(".modal-bg");
// console.log(modelBg);
// var modalClose = document.querySelector(".modal-close");
// console.log(modelClose);
// modelBtn.addEventListener("click", function () {
//   console.log("Inside click");
//   modelBg.classList.add("bg-active");
// });
// console.log("Inside app.js");
// modalClose.addEventListener("click", function () {
//   modelBg.classList.remove("bg-active");
// });

const texts = [
  "Security Appliances",
  "Computer Repair",
  "Computer Accessories",
];
let count = 0;

let index = 0;

let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.querySelector(".typing").textContent = letter;
  if (letter.length == currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 200);
})();
