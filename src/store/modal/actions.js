import { OPEN_MODAL, CLOSE_MODAL } from "./constants"

let openModalAction = () => {
	return {
		type: OPEN_MODAL,
	}
}
let closeModalAction = () => {
	return {
		type: CLOSE_MODAL,
	}
}

export { openModalAction, closeModalAction }
