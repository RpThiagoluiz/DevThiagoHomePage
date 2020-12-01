import styled from 'styled-components'

export const Container = styled.div `

   

   > img{
      position: absolute;
      top: 250px;
      left: 20px;

      width: 56px;
      height: 56px;

      display: table;
      animation: pulse 1.2s infinite;
      animation-direction: alternate;
      -webkit-animation-name: pulse;
      animation-name: pulse;

         &:hover{
            -webkit-animation: none;
            width: 64px;
            height: 64px;
         }

      

         @-webkit-keyframes pulse {
            0% {
               -webkit-transform: scale(1);
               -webkit-filter: brightness(20%);
            }
            50%{
               -webkit-transform: scale(1.1);
               -webkit-filter: brightness(100%);
            }
            100% {
               -webkit-transform: scale(1.2);
               -webkit-filter: brightness(200%);
            }
         }

         @keyframes pulse {
            0% {
               transform: scale(1);
               filter: brightness(100%);
            }
            100% {
               transform: scale(1.3);
               filter: brightness(150%);
            }
         }
   }
   
`



