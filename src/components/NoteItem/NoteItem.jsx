import { deleteNote, editNote } from "../../utilities/notes-service";
import { useState } from "react";

export default function NoteItem({ note, setDeleted }) {
  const [editForm, setEditForm] = useState("");

  async function handleDelete(e) {
    e.preventDefault();
    await deleteNote(note._id);
    setDeleted((bool) => !bool);
  }

  async function handleEdit(e) {
    e.preventDefault();
    await editNote(note._id, editForm);
    setDeleted((bool) => !bool);
  }

  return (
    <li className="text-2xl flex justify-between min-w-[300px] border rounded-xl p-2 m-2">
      <input
        onChange={(e) => setEditForm(e.target.value)}
        className="bg-transparent text-white rounded-xl px-2 placeholder-white"
        placeholder={note.text}
        value={editForm}
        type="text"
      />

      <button
        onClick={handleEdit}
        className="text-orange-500 m-2 font-bold text-2xl"
      >
        Edit
      </button>

      <button
        onClick={handleDelete}
        className="text-red-700 m-2 font-bold text-2xl"
      >
        X
      </button>
    </li>
  );
}
