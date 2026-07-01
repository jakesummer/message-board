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

document.addEventListener("click", async (e) => {
  const heartBtn = e.target.closest(".hearts");
  if (!heartBtn) return;

  const index = heartBtn.dataset.index;
  const heartCountElement = heartBtn.querySelector(".heart-count");
  const currHearts = parseInt(heartCountElement.textContent, 10);

  heartCountElement.textContent = currHearts + 1;

  try {
    const res = await fetch(`/messages/${index}/like`, { method: "POST" });

    if (!res.ok) {
      throw new Error("Failed to update heart count on server");
    }
  } catch (error) {
    console.error(error);
    heartCountElement.textContent = currHearts;
  }
});
