import styled from 'styled-components'

export const Grid = styled.div`
   display: grid;
   grid-template-columns: 250px auto;
   grid-template-rows: 80px auto;

   grid-gap: .75em;


   grid-template-areas:
      'TB TB'
      'MH CT';

   height: 100vh;

`