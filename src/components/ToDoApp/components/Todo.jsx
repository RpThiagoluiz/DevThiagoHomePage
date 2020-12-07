import React from 'react'

//Font awesome
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { TodoItem } from './styles'

const Todo = ({
   text,
   todo,
   todos,
   setTodos
}) => {

   const deleteBtn = () => {
      setTodos(todos.filter(el => el.id !== todo.id))
   }

   const completeBtn = () => {
      setTodos(todos.map(i => {
         if (i.id === todo.id) {
            return {
               ...i, completed: !i.completed
            }
         }
         return i
      }))
   }


   return (
      <TodoItem>
         <div className="todo">
            <li className={`todo-li ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button className="complete-btn" onClick={completeBtn}>
               <FontAwesomeIcon icon={faCheckSquare} />
            </button>
            <button className="trash-btn" onClick={deleteBtn}>
            <FontAwesomeIcon icon={faTrash} />
               </button>
         </div>
      </TodoItem>
   )
}
export default Todo