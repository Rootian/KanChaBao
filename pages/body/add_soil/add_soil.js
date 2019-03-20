// pages/body/add_soil/add_soil.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    photo:'',
    depth:'',
    id:'',
    smell:'',
    standard:'',
    pid:'',
    xrf:''
  },

  addPhoto: function () {
    var that = this
    wx.chooseImage({
      count: 1,
      sourceType: ['camera'],
      success: function (res) {
        that.setData({
          photo: res.tempFilePaths
        })
      },
    })
  },

  idepth: function (e) {
    this.setData({
      idepth: e.detail.value
    })
  },
  iid: function (e) {
    this.setData({
      id: e.detail.value
    })
  },
  ismell: function (e) {
    this.setData({
      smell: e.detail.value
    })
  },
  ipid: function (e) {
    this.setData({
      pid: e.detail.value
    })
  },
  ixrf: function (e) {
    this.setData({
      xrf: e.detail.value
    })
  },
  istandard: function (e) {
    this.setData({
      standard: e.detail.value
    })
  },

  quit_page: function () {
    //放弃
    wx.switchTab({
      url: '../soil/soil',
    })
  },
  save_page: function () {
    //保存入数据库
    // 
    // 
    // 
    // console.log(this.data)
    app.globalData.s_id = this.data.id
    wx.switchTab({
      url: '../soil/soil',
    })
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