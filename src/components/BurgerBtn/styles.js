import styled from 'styled-components'


export const BurgerBtnStyles = styled.div `

   width: 2rem;
   height: 2rem;
   position: fixed;
   top: 15px;
   right: 20px;
   z-index: 20;
   
   display: flex;
   justify-content: space-around;
   flex-flow: column nowrap;
  
   > div {
      width: 2rem;
      height: 0.25rem;
      background-color: ${({ open }) => open ? '#ccc' : '#eef2ed'};
      border-radius: 10px;
      box-shadow: 8px 3px 2px #0c0c0c;
      transform-origin: 1px;
      transition: all 0.3s linear;
      &:nth-child(1) {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        
        
      }
      &:nth-child(2) {
        transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ open }) => open ? 0 : 1};
        
      }
      &:nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        
      }
  }
`