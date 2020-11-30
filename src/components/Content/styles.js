import styled from 'styled-components'

export const Container = styled.div `
   grid-area:CT;


   background-color: #212121;
   
   margin-top: -2.25em;
   margin-bottom: .75em;
   margin-right: .75em;
   border-radius: 5px;

   height: calc(100vh - 120px);
   overflow-y: scroll;

   display:flex;
   justify-content:center;
   flex-wrap: wrap;

   opacity: .8;
   

   padding: .75em;
   

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

   
`