import { ADD, DELETE, UPDATE } from "./constants"

let initialListState = []

let ListReducer = (state = initialListState, action) => {
   switch (action.type) {
      case ADD:
         return [...state, action.item]
      case DELETE:
         return state.filter(({ id }) => id !== action.id)
      case UPDATE:
         return state.map((item) =>
            item.id === action.id
               ? { id: item.id, description: action.description }
               : item
         )
      default:
         return state
   }
}

export { ListReducer }
