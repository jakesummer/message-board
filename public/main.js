const newMessageButton = document.getElementById("new-message-btn");
const newMessageModal = document.getElementById("new-message-modal");
const newMessageForm = document.getElementById("new-message-form");
const closeModalButton = document.getElementById("close-modal-btn");

document.body.addEventListener("touchstart", function () {}, false);

newMessageButton.addEventListener("click", () => {
  newMessageForm.reset();
  newMessageModal.showModal();
  document.body.classList.add("no-scroll");
});

const closeNewMessageModal = () => {
  document.body.classList.remove("no-scroll");
  newMessageModal.classList.add("closing");

  newMessageModal.addEventListener("transitionend", function handler(e) {
    if (e.propertyName !== "transform") return;
    console.log(e.propertyName);
    newMessageModal.close();
    newMessageModal.classList.remove("closing");
    newMessageModal.removeEventListener("transitionend", handler);
  });
};

closeModalButton.addEventListener("click", closeNewMessageModal);
newMessageModal.addEventListener("cancel", (e) => {
  e.preventDefault();
  closeNewMessageModal();
});

document.addEventListener("click", async (e) => {
  const heartBtn = e.target.closest(".hearts");
  if (!heartBtn) return;

  const id = heartBtn.dataset.id;
  const heartCountElement = heartBtn.querySelector(".heart-count");
  const currHearts = parseInt(heartCountElement.textContent, 10);

  heartCountElement.textContent = currHearts + 1;

  try {
    const res = await fetch(`/messages/${id}/like`, { method: "POST" });

    if (!res.ok) {
      throw new Error("Failed to update heart count on server");
    }
  } catch (error) {
    console.error(error);
    heartCountElement.textContent = currHearts;
  }
});
