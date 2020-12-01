import styled from 'styled-components'

export const Container = styled.div `
   
   position:absolute;
   top: 50px;
   left: 250px;

   width: 70vw;
   height: 90vh;
   background-color:white;


   

   display: grid;
   grid-template-columns: 250px auto;
   grid-template-rows: 80px auto;

   grid-gap: .25em;


   grid-template-areas:
      'SL TP'
      'SL CN';
`
export const SideLeftBar = styled.div`
   grid-area:SL;
   background-color: #0093E9;
   background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);


   overflow-y: scroll;

   > h4 {
      text-align:center;
      margin: 0.75em;
      color: #f0f0f0;
   }

   > form {
      > label {
         margin: 0.75em;
         padding: 0.35em;

         display:flex;
         align-items:center;
         flex-direction:column;

         > input{
            width: 80%;
            height:25px;

            text-align:center;
            
            border-radius: 5px;

         }

            

         > button {
            width:48px;
            height:24px;
            margin-top: 0.5em;
            background-color: #f0f0f0;
            color: #0093E9;
            

            border-radius: 5px;
            box-shadow:2px 2px 12px #0f0f0f;

            transition: all .4s ease-in;
            
            &:hover{
               background-color: #0093E9;
               color: #f0f0f0;

            }
         }
      }
   }


   ::-webkit-scrollbar{
      width: 12px;
      
   }
   
   ::-webkit-scrollbar-thumb {
      background-color: #0093F1;
      border-radius:5px;
   }

   ::-webkit-scrollbar-track {
      background-color: #80D0E9;
      border-radius: 5px;
   }

`

export const TopBarIn = styled.div`
   grid-area: TP;
   background-color: #f0f0f0;

   
   
   > ul {
      display: flex;
      justify-content:space-around;
      align-items: center;

  
      margin: 25px auto;
      list-style:none;

      > h3 {
         
      }

      :nth-child(1){
         margin-left: 8vw;
      }
   }

   

`

export const Content = styled.div`
   grid-area: CN;
   background-color: #f0f0f0;

   display:flex;
   flex-direction:column;
   justify-content:space-around;
   align-items:center;

   overflow: hidden;
   
`