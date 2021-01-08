import { UPDATE_ID } from "./constants"

let updateIdAction = (id) => {
	return {
		type: UPDATE_ID,
		id,
	}
}

export { updateIdAction }
