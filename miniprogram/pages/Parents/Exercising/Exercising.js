// pages/Parents/Exercising/Exercising.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //暂停和开始按钮的切换，计时器运行时值为0，暂停时值为1
    stopButton:0,
  },
  handleItemTap(e){
    
    this.setData({
      stopButton:e.currentTarget.dataset.flag
    })
    console.log(e.currentTarget.dataset.flag);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})