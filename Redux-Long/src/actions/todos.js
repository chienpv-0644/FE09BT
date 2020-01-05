export function deleteTodos(idTodo){
    return {
        type: "DELETE_TODO",
        idTodo
    }
}
export function addTodo(text) {
    return { 
        type: "ADD_TODO",
        text
    }
}
export function editTodo(id) {
    return {
        type: "EDIT_TODO",
        id
    }
}