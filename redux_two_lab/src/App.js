import React from 'react';

import './App.css';
import AddTodo from './Component/AddTodo';
import TodoList from './Component/TodoList';

function App() {
  return (
    <div className="App">
<AddTodo/>
<TodoList/>
    </div>
  );
}

export default App;
