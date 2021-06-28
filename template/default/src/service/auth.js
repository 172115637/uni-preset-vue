import fetch from '../fetch'

export function userinfo(data) {
		return fetch.request({
			url: '/auth/userinfo',
			method: 'get',
			data,
		})
	}

