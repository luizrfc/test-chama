import * as Services from 'services';

export const LIST_USERS = "[USERS] LIST USERS";

export const getListUsers = async () => {
		await Services.UserService()
				.then(result => {
						return {
								type: LIST_USERS,
								payload: result
						}
				})
				.catch(error => {
						return error;
				})
}
