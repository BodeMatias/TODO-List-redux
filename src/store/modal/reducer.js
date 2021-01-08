import { OPEN_MODAL, CLOSE_MODAL } from "./constants"

let initialModelState = false

let openModalReducer = (state = initialModelState, action) => {
	switch (action.type) {
		case OPEN_MODAL:
			return true
		case CLOSE_MODAL:
			return false
		default:
			return state
	}
}

export { openModalReducer }
