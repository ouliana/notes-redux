import { useDispatch } from 'react-redux';
import { createNote } from '../reducers/noteReducer';

export default function NewNote() {
  const dispatch = useDispatch();

  return (
    <form onSubmit={addNote}>
      <input name='note' />
      <button type='submit'>add</button>
    </form>
  );

  async function addNote(event) {
    event.preventDefault();
    var content = event.target.note.value;
    event.target.note.value = '';
    dispatch(createNote(content));
  }
}
