const saturnImage = document.querySelector("img");

saturnImage.onmouseup = function () {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
};

const openModalBtn = document.getElementById("openModalBtn");

openModalBtn.onclick = function () {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
};

const closeBtn = document.getElementsByClassName("close")[0];

closeBtn.onclick = function () {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
};

window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};