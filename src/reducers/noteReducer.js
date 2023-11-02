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
    }
]
const notereducer = (state = initialState, action) => {
    console.log('ACTION: of note', action)
    if (action.type == 'NEW_NOTE') {
        // return state.concat(action.payload)
        return [...state, action.payload]
    } else if (action.type == 'TOGGLE_IMPORTANCE') {
        console.log('gftdd');
        const noteToChange = state.find(n => n.id == action.payload.id)
        const changedNote = {
            ...noteToChange, important: !noteToChange.important
        }
        return state.map(note =>
            note.id != action.payload.id ? note : changedNote
        )
    }
    console.log('final array ', state);
    return state
}
const generateId = () => {
    return Number((Math.random() * 100000).toFixed(0))
}
export const createNote = (content) => {
    return {
        type: 'NEW_NOTE',
        payload: {
            content: content,
            important: false,
            id: generateId()
        }
    }
}
export const toggleImportanceOf = (id) => {
    return {
        type: 'TOGGLE_IMPORTANCE',
        payload: { id }
    }
}
export default notereducer