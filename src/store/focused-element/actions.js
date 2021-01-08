import { UPDATE_FOCUSED_ELEMENT } from "./constants"

let updateFocusedElem = (id, description) => {
	return {
		type: UPDATE_FOCUSED_ELEMENT,
		id,
		description,
	}
}

export { updateFocusedElem }
