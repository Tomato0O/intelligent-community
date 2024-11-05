// pages/mine/mine.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		nickName: "",
		avatarUrl: ""
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