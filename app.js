// app.js
App({
	onLaunch() {
		// 展示本地存储能力
		const logs = wx.getStorageSync('logs') || []
		logs.unshift(Date.now())
		wx.setStorageSync('logs', logs)

		// 登录，如果后端验证session过期或本地存储无openid则需要请求接口获取
		wx.login({
			success: res => {
				// 发送 res.code 到后台换取 openId, sessionKey, unionId
				wx.request({
					url: 'http://localhost:8800/app/getSession',
					data: {
						code: res.code
					},
					method: "POST",
					success: res => {
						console.log(res.data);
						wx.setStorageSync('openid', res.data.data.openid)
						wx.setStorageSync('session_key', res.data.data.session_key)
						
					}
				})
			}
		})
	},
	globalData: {}
})