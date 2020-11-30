import styled from 'styled-components'
import bckImg from '../../assets/img/imgLandingPage/space-1951858.png'

export const Grid = styled.div`
   display: grid;
   grid-template-columns: 250px auto;
   grid-template-rows: 80px auto;

   grid-gap: .75em;


   grid-template-areas:
      'TB TB'
      'MH CT';

   height: 100vh;

   background-color: rgba(30, 31, 34, 0.75);
    
    :before {
       content: '';
       background-image: url(${bckImg});
       background-repeat: no-repeat;
       background-position: center;
       background-size: cover ;
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       z-index: -1;
       opacity: 0.9;
    }

`