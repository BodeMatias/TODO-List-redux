import { React } from "react"
import { useSelector, useDispatch } from "react-redux"
import { deleteAction } from "../../store/todo-list/actions"
import { updateFocusedElem } from "../../store/focused-element/actions"
import { openModalAction } from "../../store/modal/actions"

import {
   IconButton,
   Center,
   Divider,
   List,
   ListItem,
   Checkbox,
   Box,
} from "@chakra-ui/react"

import { DeleteIcon, EditIcon } from "@chakra-ui/icons"

const TodoList = () => {
   const dispatch = useDispatch()
   const list = useSelector((state) => state.list)

   let deleteElement = (id) => {
      dispatch(deleteAction(id))
   }

   let setFocusedElement = (id, description) => {
      dispatch(updateFocusedElem(id, description))
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
                                             setFocusedElement(
                                                elem.id,
                                                elem.description
                                             )
                                             dispatch(openModalAction())
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
