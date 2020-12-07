import React, { useState, useEffect } from 'react'

//Components
import Form from './components/Form'
import TodoList from './components/TodoList'

import { Container } from './styles'

const ToDoApp = () => {
   const [inputText, setInputText] = useState("")
   const [todos, setTodos] = useState([])
   const [status, setStatus] = useState("all")
   const [filteredTodos, setFilteredTodos] = useState([])

   useEffect(() => {
      const getLocalTodos = () => {
         if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]))
         } else {
            let localTodo = JSON.parse(localStorage.getItem('todos', JSON.stringify(todos)))
            setTodos(localTodo)
         }
      }
      getLocalTodos()
   }, [])

   useEffect(() => {
      //Functions
      const filterHandler = () => {
        switch (status) {
          case "completed":
            setFilteredTodos(todos.filter(todo => todo.completed === true))
            break
          case "uncompleted":
            setFilteredTodos(todos.filter(todo => todo.completed === false))
            break
          default:
            setFilteredTodos(todos)
            break
        }
      }
      //save to local
      const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos))
      }
  
      filterHandler()
      saveLocalTodos()
    }, [todos, status])


   return (
      
      <Container>
         <h2>Tarefas</h2>
         <Form
            inputText={inputText}
            changeInputText={setInputText}
            todos={todos}
            adcTodos={setTodos}
            selectStatus={setStatus}
         />
         <TodoList
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
         />
      </Container>
   )
}

export default ToDoApp