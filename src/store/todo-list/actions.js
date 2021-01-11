import { ADD, DELETE, UPDATE } from "./constants"

let addAction = (item) => {
   return {
      type: ADD,
      item,
   }
}

let deleteAction = (id) => {
   return {
      type: DELETE,
      id,
   }
}

let updateAction = (id, description) => {
   return {
      type: UPDATE,
      id,
      description,
   }
}

export { addAction, deleteAction, updateAction }
