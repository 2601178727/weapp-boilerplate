Page({
  onReady (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  takeVideoEnd () {
    const ctx = wx.createCameraContext()
    ctx.stopRecord({
      success: (res) => {
        console.log(res)
        this.setData({
          src: res.tempThumbPath
        })
      }
    })
  },
  takeVideoStart () {
    const ctx = wx.createCameraContext()
    ctx.startRecord({
      success: (res) => {
        console.log(res)
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true
        innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
        innerAudioContext.onPlay(() => {
          console.log('开始播放')
        })
        innerAudioContext.onError((res) => {
          console.log(res.errMsg)
          console.log(res.errCode)
        })
      }
    })
    /* ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    }) */
  },
  error (e) {
    console.log(e.detail)
  }
})