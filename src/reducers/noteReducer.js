import { v4 as uuidv4 } from 'uuid';

export default function noteReducer(state = [], action) {
  switch (action.type) {
    case 'NEW_NOTE':
      return [...state, action.payload];
    case 'TOGGLE_IMPORTANCE':
      let id = action.payload.id;
      let noteToChange = state.filter(s => s.id === id)[0];
      let changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      };
      return state.map(note => (note.id !== id ? note : changedNote));
    default:
      return state;
  }
}

export function createNote(content) {
  return {
    type: 'NEW_NOTE',
    payload: {
      content,
      important: false,
      id: generateId(),
    },
  };
}

export function toggleImportanceOf(id) {
  return {
    type: 'TOGGLE_IMPORTANCE',
    payload: { id },
  };
}

const generateId = () => {
  return uuidv4();
};
