Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    defaultData: {
      type: Object,
      value: function () { return {} }
    }
  },
  data: {
    // 这里是一些组件内部数据
    viewData: {}
  },
  methods: {
    loadViewData () {
      this.setData({viewData: this.data.defaultData})
    },
    getDetail () {
      wx.navigateTo({
        url: '../people/people'// 实际路径要写全
      })
    }
  },
  attached () {
    this.loadViewData()
  }
})
