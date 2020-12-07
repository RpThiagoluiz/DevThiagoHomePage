import styled from 'styled-components'

export const FormContainer = styled.form `
  > input,
   button {
      background: white;
      padding: 0.5rem;
      font-size: 1.75rem;
      border: none;
      border-radius: 5px;
      
   }

   > button {
      color: rgba(137,171,245,0.7);
      background: #f7fffe;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover{
         background: rgba(137,171,245,0.7);
         color: white;
      }
   }

   

   .todo-button {
      margin-left: 2px;
      background-color:transparent;
      
   }

   .todo-clear {
      position:absolute;
      top: 10px;
      right: -5vw;

      background: rgba(137,171,245,0.7);
      color: white;

      &:hover {
         background:#FE1F14;
         color:#FFD700;
      }
   }

   select {
      //reset
      background-color: transparent;
      border: none;
      padding: 0 1em 0 0;
      margin: 0;
      width: 100%;
      font-family: inherit;
      font-size: inherit;
      cursor: inherit;
      line-height: inherit;
      color:rgba(137,171,245,0.7)
   }

   .select {
      margin-top: 5px;
      width: 180px;
      
      border-radius: 5px;
      padding: 0.25em 0.5em;
      font-size: 1.25rem;
      cursor: pointer;
      line-height: 1.1;
      

      background-color: #fff;
      
      
   }

`

export const TodoUl = styled.div `
   

   width: 80%;
   height: 40%;

   overflow-y: scroll;

   ::-webkit-scrollbar{
      width: 12px;
      
   }

   ::-webkit-scrollbar-thumb {
      background-color: rgba(245,247,252,1);
      border-radius:5px;
   }

   ::-webkit-scrollbar-track {
      background-color: rgba(137,171,245,0.37);
      border-radius: 15px;
   }

  

`

export const TodoItem = styled.div `
   
   margin: 0.5rem;
   background: white;
   font-size: 1.8rem;
   padding: .5em;
   color: black;
   list-style:none;

   display: flex;
   justify-content: space-between;
   align-items: center;
   
   border-radius:5px;

   
   transition: all 1s ease;

   button {
      background: #f7fffe;
      color: rgba(137,171,245,0.7);
      padding: .5rem;
      font-size: 1.75rem;
      border: none;
      border-radius: 5px;
 
      cursor: pointer;
      transition: all 0.3s ease;

      
      
   }

   .complete-btn{
      &:hover{
         background:#339900;
         color:#f7fffe;
      }
   }
   .trash-btn{
      &:hover{
         background:#cc3300;
         color:#ffcc00;
      }
   }

   .completed {
      text-decoration: line-through;
      opacity: .4;
      background-color:#339900;
   }

`