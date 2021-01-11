import { React, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addAction } from "../../store/todo-list/actions"
import { updateIdAction } from "../../store/id/actions"
import { Button } from "@chakra-ui/button"
import { FormControl } from "@chakra-ui/form-control"
import { Input } from "@chakra-ui/input"
import { Center, useToast, CloseButton } from "@chakra-ui/react"

const Form = () => {
   const [form, setForm] = useState({ input: "" })
   const dispatch = useDispatch()
   const toast = useToast()
   const id = useSelector((state) => state.global_id)

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
         ? addElement(obj, dispatch)
         : toast({
              title: "",
              description: "Cannot create empty TODO.",
              status: "warning",
              duration: 4000,
              isClosable: true,
           })
   }

   return (
      <>
         <Center>
            <div className="form-container">
               <FormControl>
                  <div className="form">
                     <Input
                        value={form.input}
                        onChange={(e) => handleOnChange(e)}
                        placeholder="Add new item"
                     />
                     <div className="close-btn">
                        <CloseButton onClick={() => clearInput()} />
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

export default Form
