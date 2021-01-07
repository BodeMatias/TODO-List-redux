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

const TodoList = () => {
	const dispatch = useDispatch()
	const list = useSelector((state) => state.list)
	const id = useSelector((state) => state.global_id)

	const [focusedElement, setFocusedElement] = useState({
		id: 0,
		description: "",
	})

	const { onOpen, onClose, isOpen } = useDisclosure()

	let deleteElement = (id) => {
		dispatch(deleteAction(id))
	}

	let updateElement = (id, description) => {
		dispatch(updateAction(id, description))
	}

	return (
		<Box w="100%" p={4}>
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
