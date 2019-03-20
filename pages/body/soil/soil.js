// pages/body/soil/soil.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    soil_items:[],
    flag:false,
    temp_photo:'',
    temp_id:''
  },

  addLayer: function () {
    wx.redirectTo({
      url: '../add_soil/add_soil',
    })
  },

  quit_page: function () {
    //放弃
    wx.redirectTo({
      url: '../new_point/new_point',
    })
  },
  select_sample:function(){
    var that = this
    wx.showActionSheet({
      itemList: ['编辑','删除'],
      success(e){
        if(e.tapIndex ==  0){
          //编辑采样点
          wx.redirectTo({
            url: '../add_soil/add_soil',
          })
        }
        else{
          //删除采样点
          that.setData({
            flag:false
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage(
      {
        key: 'p_id',
        success: function (res) {
          wx.setNavigationBarTitle({
            title: res.data,
          })
        },
      }
    )
    var that = this
    var temp_item = [app.globalData.s_id, '/pages/image/add_photo.png']
    console.log(temp_item)
    if (app.globalData.s_id) {
      that.data.soil_items.push({ id: app.globalData.s_id, path: '/pages/image/add_photo.png' })
      that.setData({
        temp_id: app.globalData.s_id,
        temp_photo: '/pages/image/add_photo.png',
        flag: true
      })
      console.log("data " + that.data.soil_items[0].id + that.data.soil_items[0].path)

    }
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