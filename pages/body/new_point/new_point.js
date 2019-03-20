// pages/body/new_point/new_point.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputs:[
      {
        fst_input:'采样点编号',
        sec_input:'负责人',
        holder1:'DES56',
        holder2:'张XX',
        bind1:'Point_id',
        bind2:'Point_manager',
      },
      {
        fst_input: '高程/米',
        sec_input: '钻探方法',
        holder1: 'XX',
        holder2: 'XX',
        bind1: 'Point_height',
        bind2: 'Point_method',
      },
      {
        fst_input: '天气',
        sec_input: '温度/摄氏度',
        holder1: '晴',
        holder2: '35',
        bind1: 'Point_weather',
        bind2: 'Point_temp',
      },
      {
        fst_input: '大气背景PID值',
        sec_input: '自封袋PID值',
        holder1: 'XX',
        holder2: 'XX',
        bind1: 'Point_env_PID',
        bind2: 'Point_bag_PID',
      },
      {
        fst_input: '钻机型号',
        sec_input: '钻孔直径',
        holder1: 'XX',
        holder2: 'XX',
        bind1: 'Point_machine_size',
        bind2: 'Point_machine_radius',
      },
      {
        fst_input: 'PID型号',
        sec_input: 'XRF型号',
        holder1: 'XX',
        holder2: 'XX',
        bind1: 'Point_PID_size',
        bind2: 'Point_XRF_size',
      },
      {
        fst_input: '最低检测限_PID',
        sec_input: '最低检测限_XRF',
        holder1: 'XX',
        holder2: 'XX',
        bind1: 'Point_limit',
        bind2: 'Point_limit2',
      },
    ],
    p_id:'',
    p_la:'',
    p_manager:'',
    p_lo:'',
    p_height: '',
    p_method: '',
    p_weather: '',
    p_temp: '',
    p_env_PID: '',
    p_bag_PID: '',
    p_machine_size: '',
    p_machine_radius: '',
    p_PID_size: '',
    p_XRF_size: '',
    p_limit: '',
    p_limit2: '',

    la:'',
    lo:''

  },
  Point_id:function(e){
    this.setData({
      p_id: e.detail.value
    })
  },
  Point_la: function (e) {
    this.setData({
      p_la: e.detail.value
    })
  },
  Point_manager: function (e) {
    this.setData({
      p_manager: e.detail.value
    })
  },
  Point_lo: function (e) {
    this.setData({
      p_lo: e.detail.value
    })
  },
  Point_height: function (e) {
    this.setData({
      p_height: e.detail.value
    })
  },
  Point_method: function (e) {
    this.setData({
      p_method: e.detail.value
    })
  },
  Point_weather: function (e) {
    this.setData({
      p_weather: e.detail.value
    })
  },
  Point_temp: function (e) {
    this.setData({
      p_temp: e.detail.value
    })
  },
  Point_env_PID: function (e) {
    this.setData({
      p_env_PID: e.detail.value
    })
  },
  Point_bag_PID: function (e) {
    this.setData({
      p_bag_PID: e.detail.value
    })
  },
  Point_machine_size: function (e) {
    this.setData({
      p_machine_size: e.detail.value
    })
  },
  Point_machine_radius: function (e) {
    this.setData({
      p_machine_radius: e.detail.value
    })
  },
  Point_PID_size: function (e) {
    this.setData({
      p_PID_size: e.detail.value
    })
  },
  Point_XRF_size: function (e) {
    this.setData({
      p_XRF_size: e.detail.value
    })
  },
  Point_limit: function (e) {
    this.setData({
      p_limit: e.detail.value
    })
  },
  Point_limit2: function (e) {
    this.setData({
      p_limit2: e.detail.value
    })
  },

  chooseLoc:function(){
    //选择采样点坐标
    var that = this
    wx.chooseLocation({
      success: function(res) {
        that.setData({
          p_la:res.latitude,
          p_lo:res.longitude,
          la:res.latitude,
          lo:res.longitude
        })
      },
    })
  },
  save:function(){
    //将采样点基本信息保存至数据库
    //
    //
    //
    // console.log(this.data.p_id)
    // console.log(this.data.p_manager)
    // console.log(this.data.p_lo)
    // console.log(this.data.p_la)
    // console.log(this.data.p_height)
    // console.log(this.data.p_method)
    // console.log(this.data.p_weather)
    // console.log(this.data.p_temp)
    // console.log(this.data.p_env_PID)
    // console.log(this.data.p_bag_PID)
    // console.log(this.data.p_machine_size)
    // console.log(this.data.p_machine_radius)
    // console.log(this.data.p_PID_size)
    // console.log(this.data.p_XRF_size)
    // console.log(this.data.p_limit)
    // console.log(this.data.p_limit2)

    wx.redirectTo({
      url: '../edit_proj/edit_proj',
    })
  },

  start:function(){
    //开始采样
    var id = this.data.p_id
    if (id != ''){
      wx.setStorage({
        key: 'p_id',
        data: id,
      })
    }
    else{
      wx.showModal({
        content: '请输入采样点编号',
      })
      return
    }
    wx.switchTab({
      url: '../geo/geo',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '采样点基本信息',
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