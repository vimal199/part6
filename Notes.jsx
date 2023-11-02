import { useDispatch, useSelector } from "react-redux"
import { toggleImportanceOf } from "./src/reducers/notereducer";

const Notes = () => {
    const notes = useSelector(({ filter, notes }) => {
        if (filter === 'ALL') {
            return notes
        }
        return filter === 'IMPORTANT' ? notes.filter(note => note.important) : notes.filter(note => !note.important)
    })
    const dispatch = useDispatch()
    const toggleImportance = (id) => {
        console.log('clicked');
        /* store.dispatch(
          toggleImportanceOf(id)
        ) */
        dispatch(toggleImportanceOf(id))
    }
    return (
        <ul>
            {
                notes.map((note) => {
                    return <li key={note.id} onClick={() => toggleImportance(note.id)}>
                        {note.content} <strong>{note.important ? 'important' : ''} </strong>
                    </li>
                }
                )
            }
        </ul>
    )
}
export default Notes