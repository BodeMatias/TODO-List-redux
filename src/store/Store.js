import { combineReducers, createStore } from "redux"
import { focusedElemReducer } from "./focused-element/reducer"
import { IdReducer } from "./id/reducer"
import { openModalReducer } from "./modal/reducer"
import { ListReducer } from "./todo-list/reducer"

let reducer = combineReducers({
   list: ListReducer,
   global_id: IdReducer,
   focused_element: focusedElemReducer,
   openModal: openModalReducer,
})

let store = createStore(reducer)

export { store }
