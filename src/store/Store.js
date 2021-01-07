import { combineReducers, createStore } from "redux"

//list store

let initialListState = []

const ADD = "ADD"
const DELETE = "DELETE"
const MODIFY = "MODIFY"

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

let modifyAction = (id, description) => {
	return {
		type: MODIFY,
		id,
		description,
	}
}

let ListReducer = (state = initialListState, action) => {
	switch (action.type) {
		case ADD:
			return [...state, action.item]
		case DELETE:
			return state.filter(({ id }) => id !== action.id)
		case MODIFY:
			return state.map((item) =>
				item.id === action.id
					? { id: item.id, description: action.description }
					: item
			)
		default:
			return state
	}
}

//id store

let initialIdState = 1

const UPDATE_ID = "UPDATE_ID"

let updateIdAction = (id) => {
	return {
		type: UPDATE_ID,
		id,
	}
}

let IdReducer = (state = initialIdState, action) => {
	switch (action.type) {
		case UPDATE_ID:
			return state + 1
		default:
			return state
	}
}

let reducer = combineReducers({
	list: ListReducer,
	global_id: IdReducer,
})

let store = createStore(reducer)

export { addAction, modifyAction, deleteAction, updateIdAction, store }
