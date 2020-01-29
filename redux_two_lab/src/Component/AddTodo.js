import React from "react";
import {connect} from 'react-redux'
import Add_Todo from '../store/Reducers/AddTodo'

const AddTodo = () => {






  return (
    <div>
      <form>
        <input
          type="text"
          name="todoItem
"
        ></input>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};


const mapStateToProps = (state) =>{
    return(
        state
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        
        dispatch({
            type: ADD_TODO, 
            payload: todo.payload
        })

    }
}






export default connect()(AddTodo);
