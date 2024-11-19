// pages/main/main.js
var images_list;

Page({
	data: {
    images_list: [],
    currentTab: 0
  },
  onTabClick: function (e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      currentTab: index
    });
  },
	onLoad(e) {
		wx.request({
			// url: 'http://localhost:8080/getImages',
			url: 'https://www.baidu.com',
			success: (res) => {
				this.setData({
					// images_list: res.data,
					images_list: [
						"https://imgapi.jinghuashang.cn/random",
						"https://imgapi.jinghuashang.cn/random",
						"https://imgapi.jinghuashang.cn/random"
					]
				})
			},
			fail(e) {
				console.log(e);
			},
		})
	}
})