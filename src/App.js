import { createNote, toggleImportanceOf } from './reducers/noteReducer';
import { useSelector, useDispatch } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();
  const notes = useSelector(state => state);

  return (
    <div>
      <form onSubmit={addNote}>
        <input name='note' />
        <button type='submit'>add</button>
      </form>
      <ul>
        {notes.map(note => (
          <li
            key={note.id}
            onClick={() => toggleImportance(note.id)}
          >
            {note.content} <strong>{note.important ? 'important' : ''}</strong>
          </li>
        ))}
      </ul>
    </div>
  );

  function addNote(event) {
    event.preventDefault();
    var content = event.target.note.value;
    event.target.note.value = '';
    dispatch(createNote(content));
  }

  function toggleImportance(id) {
    dispatch(toggleImportanceOf(id));
  }
}
