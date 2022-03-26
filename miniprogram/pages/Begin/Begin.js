// pages/Begin/Begin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  onShow:function(){
      setTimeout(function() {
        console.log('初始页面停留3s后跳转'),
        wx.reLaunch({
          url: '/pages/index/index'
        })
      }, 3000);
      
    },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})