import sendRequest from "./send-request";
const BASE_URL = '/notes'

export async function createNote(userData, user) {
    const newNote= {text: userData, user:user}
    return sendRequest(`${BASE_URL}/create`, 'POST', newNote);
}

export async function getUserNotes() {
    const notes = await sendRequest(`${BASE_URL}/index`);
    return notes
}

export async function editNote(noteId, text) {
    sendRequest(`${BASE_URL}/edit`, 'PUT', {id: noteId, text: text});
}

export async function deleteNote(noteId) {
    console.log(noteId)
    sendRequest(`${BASE_URL}/delete`, 'POST', {noteId: noteId});
}