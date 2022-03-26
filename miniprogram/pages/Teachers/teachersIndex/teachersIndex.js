// pages/Teachers/teachersIndex/teachersIndex.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isTabs:1,
  },

  handleItemTap(e){
    
    this.setData({
      isTabs:e.currentTarget.dataset.flag
    })
    console.log(e.currentTarget.dataset.flag);
  },
})