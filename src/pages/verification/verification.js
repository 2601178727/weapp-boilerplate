function getRandomColor () {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    if (color.length === 1) { color = '0' + color }
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  onReady (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  inputValue: '',
  data: {
    src: '',
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }]
  },
  bindInputBlur (e) {
    this.inputValue = e.detail.value
  },
  bindButtonTap () {
    // initQiniu()
    var that = this
    wx.chooseVideo({
      sourceType: ['camera', 'album'],
      camera: 'front',
      maxDuration: 40,
      success: function (res) {
        console.log('拍照之后：')
        console.log(res)
        that.setData({
          src: res.tempFilePath
        })
        // 七牛上传文件
        // var vedioObject = res
        // var filePath = res.tempFilePath
      },
      error: function (err) {
        console.log(err)
      }
    })
  },
  /* bindButtonTap () {
    const that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success (res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  }, */
  bindSendDanmu () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  }
})
