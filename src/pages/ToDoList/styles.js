import styled from 'styled-components'

export const Container = styled.div `
   display:flex;
   overflow:hidden;
 
`

export const TopSide = styled.div`
   margin:-10px;

   flex:1;
`

export const Content = styled.main`
   position:absolute;
   top: calc(15vh - 10px);
   left:calc(15vw - 10px);

   width:80vw;
   height:80vh;
`