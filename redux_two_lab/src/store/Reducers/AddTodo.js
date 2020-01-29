

const initalState= 
   {todo = {
       id: 0, 
       text: '',
       completed: 'false'
   }
}


   

const Add_Todo = (state = initalState, action) => {

    const newState = { ... state}

    switch(action.type){
        case ADD_TODO:
        newState.todo = todo.payload
        break;

        default: 
        break; 
    }

    return newState;

}

export default Add_Todo;