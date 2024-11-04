Page({
	// Page生命周期-页面加载中执行代码块
	onLoad() {
		// 使用 wx.getStorageSync 来获取存储的值
		const hasUserLogin = wx.getStorageSync("hasUserLogin");
		// console.log(hasUserLogin);

		if (hasUserLogin) {
			// 如果用户已登录，跳转到 main 页面
			wx.redirectTo({
				url: '/pages/main/main',
			});
		}
	},

	wx_login() {
		wx.getUserProfile({
			desc: '获取权限用于展示用户信息',
			success: (res) => {
				// console.log(res);
				// 设置用户登录状态为 true
				wx.setStorageSync("hasUserLogin", true);
			},
		});
	}
});