import fetch from '../fetch'


export function login(data) {
	return fetch.request({
		url: '/wechat-miniapp/login',
		method: 'post',
		data,
	})
}
