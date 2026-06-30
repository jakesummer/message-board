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

export { getAllMessages, createNewMessage };
