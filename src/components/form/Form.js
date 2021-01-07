import { React, useState } from "react"
import "./list.css"
import { useSelector, useDispatch } from "react-redux"
import {
	addAction,
	updateAction,
	deleteAction,
	updateIdAction,
} from "../../store/Store"

import { Button } from "@chakra-ui/button"
import { FormControl } from "@chakra-ui/form-control"
import { Input } from "@chakra-ui/input"
import {
	IconButton,
	Center,
	Divider,
	List,
	ListItem,
	Checkbox,
	Box,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useToast,
	CloseButton,
} from "@chakra-ui/react"

import { DeleteIcon, EditIcon } from "@chakra-ui/icons"

let addElement = (elem) => {
	dispatch(addAction(elem))
	dispatch(updateIdAction(elem.id))
}

let handleOnChange = (event) => {
	setForm({
		input: event.target.value,
	})
}

let clearInput = () => {
	setForm({
		input: "",
	})
}

let handleOnSubmit = () => {
	let obj = {
		id,
		description: form.input,
	}

	obj.description
		? addElement(obj)
		: toast({
				title: "",
				description: "Cannot create empty TODO.",
				status: "warning",
				duration: 4000,
				isClosable: true,
		  })
}

let handleNewDescription = (event) => {
	setNewDescForm({
		input: event.target.value,
	})
}

let handleOnSubmitNewDescription = () => {
	focusedElement.description = newDescForm.input
	updateElement(focusedElement.id, focusedElement.description)
}

const Form = () => {
	const [newDescForm, setNewDescForm] = useState({
		input: "",
	})
	const [form, setForm] = useState({ input: "" })
	const { onClose, isOpen } = useDisclosure()
	const toast = useToast()

	return (
		<>
			<Center>
				<div className="form-container">
					<FormControl>
						<div className="form">
							<Input
								value={form.input}
								onChange={handleOnChange}
								id="input-item"
								placeholder="Add new item"
							/>
							<div className="close-btn">
								<CloseButton onClick={clearInput} />
							</div>
						</div>
					</FormControl>
					<Center>
						<Button
							onClick={() => handleOnSubmit()}
							mt={4}
							colorScheme="teal"
							type="submit"
						>
							Submit
						</Button>
					</Center>
				</div>
			</Center>
		</>
	)
}
