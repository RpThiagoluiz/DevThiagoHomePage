import React from 'react'

import Todo from './Todo'
import {TodoUl } from './styles'

const TodoList = ({
   todos,
   setTodos,
   filteredTodos
}) => {

   
   return(
      <TodoUl>
         <ul className="todo-list">
            {filteredTodos.map(todo => (
               <Todo 
                  key={todo.id}
                  text={todo.text}
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}
               />
            ))}

         </ul>
      </TodoUl>
   )
}
export default TodoList