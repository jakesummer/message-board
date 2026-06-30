const newMessageButton = document.getElementById("new-message-btn");
const newMessageModal = document.getElementById("new-message-modal");
const newMessageForm = document.getElementById("new-message-form");

newMessageButton.addEventListener("click", () => {
  newMessageForm.reset();
  newMessageModal.setAttribute("open", true)
})