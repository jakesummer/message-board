const newMessageButton = document.getElementById("new-message-btn");
const newMessageModal = document.getElementById("new-message-modal");
const newMessageForm = document.getElementById("new-message-form");
const closeModalButton = document.getElementById("close-modal-btn");

newMessageButton.addEventListener("click", () => {
  newMessageForm.reset();
  newMessageModal.showModal();
  document.body.classList.add("no-scroll");
});

closeModalButton.addEventListener("click", () => newMessageModal.close());
newMessageModal.addEventListener("close", () =>
  document.body.classList.remove("no-scroll"),
);
