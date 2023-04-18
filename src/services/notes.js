import axios from 'axios';

const baseUrl = 'http://localhost:3001/notes';

async function getAll() {
  var response = await axios.get(baseUrl);
  return response.data;
}

async function createNew(content) {
  const object = { content, important: false };
  const response = await axios.post(baseUrl, object);
  return response.data;
}

async function toggleImportance(note) {
  const response = await axios.put(`${baseUrl}/${note.id}`, note);
  return response.data;
}

const noteService = { getAll, createNew, toggleImportance };
export default noteService;
