import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');


   * {
      padding: 0;
      margin: 0;
      box-sizing:border-box;
      font-family: 'Roboto', sans-serif;
   }

   html,body,#root {
      height: 100%;
      overflow-y:hidden;

   ::-webkit-scrollbar{
      width: 12px;
      
   }

   ::-webkit-scrollbar-thumb {
      background-color: #0f0f0f;
      border-radius:5px;
   }

   ::-webkit-scrollbar-track {
      background-color: #3d3d3d;
      border-radius: 15px;
   }
   }

   *,button,input{
      border:0;
      outline:0;
      
   }

   button {
      cursor: pointer;
   }

`;
