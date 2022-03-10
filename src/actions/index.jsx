// defining over all actions of our app
// 1 addTodo
// 2 deleteTodo
// 3 removeTodo
export const addTodo = (data)=>{
    return {
        type:"ADD_TODO",
        // payload is just like argument pass to a function parameter named action
        payload:{
        id: new Date().getTime().toString(),//random id generated 
        data:data    
        }
    }
}
export const deleteTodo = (id)=>{
    return {
        type:"DELETE_TODO", 
        id

    }
}
export const removeTodo = ()=>{
    return {
        type:"REMOVE_TODO"
    }
}