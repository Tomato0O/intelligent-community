// pages/gate/gate.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		qrcodeUrl: ""
	},

	onLoad(options) {
		wx.request({
			url: 'http://localhost:8080/gate/getQrCodeUrl',
			method: 'POST',
			data: {
				d: '123'
			},
			success: (res) => {
				console.log(res);

				this.setData({
					qrcodeUrl: res.data
				})
			}
		})
	},

	onShow() {

	},
	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh() {
		console.log("123")
	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom() {

	},
})