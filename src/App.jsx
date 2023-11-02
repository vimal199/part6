import Notes from "../Notes"
import NewNote from "../NewNote"
import VisibilityFilter from "./reducers/VisibilityFilter"
//import { createStore } from 'redux'
//import notereducer from './reducers/notereducer';
/* import { createNote, toggleImportanceOf } from './reducers/notereducer'
import { useDispatch, useSelector } from 'react-redux'; */
/* const counterReducer = (state = 0, action) => {
  console.log('counterReducer');
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'ZERO':
      return 0
    default:
      return state
  }
} */
/*const noteReducer = (state = [], action) => {
  if (action.type === 'NEW_NOTE') {
    state.push(action.payload)
    return state
  }
  else if (action.type == 'TOGGLE_IMPORTANCE') {
    console.log('gftdd');
    const noteToChange = state.find(n => n.id == action.payload.id)
    const changedNote = {
      ...noteToChange, important: !noteToChange.important
    }
    return state.map(note =>
      note.id != action.payload.id ? note : changedNote
    )
  }
  return state
}*/
//const store = createStore(noteReducer)
/* store.dispatch(
  {
    type: 'NEW_NOTE',
    payload: {
      content: 'the app state is in redux store',
      important: true,
      id: 2
    }
  }
)
store.dispatch(
  {
    type: 'NEW_NOTE',
    payload: {
      content: 'state changes are made with actions',
      important: false,
      id: 3
    }
  }
) */

const App = () => {
  //const dispatch = useDispatch()
  /*  const filterSelected = (value) => {
     console.log(value);
   } */
  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}
/* const App_Note = () => {
  return (
    <div>
      <div>{store.getState()}</div>
      <button onClick={e => store.dispatch({ type: 'INCREMENT' })}>
        plus
      </button>
      <button onClick={e => store.dispatch({ type: 'DECREMENT' })}>
        minus
      </button>
      <button onClick={e => store.dispatch({ type: 'ZERO' })}>
        zero
      </button>
    </div>
  )
} */
export default App
