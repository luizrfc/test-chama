import * as Actions from 'store/actions';

const initialState = {
		data: []
}

const userReducer = (state = initialState, action) => {
		switch (action.type) {
				case Actions.LIST_USERS:
						return {
								...state,
								data: action.payload
						}
				default:
						return {
								state
						}
		}
}

export default userReducer;
