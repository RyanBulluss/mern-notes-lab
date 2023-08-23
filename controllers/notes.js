const User = require("../models/user");
const Note = require("../models/note");

module.exports = {
  create,
  index,
  deleteNote,
  edit,
};

async function create(req, res) {
  try {
    const note = await Note.create(req.body);
    res.json(note);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function index(req, res) {
  try {
    const notes = await Note.find({ user: req.user._id });
    res.json(notes);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function edit(req, res) {
  console.log(req.body.id)
  try {
    const updatedNote = await Note.updateOne(
      { _id: req.body.id },
      { $set: { text: req.body.text } }
    );
    res.json(updatedNote);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteNote(req, res) {
  console.log(req.body.noteId)
  try {
    await Note.deleteOne({ _id: req.body.noteId });
    res.json({ finshed: true });
  } catch (err) {
    res.status(400).json(err);
  }
}
