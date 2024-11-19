// pages/service/service.js
Page({
  data: {
    searchTerm: '', // 存储搜索框的输入值
    // 模拟的订单列表数据，实际中可从接口获取
    orderList: [{
        orderId: 1,
        orderNumber: "20241114001",
        orderTime: "2024-11-14 10:00:00",
        orderStatus: "待支付",
        goodsName: "商品A",
        goodsQuantity: 2
      },
      {
        orderId: 2,
        orderNumber: "20241114002",
        orderTime: "2024-11-14 11:30:00",
        orderStatus: "已发货",
        goodsName: "商品B",
        goodsQuantity: 1
      }
    ]
  },
  // 根据订单状态返回对应的文字显示
  getStatusText(status) {
    switch (status) {
      case "待支付":
        return "等待付款";
      case "已支付":
        return "已付款，等待发货";
      case "已发货":
        return "已发货，运输中";
      case "已完成":
        return "交易已完成";
      case "已取消":
        return "订单已取消";
      default:
        return status;
    }
  },
  // 跳转到订单详情页面，这里只是示例，需配置对应的路由页面
  goToOrderDetail(event) {
    const orderId = event.currentTarget.dataset.order - id;
    wx.navigateTo({
      url: `/pages/order-detail/order-detail?orderId=${orderId}`
    });
  },
  // 取消订单的逻辑，实际中需调用接口通知后端处理
  cancelOrder(event) {
    const orderId = event.currentTarget.dataset.order - id;
    console.log(`执行取消订单操作，订单号：${orderId}`);
    // 这里可以添加请求后端接口取消订单的代码，比如使用wx.request等
    // 成功取消后更新页面数据
    this.updateOrderListAfterCancel(orderId);
  },
  // 确认收货的逻辑，同样需调用后端接口
  confirmReceipt(event) {
    const orderId = event.currentTarget.dataset.order - id;
    console.log(`执行确认收货操作，订单号：${orderId}`);
    // 调用后端接口确认收货的代码添加在此处
    // 成功后更新页面数据
    this.updateOrderListAfterConfirm(orderId);
  },
  // 模拟取消订单后更新订单列表数据的函数，实际要根据后端返回结果更新
  updateOrderListAfterCancel(orderId) {
    const newOrderList = this.data.orderList.map(order => {
      if (order.orderId === orderId) {
        order.orderStatus = "已取消";
      }
      return order;
    });
    this.setData({
      orderList: newOrderList
    });
  },
  // 模拟确认收货后更新订单列表数据的函数
  updateOrderListAfterConfirm(orderId) {
    const newOrderList = this.data.orderList.map(order => {
      if (order.orderId === orderId) {
        order.orderStatus = "已完成";
      }
      return order;
    });
    this.setData({
      orderList: newOrderList
    });
  },
  // 搜索框输入事件
  onSearchInput: function (event) {
    this.setData({
      searchTerm: event.detail.value // 更新输入框的值
    });
  },

  // 点击搜索按钮
  onSearchClick: function () {
    const searchTerm = this.data.searchTerm;
    wx.showToast({
      title: '搜索的内容是：' + searchTerm,
      icon: 'none',
      duration: 2000
    });
    // 你可以在这里添加实际的搜索逻辑
  }
})