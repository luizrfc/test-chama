import axios from 'axios';

const usersService = {};

usersService.modal = {
		login: "",
		id: 1,
		node_id: "",
		avatar_url: "",
		gravatar_id: "",
		url: "",
		html_url: "",
		followers_url: "",
		following_url: "",
		gists_url: "",
		starred_url: "",
		subscriptions_url: "",
		organizations_url: "",
		repos_url: "",
		events_url: "",
		received_events_url: "",
		type: "",
		site_admin: false
}

usersService.getFirstList = async () => {
		await axios.get('')
				.then(result => {
						return {data: result, error: false}
				})
				.catch(err => {
						console.log('error', err)
						return {data: null, error: true, msg: err}
				})
}

usersService.findUserByLogin = async (login = "") => {
		await axios.get(`/${login}`)
				.then(result => {
						return {data: result, error: false}
				})
				.catch(err => {
						console.log('error', err)
						return {data: null, error: true, msg: err}
				})
}

export default usersService;
