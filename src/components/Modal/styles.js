import styled from 'styled-components'

export const Container = styled.div `
   .modal {
      width: 100%;
      height: 100%;

      position:absolute;
      top:0;
      left:0;

      z-index: 9;
      background-color: rgba(0,0,0, 0.8);

      display:flex;
      justify-content:center;
      align-items: center;
   }

   .container {
      background-color: #fff;
      color: #000;

      width: 60%;
      height: 60%;

      border-radius: 20px;
   }

   .content {

      > h1 {
         text-align:center;
         text-transform: uppercase;
         letter-spacing: 2px;
      }

      > p {
         margin: 1.5em;
      }

   }

   .close {
      cursor:pointer;
      background-color: transparent;
      border:none;
      outline:none;

      width:32px;
      height:32px;

      display:flex;
      align-items:center;
      position: relative;
      right: calc(-100% + 64px);
      top: 16px;



      &:before,
      &:after {
         content:' ';
         position: absolute;
         width: 2.75px;
         height: 24px;
         background-color: #000;
         

      }

      &:before{
         transform:rotate(45deg);
      }

      &:after{
         transform:rotate(-45deg);
      }

      


      
   }
    





`