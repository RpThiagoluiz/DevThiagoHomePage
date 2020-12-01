import React,{useState, useMemo} from 'react'

import { 
   Container,
   Content,
   SideLeftBar,
   TopBarIn
} from './styles'


const ProjectInteractive = ({
   //top bar
   topTitle,

}) => {

   const [yourName, setYourName] = useState()

   const [colorTopBar, setColorTopBar] =useState()


   return(
      <Container>

         <SideLeftBar>

            <h4>Top Bar</h4>
            <form>

               <label>
                  <input
                     type="text"
                     placeholder="SeuNome"
                  />
                  
                  <button>Enviar</button>
               </label>

               <label>
                  <input
                     type="text"
                     placeholder="home"
                  />
                  
                  <button>Enviar</button>
               </label>

               <label>
                  <input
                     type="text"
                     placeholder="link"
                  />
                  
                  <button>Enviar</button>
               </label>

               <label>
                  <input
                     type="text"
                     placeholder="Cor da fonte"
                  
                  />
                  
                  <button>Enviar</button>
               </label>

               <label>
                  <input
                     type="text"
                     placeholder="Cor de fundo"
                  
                  />
                  
                  <button>Enviar</button>
               </label>
            </form>



            <h4>Conteudo</h4>
            <form>
               <label>
                  <input
                     type="text"
                     placeholder="titulo"
                  />
                  
                  <button>Enviar</button>
               </label>
               <label>
                  <input
                     type="text"
                     placeholder="Paragrafo"
                  />
                  
                  <button>Enviar</button>
               </label>
               <label>
                  <input
                     type="text"
                     placeholder="footer"
                  />
                  
                  <button>Enviar</button>
               </label>
               <label>
                  <input
                     type="text"
                     placeholder="cor de fundo"
                  />
                  
                  <button>Enviar</button>
               </label>
            </form>

            

         </SideLeftBar>
         <TopBarIn>

            <ul>
               <h3>SeuNome</h3>
               <li>Home</li>
               <li>Links</li>
            </ul>
            
         </TopBarIn>
         <Content>
            <h1>Titulo</h1>
            <p>Qlq coisa</p>
            <small>footer</small>
         </Content>


      </Container>
   )
}

export default ProjectInteractive