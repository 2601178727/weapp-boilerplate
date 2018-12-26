Page({
  onReady (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  takePhoto () {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  error (e) {
    console.log(e.detail)
  }
})
