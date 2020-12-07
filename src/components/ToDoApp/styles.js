import styled from 'styled-components'

export const Container = styled.div`
   background-image: radial-gradient( circle 993px at 0.5% 50.5%,  rgba(245,247,252,1)  45%, rgba(137,171,245,0.37) 100.2% );

   width: 100%;
   height:100%;

   display: flex;
   justify-content: space-around;
   align-items: center;
   flex-direction:column;

   border-radius: 12px;

   > h2 { 
      text-align: center;
      padding-top: 1.5em;
      text-transform:uppercase;
      letter-spacing: .25em;
      color: rgba(137,171,245,0.9);
      font-size: 2em;
      font-weight:bold;
   }

`