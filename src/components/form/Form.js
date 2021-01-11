import { React, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addAction } from "../../store/todo-list/actions"
import { updateIdAction } from "../../store/id/actions"
import { Button } from "@chakra-ui/button"
import { FormControl } from "@chakra-ui/form-control"
import { Input } from "@chakra-ui/input"
import { Center, useToast, CloseButton } from "@chakra-ui/react"

let addElement = (elem, dispatch) => {
   dispatch(addAction(elem))
   dispatch(updateIdAction(elem.id))
}

let handleOnChange = (setForm, event) => {
   setForm({
      input: event.target.value,
   })
}

let clearInput = (setForm) => {
   setForm({
      input: "",
   })
}

let handleOnSubmit = (id, form, dispatch, toast) => {
   let obj = {
      id,
      description: form.input,
   }

   obj.description
      ? addElement(obj, dispatch)
      : toast({
           title: "",
           description: "Cannot create empty TODO.",
           status: "warning",
           duration: 4000,
           isClosable: true,
        })
}

const Form = () => {
   const [form, setForm] = useState({ input: "" })
   const dispatch = useDispatch()
   const toast = useToast()
   const id = useSelector((state) => state.global_id)
   return (
      <>
         <Center>
            <div className="form-container">
               <FormControl>
                  <div className="form">
                     <Input
                        value={form.input}
                        onChange={(e) => handleOnChange(setForm, e)}
                        placeholder="Add new item"
                     />
                     <div className="close-btn">
                        <CloseButton onClick={() => clearInput(setForm)} />
                     </div>
                  </div>
               </FormControl>
               <Center>
                  <Button
                     onClick={() => handleOnSubmit(id, form, dispatch, toast)}
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

export default Form
