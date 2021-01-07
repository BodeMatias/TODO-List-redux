import React from "react"
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react"

const Modal = () => {
	return (
		<Modal
			blockScrollOnMount={false}
			isOpen={isOpen}
			onClose={onClose}
			isCentered
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>New description</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Input onChange={handleNewDescription} id="new-desc" />
				</ModalBody>

				<ModalFooter>
					<Button colorScheme="teal" mr={3} onClick={onClose}>
						Close
					</Button>
					<Button
						onClick={() => {
							handleOnSubmitNewDescription()
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
