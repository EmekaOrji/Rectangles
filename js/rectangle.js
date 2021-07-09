var areaInput = document.querySelectorAll("#area-container input");
var perimeterInput = document.querySelectorAll("#perimeter-container input");
var diagonalInput = document.querySelectorAll("#diagonal-container input");
var aTab = document.querySelector("#area");
var pTab = document.querySelector("#perimeter");
var dTab = document.querySelector("#diagonal");
var aContainer = document.querySelector("#area-container");
var pContainer = document.querySelector("#perimeter-container");
var dContainer = document.querySelector("#diagonal-container");
var fixBg = document.querySelector("#fixedbg");
var menu = document.querySelector("#menu-btn");
var sidebar = document.querySelector(".sidebar-container");

// CODE FOR SOLVING THE PROPERTIES STARTS
areaInput.forEach(function (e, i, arr) {
  e.addEventListener("input", solveArea);
  function solveArea() {
    let l = arr[0].value;
    let b = arr[1].value;
    let header = document.querySelector(".active-head-a").textContent;
    let x = header.indexOf("Area")
    if (x !== -1) {
      if ((arr[0].value != "") && (arr[1].value != "")) {
        document.getElementById("a-answer").textContent = l * b;
      }
    }
  }
});
perimeterInput.forEach(function (e, i, arr) {
  e.addEventListener("input", solvePerimeter);
  function solvePerimeter() {
    let l = parseInt(arr[0].value);
    let b = parseInt(arr[1].value);
    let header = document.querySelector(".active-head-p").textContent;
    let x = header.indexOf("Perimeter")
    if (x !== -1) {
      if ((arr[0].value != "") && (arr[1].value != "")) {
        document.getElementById("p-answer").textContent = 2 * (l + b);
      }
    }
  }
});
diagonalInput.forEach(function (e, i, arr) {
  e.addEventListener("input", solveDiagonal);
  function solveDiagonal() {
    let l = arr[0].value;
    let b = arr[1].value;
    let header = document.querySelector(".active-head-d").textContent;
    let x = header.indexOf("Diagonal")
    if (x !== -1) {
      if ((arr[0].value != "") && (arr[1].value != "")) {
        document.getElementById("d-answer").textContent = Math.round(Math.sqrt((l**2)+(b**2))*100)/100;
      }
    }
  }
});
// CODE FOR SOLVING THE PROPERTIES ENDS

// CODE FOR SWITCHING BETWEEN TABS STARTS
aTab.addEventListener("click", function () {
  pContainer.classList.add("notactive");
  dContainer.classList.add("notactive");
  aContainer.classList.remove("notactive");
  this.classList.add("active");
  pTab.classList.remove("active");
  dTab.classList.remove("active");
  tuckIn();
});
pTab.addEventListener("click", function () {
  aContainer.classList.add("notactive");
  dContainer.classList.add("notactive");
  pContainer.classList.remove("notactive");
  this.classList.add("active");
  aTab.classList.remove("active");
  dTab.classList.remove("active");
  tuckIn();
});
dTab.addEventListener("click", function () {
  aContainer.classList.add("notactive");
  pContainer.classList.add("notactive");
  dContainer.classList.remove("notactive");
  this.classList.add("active");
  aTab.classList.remove("active");
  pTab.classList.remove("active");
  tuckIn();
});
// CODE FOR SWITCHING BETWEEN TABS ENDS

// CODE TO TUCKOUT/TUCKIN THE NAVBAR STARTS
aContainer.addEventListener("click", tuckIn);
pContainer.addEventListener("click", tuckIn);
dContainer.addEventListener("click", tuckIn);
clickTab.addEventListener("click", tuckIn);
fixBg.addEventListener("click", tuckIn);
menu.addEventListener("click", tuckOut);
function tuckOut() {
  sidebar.classList.add("tuckout");
  sidebar.classList.remove("tuckin");
}
function tuckIn() {
  sidebar.classList.add("tuckin");
  sidebar.classList.remove("tuckout");
}
document.body.addEventListener("keyup", function (e) {
  if (e.keyCode == 9) {
    tuckOut();
  }
});
tuckIn();
// CODE TO TUCKOUT/TUCKIN THE NAVBAR ENDS

// CODE TO CHANGE THEMES STARTS

orange.addEventListener("focus", function () {
  document.body.className = "orange";
});
green.addEventListener("focus", function () {
  document.body.className = "green";
});
yellow.addEventListener("focus", function () {
  document.body.className = "yellow";
});
blue.addEventListener("focus", function () {
  document.body.className = "blue";
});
red.addEventListener("focus", function () {
  document.body.className = "red";
});
dark.addEventListener("focus", function () {
  document.body.className = "dark";
});