const messages = [
  {
    text: "Hello!",
    user: "Jake Summer",
    added: "June, 30 2026",
    hearts: 0,
  },
  {
    text: "This is my message board web app!",
    user: "Jake Summer",
    added: "June, 30 2026",
    hearts: 0,
  },
];

const messagesModel = {
  create(userName, message) {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-us", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    messages.push({
      text: message,
      user: userName,
      added: formattedDate,
      hearts: 0,
    });
  },

  getAll() {
    return messages;
  },
};

export default messagesModel;
