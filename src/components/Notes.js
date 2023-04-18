import { useDispatch, useSelector } from 'react-redux';
import { toggleImportanceOf } from '../reducers/noteReducer';
import noteService from '../services/notes';

export default function Notes() {
  const dispatch = useDispatch();
  const notes = useSelector(({ filter, notes }) => {
    if (filter === 'ALL') {
      return notes;
    }

    return filter === 'IMPORTANT'
      ? notes.filter(note => note.important)
      : notes.filter(note => !note.important);
  });

  return (
    <ul>
      {notes.map(note => (
        <Note
          key={note.id}
          note={note}
          handleClick={() => handleClick(note)}
        />
      ))}
    </ul>
  );

  async function handleClick(note) {
    var changedNote = {
      ...note,
      important: !note.important,
    };
    await noteService.toggleImportance(changedNote);
    dispatch(toggleImportanceOf(changedNote));
  }
}

function Note({ note, handleClick }) {
  return (
    <li onClick={handleClick}>
      {note.content} <strong>{note.important ? 'important' : ''}</strong>
    </li>
  );
}
