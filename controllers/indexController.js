import messagesModel from "../models/messagesModel.js";

function createNewMessage(req, res) {
  try {
    const { user, text } = req.body;
    messagesModel.create(user, text);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
}

function getAllMessages(req, res) {
  try {
    const messages = messagesModel.getAll();
    res.render("index", { messages });
  } catch (err) {
    console.log(err);
  }
}

function heartMessage(req, res) {
  const { index } = req.params;
  const updatedMessage = messagesModel.addHeart(index);

  if (!updatedMessage) {
    res.status(404).json({ error: "Message not found" });
    return;
  }

  res.status(200).json({ success: true, hearts: updatedMessage.hearts });
}

export { getAllMessages, createNewMessage, heartMessage };
