const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const SET_COUNTER = 'todos/SET_COUNTER'

export const addTodo = (text, count) => ({
    type: ADD_TODO,
    todo: {
        id: text.id,
        name: text.name,
        unitName: text.unitName,
        unitPrice: text.unitPrice,
        count: count
    },
});
export const toggleTodo = (name) => ({
    type: TOGGLE_TODO,
    name
});

export const setCounter = (diff, name) => ({
    type: SET_COUNTER,
    diff,
    name
})

const initialState = [];

export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            const exists = state.find(item => item.id === action.todo.id);
            const idxTodo = state.findIndex(item => item.id === action.todo.id);
            if(!exists) {
                return state.concat(action.todo)
            }
            if(exists){
                state[idxTodo].count = state[idxTodo].count + 1;
                return state.map(v => v);
            }
        case TOGGLE_TODO:
            const idxTogle = state.findIndex(item => item.name === action.name);
            state.splice(idxTogle, 1)
            return state.map(v => v);
        case SET_COUNTER:
            const idxDiff = state.findIndex(item => item.name === action.name);
            state[idxDiff].count = action.diff
            return state.map(v => v);
        default:
            return state;
    }
}