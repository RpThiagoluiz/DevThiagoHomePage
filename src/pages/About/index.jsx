import React from 'react'

import DescriptionBTn from '../../components/DescriptionBTN'


import TopBar from '../../components/TopBar'

export default function About() {
   

   return (
      <>
         <TopBar LeftTitle={<h3>Hi,Lorena!</h3>}/>
         <h1>Hello</h1>


         <DescriptionBTn
            title="Hello"
            description="deu certo!!!!"
         
         />

         
      </>
   )
}