// import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';
import noteService from '../services/notes';

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    toggleImportanceOf(state, action) {
      var changedNote = action.payload;
      return state.map(note =>
        note.id !== changedNote.id ? note : changedNote
      );
    },
    appendNote(state, action) {
      state.push(action.payload);
    },
    setNotes(state, action) {
      return action.payload;
    },
  },
});

// const generateId = () => {
//   return uuidv4();
// };

export function initializeNotes() {
  return async function (dispatch) {
    var notes = await noteService.getAll();
    dispatch(setNotes(notes));
  };
}

export function createNote(content) {
  return async function (dispatch) {
    var newNote = await noteService.createNew(content);
    dispatch(appendNote(newNote));
  };
}

export const { toggleImportanceOf, appendNote, setNotes } = noteSlice.actions;

export default noteSlice.reducer;
