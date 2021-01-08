import { UPDATE_FOCUSED_ELEMENT } from "./constants"

let initialFocusedElemState = {
	id: 0,
	description: "",
}

let focusedElemReducer = (state = initialFocusedElemState, action) => {
	switch (action.type) {
		case UPDATE_FOCUSED_ELEMENT:
			return { id: action.id, description: action.description }
		default:
			return state
	}
}

export { focusedElemReducer }
