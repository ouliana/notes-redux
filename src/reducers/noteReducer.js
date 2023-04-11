import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    content: 'reducer defines how redux store works',
    important: true,
    id: 1,
  },
  {
    content: 'state of store can contain any data',
    important: false,
    id: 2,
  },
];

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    createNote(state, action) {
      var content = action.payload;
      state.push({
        content,
        important: false,
        id: generateId(),
      });
    },
    toggleImportanceOf(state, action) {
      var id = action.payload;
      var noteToChange = state.find(n => n.id === id);
      var changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      };
      return state.map(note => (note.id !== id ? note : changedNote));
    },
  },
});

const generateId = () => {
  return uuidv4();
};

export const { createNote, toggleImportanceOf } = noteSlice.actions;
export default noteSlice.reducer;
