import { React, useState } from "react"
import "./list.css"
import { useSelector, useDispatch } from "react-redux"
import {
	addAction,
	modifyAction,
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

const TodoList = () => {
	const dispatch = useDispatch()
	const list = useSelector((state) => state.list)
	const id = useSelector((state) => state.global_id)
	const [form, setForm] = useState({ input: "" })
	const [focusedElement, setFocusedElement] = useState({
		id: 0,
		description: "",
	})
	const [newDescForm, setNewDescForm] = useState({
		input: "",
	})
	const { onOpen, onClose, isOpen } = useDisclosure()
	const toast = useToast()

	let addElement = (elem) => {
		dispatch(addAction(elem))
		dispatch(updateIdAction(elem.id))
	}

	let modifyElement = (id, description) => {
		dispatch(modifyAction(id, description))
	}

	let deleteElement = (id) => {
		dispatch(deleteAction(id))
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
		modifyElement(focusedElement.id, focusedElement.description)
	}

	return (
		<Box w="100%" p={4}>
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
			<Center>
				<div className="list-container">
					<List spacing={3}>
						{list.map((elem) => {
							return (
								<>
									<ListItem key={elem.id}>
										<div className="list-item">
											<div className="checkbox">
												<Checkbox size="lg" colorScheme="teal" />
											</div>
											<div className="list-content">
												{elem && elem.description}
											</div>
											<div className="btn-set">
												<div className="icon">
													<IconButton
														onClick={() => {
															setFocusedElement(elem)
															onOpen()
														}}
														colorScheme="blue"
														size="sm"
														aria-label="Edit"
														icon={<EditIcon />}
													/>
												</div>
												<div className="icon">
													<IconButton
														onClick={() => deleteElement(elem.id)}
														colorScheme="red"
														size="sm"
														aria-label="Delete"
														icon={<DeleteIcon />}
													/>
												</div>
											</div>
										</div>
									</ListItem>
									<Divider />
								</>
							)
						})}
					</List>
				</div>
			</Center>
		</Box>
	)
}
export default TodoList
