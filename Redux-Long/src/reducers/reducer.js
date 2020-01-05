const stateDefault = {
    todos : [
    {id: 1, name: "Hoc HTML"},
    {id: 2, name: "Hoc CSS"},
    {id: 3, name: "Hoc JS"},
    {id: 4, name: "Hoc React"},
    {id: 5, name: "Hoc Redux"}
    ],
    input: ''
}
export function reducer(state=stateDefault, action){
    let todos = [...state.todos];
    switch(action.type){
        case "DELETE_TODO":
            let index = todos.findIndex((item)=> item.id == action.idTodo)
            todos.splice(index, 1);
            return {
                ...state,
                todos: [...todos]
            }
        case "ADD_TODO":
            const length = state.todos.length + 1
            const todo = {id: length, name: action.text }
            if(state.input){
                const newTodos = state.todos.map(todo => todo.id === state.input.id ? {id: todo.id, name: action.text} : todo)
                return {
                    todos: [...newTodos],  
                    input: ''
                }                
            }
            else return {
                todos: [...state.todos, todo],
                input: ''
            }            
        case "EDIT_TODO":
            let idx = todos.findIndex((item)=> item.id == action.id)
            const picked = todos.splice(idx, 1);
            return {
                ...state,
                input: picked[0]
            }
        default:
            return state;
    }
}