// pages/settings/settings.js
var avatarUrl = ""

Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		avatarUrl: "",
		birth: "未设定",
	},
	getAvatar: function (e) {
		// 将图片上传到自己的服务器，然后传给小程序页面
		wx.uploadFile({
			filePath: e.detail.avatarUrl,
			name: 'file',
			url: 'http://101.42.54.40:8800/mine/uploadAvatar',
			success(res) {
				console.log(res.data);
			}
		})
		this.setData({
			avatarUrl: e.detail.avatarUrl
		})
	},

	// 获取出生年月的回调函数
	changeBirth(e) {
		// 用户通过选择确定后将值传回给前端
		this.setData({
			birth: e.detail.value
		})
	},

	// 点击保存按钮的回调函数
	catchsubmit(e) {
		console.log(e.detail.value);
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
		// 页面加载时访问后端服务获取用户的基本信息渲染到页面上
	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom() {

	},
})