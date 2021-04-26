"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btn_close_modal = document.querySelector(".btn-close-modal");
const btns_open_modal = document.querySelectorAll(".btn-show-modal");

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

for (let i = 0; i < btns_open_modal.length; i++)
  btns_open_modal[i].addEventListener("click", openModal);

btn_close_modal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
