// pages/body/edit_proj/edit_proj.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    proj_name:"",
    points:[
      { index: 1, name: "p1ffffffffffff", status: '已采样'},
      { index: 2, name: "p2", status: '未采样'},
      { index: 3, name: "p3", status: '未采样'},
      { index: 4, name: "p4", status: '已采样'},
      { index: 5, name: "p5", status: '已采样'},
    ],
    hidden:true,
  },

  radioChange:function(e){
    this.setData({
      hidden:false
    })
  },

  new_point:function(){
    wx.navigateTo({
      url: '../new_point/new_point',
    })
  },
  edit_point:function(){
    wx.switchTab({
      url: '../geo/geo',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //获取项目名称
    wx.getStorage({
      key: 'proj_name',
      success: function(res) {
        that.setData({
          proj_name: res.data
        })
        wx.setNavigationBarTitle({
          title: that.data.proj_name.name,
        })
      },
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