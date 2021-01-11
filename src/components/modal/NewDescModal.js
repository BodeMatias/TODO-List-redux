import { React, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalFooter,
   ModalBody,
   ModalCloseButton,
   useDisclosure,
} from "@chakra-ui/react"

import { updateAction } from "../../store/todo-list/actions"
import { closeModalAction } from "../../store/modal/actions"
import { Input } from "@chakra-ui/input"
import { Button } from "@chakra-ui/button"

const NewDescModal = () => {
   const focusedElement = useSelector((state) => state.focused_element)
   const openModal = useSelector((state) => state.openModal)
   const [newDescForm, setNewDescForm] = useState({
      input: "",
   })
   const dispatch = useDispatch()

   const { onClose, isOpen, onOpen } = useDisclosure()

   let handleNewDescription = (event) => {
      setNewDescForm({
         input: event.target.value,
      })
   }

   let updateElement = (id, description) => {
      dispatch(updateAction(id, description))
   }

   let handleOnSubmitNewDescription = () => {
      focusedElement.description = newDescForm.input
      updateElement(focusedElement.id, focusedElement.description, dispatch)
   }

   let closeModal = () => {
      setNewDescForm({
         input: " ",
      })
      dispatch(closeModalAction())
   }

   useEffect(() => {
      openModal && onOpen()
   }, [openModal, onOpen])

   return (
      <Modal
         blockScrollOnMount={false}
         isOpen={isOpen}
         onClose={() => {
            closeModal()
            onClose()
         }}
         isCentered
      >
         <ModalOverlay />
         <ModalContent>
            <ModalHeader>New description</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
               <Input onChange={(e) => handleNewDescription(e)} id="new-desc" />
            </ModalBody>

            <ModalFooter>
               <Button
                  colorScheme="teal"
                  mr={3}
                  onClick={() => {
                     onClose()
                     closeModal()
                  }}
               >
                  Close
               </Button>
               <Button
                  onClick={() => {
                     handleOnSubmitNewDescription()
                     closeModal()
                     onClose()
                  }}
                  colorScheme="blue"
               >
                  Save
               </Button>
            </ModalFooter>
         </ModalContent>
      </Modal>
   )
}

export default NewDescModal
