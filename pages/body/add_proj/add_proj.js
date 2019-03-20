// pages/body/add_proj/add_proj.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    proj_name:"",
    proj_firm:"",
    proj_manager:"",
  },

  proj_name:function(e){
    //项目名称
    this.setData({
      proj_name:e.detail.value
    })
  },
  proj_firm: function (e) {
    //采样单位
    this.setData({
      proj_firm: e.detail.value
    })
  },
  proj_manager: function (e) {
    //项目负责人
    this.setData({
      proj_manager: e.detail.value
    })
  },
  add_proj_done:function(){
    console.log(this.data)
    wx.showModal({
      content: '确认新建该项目吗？',
      confirmText:"确认",
      cancelText:"取消",
      success(res){
        if(res.confirm){
          // 确认新建，将新建内容上传至服务器
          // --------
          // --------
          wx.redirectTo({
            url: '../proj_view/proj_view',
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    wx.setNavigationBarTitle({
      title: '新建项目',
    })
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