import http from '../request/interface'

http.interceptor.request = (request) => {
	return request;
}

http.interceptor.response = (response) => {
	const data = response.data
	if(response.statusCode===200){
		switch (data.code){
			case 400:
				uni.showToast({
					title: data.message,
					icon:'none'
				})
				break;
			case 401:
				uni.showModal({
					title:'提示',
					content:'尚未登陆',
					showCancel:false,
					complete() {
						uni.navigateTo({
							url:'/pages/login/login'
						})
					}
				})
				break;
			case 403:
				uni.showToast({
					title:'权限不足',
					icon:'none'
				})
				break;
			case 500:
				uni.showToast({
					title:'系统异常',
					icon:'none'
				})
		}
	}else{
		uni.showToast({
			icon:'none',
			title:'系统异常'
		})
	}
	return response;
}

export default http