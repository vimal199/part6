import { useDispatch } from 'react-redux'
import { createNote } from './src/reducers/notereducer'
const NewNote = () => {
    const dispatch = useDispatch()
    const addNote = (event) => {
        event.preventDefault()
        const content = event.target.note.value
        event.target.note.value = ''
        /* store.dispatch(
          createNote(content)
        ) */
        dispatch(createNote(content))
    }
    return (
        <form onSubmit={addNote}>
            <input name='note'></input>
            <button type='submit'>add</button>
        </form>)
}
export default NewNote

