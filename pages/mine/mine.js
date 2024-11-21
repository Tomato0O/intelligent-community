// pages/mine/mine.js
Page({
	goToSomePages: function (event) {
		const pagePath = event.currentTarget.dataset.pagepath;
		wx.navigateTo({
			url: pagePath
		});
	},
	service() {
		wx.navigateTo({
			url: '/pages/service/service',
		})
	},
	/**
	 * 页面的初始数据
	 */
	data: {
		nickName: "",
		avatarUrl: "",
		// 中间的【物业服务】模块
		serviceItemsList: [{
				// tapMethod:点击模块后跳转到什么方法
				// "tapMethod": "pending",
				"tapMethod": "service",
				"iconPath": "/images/mine/searching.svg",
				"serviceName": "待处理"
			},
			{
				"tapMethod": "service",
				"iconPath": "/images/mine/restart.svg",
				"serviceName": "处理中"
			},
			{
				"tapMethod": "service",
				"iconPath": "/images/mine/checked.svg",
				"serviceName": "已完成"
			},
			{
				"tapMethod": "service",
				"iconPath": "/images/mine/documents.svg",
				"serviceName": "全部"
			},
		],
		moreServicesList: [{
				"iconPath": "/images/mine/messaging.svg",
				"serviceName": "我的消息"
			},
			// {
			// 	"iconPath": "/images/mine/ideal.svg",
			// 	"serviceName": "问题上报"
			// },
			{
				"iconPath": "/images/mine/menu.svg",
				"serviceName": "信息公示"
			},
			{
				"iconPath": "/images/mine/clock.svg",
				"serviceName": "场地预约"
			},
			{
				"iconPath": "/images/mine/mailbox.svg",
				"serviceName": "社区活动"
			},
			{
				"iconPath": "/images/mine/female.svg",
				// 例如保洁、开锁等便民服务
				"serviceName": "社区服务"
			},
			{
				"iconPath": "/images/mine/sharing.svg",
				"serviceName": "互助交流",
				"pagePath": "/pages/sharing/sharing"
			},
			{
				"iconPath": "/images/mine/setting.svg",
				"serviceName": "个人设置",
				"pagePath": "/pages/settings/settings"
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