// pages/body/add_water/add_water.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputs: [
      {
        fst_input: '采样编号',
        sec_input: '天气',
        holder1: 'AEF45',
        holder2: '晴',
        bind1: 'Point_id',
        bind2: 'Point_weather',
      },
      {
        fst_input: '温度/摄氏度',
        sec_input: '48h是否有强降雨',
        holder1: '36',
        holder2: '无',
        bind1: 'Point_temp',
        bind2: 'Point_48_rain',
      },
      {
        fst_input: '采样点是否有积水',
        sec_input: '油水界面仪器型号',
        holder1: '有',
        holder2: 'XX',
        bind1: 'Point_ponding',
        bind2: 'Point_machine_size',
      },
      {
        fst_input: '是否有漂浮的油类物质',
        sec_input: '厚度/米',
        holder1: '无',
        holder2: '30',
        bind1: 'Point_float',
        bind2: 'Point_thickness',
      },
      {
        fst_input: '采样井锁扣是否完整',
        sec_input: '采样设备',
        holder1: '是',
        holder2: 'XX',
        bind1: 'Point_intact',
        bind2: 'Point_machine',
      },
      {
        fst_input: '采样器放置深度/米',
        sec_input: '水温/摄氏度',
        holder1: '50',
        holder2: '32',
        bind1: 'Point_depth',
        bind2: 'Point_water_temp',
      },
      {
        fst_input: '电导率',
        sec_input: '溶解氧',
        holder1: 'XX',
        holder2: 'XX',
        bind1: 'Point_conductivity',
        bind2: 'Point_dissolved_oxy',
      },
      {
        fst_input: '氧气还原电位',
        sec_input: '浊度',
        holder1: 'XX',
        holder2: 'XX',
        bind1: 'Point_oxy_reduc',
        bind2: 'Point_turbidity',
      },
      {
        fst_input: 'PH',
        sec_input: '检测指标',
        holder1: 'DES56',
        holder2: '张XX',
        bind1: 'Point_ph',
        bind2: 'Point_standard',
      },
    ],
    photo:'',
    id:'',
    weather:'',
    temp:'',
    rain_48:'',
    ponding:'',
    machine_size:'',
    float:'',
    thickness:'',
    intact:'',
    machine:'',
    depth:'',
    water_temp:'',
    conductivity:'',
    dissolved_oxy:'',
    oxy_reduc:'',
    turbidity:'',
    ph:'',
    standard:'',
    c_describe:''
  },

  Point_id: function (e) {
    this.setData({
      id: e.detail.value
    })
  },
  Point_weather: function (e) {
    this.setData({
      weather: e.detail.value
    })
  },
  Point_temp: function (e) {
    this.setData({
      temp: e.detail.value
    })
  },
  Point_48_rain: function (e) {
    this.setData({
      rain_48: e.detail.value
    })
  },
  Point_ponding: function (e) {
    this.setData({
      ponding: e.detail.value
    })
  },
  Point_machine_size: function (e) {
    this.setData({
      machine_size: e.detail.value
    })
  },
  Point_float: function (e) {
    this.setData({
      float: e.detail.value
    })
  },
  Point_thickness: function (e) {
    this.setData({
      thickness: e.detail.value
    })
  },
  Point_intact: function (e) {
    this.setData({
      intact: e.detail.value
    })
  },
  Point_machine: function (e) {
    this.setData({
      machine: e.detail.value
    })
  },
  Point_depth: function (e) {
    this.setData({
      depth: e.detail.value
    })
  },
  Point_water_temp: function (e) {
    this.setData({
      water_temp: e.detail.value
    })
  },
  Point_conductivity: function (e) {
    this.setData({
      conductivity: e.detail.value
    })
  },
  Point_dissolved_oxy: function (e) {
    this.setData({
      dissolved_oxy: e.detail.value
    })
  },
  Point_oxy_reduc: function (e) {
    this.setData({
      oxy_reduc: e.detail.value
    })
  },
  Point_turbidity: function (e) {
    this.setData({
      turbidity: e.detail.value
    })
  },
  Point_ph: function (e) {
    this.setData({
      ph: e.detail.value
    })
  },
  Point_standard: function (e) {
    this.setData({
      standard: e.detail.value
    })
  },
  c_describe: function (e) {
    this.setData({
      c_describe: e.detail.value
    })
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
  quit_page: function () {
    //放弃
    wx.switchTab({
      url: '../groundwater/groundwater',
    })
  },
  save_page: function () {
    //保存入数据库
    // 
    // 
    // 
    app.globalData.w_id = this.data.id
    wx.switchTab({
      url: '../groundwater/groundwater',
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