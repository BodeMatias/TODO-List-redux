import { UPDATE_ID } from "./constants"

let initialIdState = 1

let IdReducer = (state = initialIdState, action) => {
   switch (action.type) {
      case UPDATE_ID:
         return state + 1
      default:
         return state
   }
}

export { IdReducer }
