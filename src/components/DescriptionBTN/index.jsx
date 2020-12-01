import React,{useState} from 'react'
import Modal from '../Modal'

import { Container } from './styles'

import icon from '../../assets/img/freeIcons/duvida.png'

const DescriptionBTn = ({
   title, 
   description
}) => {
   const [modalVisible, setModalVisible] = useState(true)

   return(
      <Container>
         <img src={icon} onClick={_ => setModalVisible(true)}/>
         {modalVisible ? (
            <Modal
               onClose={_ => { setModalVisible(false) }}
            >
               <h1>{title}</h1>
               <p>{description}</p>
            </Modal>
         ) : null}
      </Container>
   )
}

export default DescriptionBTn