var modelBtn = document.querySelector(".btn");
console.log(modelBtn);
var modelBg = document.querySelector(".modal-bg");
console.log(modelBg);
var modalClose = document.querySelector(".modal-close");
console.log(modelClose);
modelBtn.addEventListener("click", function () {
  console.log("Inside click");
  modelBg.classList.add("bg-active");
});
console.log("Inside app.js");
modalClose.addEventListener("click", function () {
  modelBg.classList.remove("bg-active");
});
