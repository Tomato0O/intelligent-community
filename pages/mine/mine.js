// pages/mine/mine.js
Page({
	msg(){
		console.log(1);
	},
	/**
	 * 页面的初始数据
	 */
	data: {
		nickName: "",
		avatarUrl: "",
		middlewareList: [{
			// 在线svg图标库：https://iconpark.oceanengine.com/official，测试页面布局用
			"iconUrl": "/images/mine/mail.svg",
			"text": "我的消息",
			"tap":"msg"
		}, {
			"iconUrl": "/images/mine/setting.svg",
			"text": "个人资料"
		}, {
			"iconUrl": "/images/mine/edit.svg",
			"text": "个人资料"
		}, {
			"iconUrl": "/images/mine/documents.svg",
			"text": "jqk"
		}, {
			"iconUrl": "/images/mine/check.svg",
			"text": "check"
		}, {
			"iconUrl": "/images/mine/aiming.svg",
			"text": "jqk"
		}, ],
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
		// 获取登录用户的昵称、头像url的信息
		var userInfo = wx.getStorageSync('userInfo')
		this.setData({
			nickName: userInfo.nickName,
			avatarUrl: userInfo.avatarUrl
		})
		// console.log(userInfo);
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload() {

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

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage() {

	}
})