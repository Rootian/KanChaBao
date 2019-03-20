// pages/body/add_geo/add_geo.js

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    photo:'',
    name:'',
    depth:'',
    color:'',
    smell:'',
    savedFilePath:'',
    
  },


  addPhoto:function(){
    var that = this
    wx.chooseImage({
      count:1,
      sourceType:['camera'],
      success: function(res) {
        that.setData({
          photo : res.tempFilePaths
        })
        // var tempFilePaths = res.tempFilePaths
        // wx.saveFile({
        //   tempFilePath: tempFilePaths[0],
        //   success(res) {
        //     // var savedFilePath = res.savedFilePath
        //     // console.log(savedFilePath)
        //   },
        //   fail(){
        //     // console.log("fail")
        //   }
        // })
      },
    })
  },
  iname:function(e){
    this.setData({
      name:e.detail.value
    })
  },
  idepth: function (e) {
    this.setData({
      depth: e.detail.value
    })
  },
  icolor: function (e) {
    this.setData({
      color: e.detail.value
    })
  },
  ismell: function (e) {
    this.setData({
      smell: e.detail.value
    })
  },
  quit_page:function(){
    //放弃
    wx.switchTab({
      url: '../geo/geo',
    })
  },
  save_page:function(){
    //保存入数据库
    // 
    // 
    // 
    // console.log(this.data)
    app.globalData.g_name = this.data.name
    wx.setStorage({
      key: 'geo_name',
      data: this.data.name,
      },
      {
      key: 'geo_depth',
      data: this.data.depth,
      },
      {
      key: 'geo_color',
      data: this.datacolor,
      },
      {
      key: 'geo_smell',
      data: this.data.smell,
      }
    )

    wx.switchTab({
      url: '../geo/geo',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '地层信息录入',
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