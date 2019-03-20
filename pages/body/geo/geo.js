// pages/body/geo/geo.js

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    geo_items:[],
    temp_name:'',
    temp_photo:'',
    flag:false
  },

  addLayer:function(){
    wx.redirectTo({
      url: '../add_geo/add_geo',
    })
  },

  quit_page: function () {
    //放弃
    wx.redirectTo({
      url: '../new_point/new_point',
    })
  },
  select_sample: function () {
    var that = this
    wx.showActionSheet({
      itemList: ['编辑', '删除'],
      success(e) {
        if (e.tapIndex == 0) {
          //编辑采样点
          wx.redirectTo({
            url: '../add_geo/add_geo',
          })
        }
        else {
          //删除采样点
          that.setData({
            flag: false
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //加载已录入土层
    //
    //
    //
    wx.getStorage(
      {
      key: 'p_id',
      success: function(res) {
        wx.setNavigationBarTitle({
          title: res.data,
        })
      },
      }
      )
    var that = this
    // wx.getStorage(

    //   {
    //     key: 'geo_name',
    //     success: function (res) {
    //       that.setData({
    //         temp_name: res.data
    //       })
    //       // console.log("test:"+res.data)
    //     },

    //   },
    //   {
    //     key: 'sample_photo',
    //     success: function (res) {
    //       that.setData({
    //         temp_photo: res.data
    //       })
    //     },
    //   }
    // )

    //       that.setData({
    //         temp_photo: res.data
    //       })
    //     },
    //   }
    // )
    var temp_item = [app.globalData.g_name, '/pages/image/add_photo.png']
    // console.log(temp_item)
    if(app.globalData.g_name){
      that.data.geo_items.push({ name: app.globalData.g_name, path: '/pages/image/add_photo.png' })
      that.setData({
        temp_name: app.globalData.g_name,
        temp_photo: '/pages/image/add_photo.png',
        flag:true
      })
      console.log("data "+that.data.geo_items[0].name + that.data.geo_items[0].path)
      
    }
    
    // geo_items_temp.push(temp_item)
    // console.log(that.data.geo_items)
    // that.setData({ geo_items })
    // console.log(that.data.geo_items)v

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