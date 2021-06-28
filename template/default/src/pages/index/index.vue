<template>
	<view>
		<tui-button open-type="getUserInfo" @getuserinfo="login">登陆</tui-button>
		<tui-button @click="loadUserInfo">获取用户信息</tui-button>
	</view>
</template>

<script>
import {login} from '@/service/login';
import {userinfo} from '@/service/auth.js'
export default {
	data() {
		return {
			appid: process.uniEnv.APPID,
			title: 'Hello'
		};
	},
	onLoad() {},
	methods: {
		login(e) {	
			const that = this;
			uni.login({
				success(res) {
					login({
							code: res.code,
							phone: '18574481219',
							appid: that.appid
						})
						.then(res => {
							if(res){
								uni.setStorageSync('token',res.data.token)
								uni.showToast({
									title:'登陆成功',
									icon:'none'
								})
							}
						});
				}
			});
		},
		loadUserInfo(){
			userinfo().then(res=>{
				console.log(res)
			})
		}
	}
};
</script>

<style></style>
