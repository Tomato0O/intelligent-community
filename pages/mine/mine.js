// pages/mine/mine.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		nickName: "",
		avatarUrl: "",
		// 中间的【物业服务】模块
		serviceItemsList: [{
				// tapMethod:点击模块后跳转到什么方法
				"tapMethod": "pending",
				"iconPath": "/images/mine/searching.svg",
				"serviceName": "待处理"
			},
			{
				"tapMethod": "",
				"iconPath": "/images/mine/restart.svg",
				"serviceName": "处理中"
			},
			{
				"tapMethod": "",
				"iconPath": "/images/mine/checked.svg",
				"serviceName": "已完成"
			},
			{
				"tapMethod": "",
				"iconPath": "/images/mine/documents.svg",
				"serviceName": "全部"
			},
		],
		moreServicesList: [{
				"iconPath": "/images/mine/messaging.svg",
				"serviceName": "我的消息"
			},
			{
				"iconPath": "/images/mine/ideal.svg",
				"serviceName": "问题上报"
			},
			{
				"iconPath": "/images/mine/checked.svg",
				"serviceName": "已完成"
			},
			{
				"iconPath": "/images/mine/checked.svg",
				"serviceName": "已完成"
			},
			{
				"iconPath": "/images/mine/checked.svg",
				"serviceName": "已完成"
			},
			{
				"iconPath": "/images/mine/checked.svg",
				"serviceName": "已完成"
			},
			{
				"iconPath": "/images/mine/checked.svg",
				"serviceName": "已完成"
			},
			{
				"iconPath": "/images/mine/setting.svg",
				"serviceName": "个人设置"
			},
		]
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
	},
})