const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  modal: document.querySelector("[data-modal]"),
};

refs.openModalBtn.addEventListener("click", openModal);
refs.closeModalBtn.addEventListener("click", closeModal);

function windowModalRemoveKeydownClick() {
  window.removeEventListener("keydown", closeModalEscape);
  refs.modal.removeEventListener("click", closeModalBackdrop);
}

function toggleModal() {
  document.body.classList.toggle("modal-open");
  refs.modal.classList.toggle("backdrop__is-hidden");
}

function openModal() {
  window.addEventListener("keydown", closeModalEscape);
  toggleModal();
  refs.modal.addEventListener("click", closeModalBackdrop);
}

function closeModal() {
  windowModalRemoveKeydownClick();
  toggleModal();
}

function closeModalEscape(e) {
  if (e.code === "Escape") {
    toggleModal();
    windowModalRemoveKeydownClick();
  }
}

function closeModalBackdrop(e) {
  if (e.target === e.currentTarget) {
    windowModalRemoveKeydownClick();
    toggleModal();
  }
}
