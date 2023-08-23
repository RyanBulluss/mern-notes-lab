import { useEffect, useState } from "react";
import { getUserNotes, createNote } from "../../utilities/notes-service";
import NoteItem from "../../components/NoteItem/NoteItem";

export default function NotesPage({ user }) {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [deleted, setDeleted] = useState(true);

  async function handleSubmit(e) {
    e.preventDefault();
    const note = await createNote(newNote, user);
    setNotes([...notes, note]);
    setNewNote("");
  }

  useEffect(() => {
    async function getNotes() {
      const userNotes = await getUserNotes();
      setNotes(userNotes);
    }
    getNotes();
  }, [deleted]);

  return (
    <>
      <h1 className="text-4xl m-8 font-bold">Your Notes:</h1>
      <div className="m-2">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="note"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            required
          />
          <button className="bg-sky-600 px-2 mx-1" type="submit">
            Add Note
          </button>
        </form>
      </div>
      {notes.length ? (
        <>
          <h2 className="m-4 text-2xl">Notes:</h2>
          <ul>
            {notes.map((note, idx) => (
              <NoteItem note={note} key={idx} setDeleted={setDeleted} />
            ))}
          </ul>
        </>
      ) : (
        <h2 className="text-2xl m-8 font-bold">No Notes Yet!</h2>
      )}
    </>
  );
}
