Page({
  onReady (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  takeVideoEnd () {
    const ctx = wx.createCameraContext()
    ctx.stopRecord({
      success: (res) => {
        console.log(res)
        wx.request({
          url: 'http://106.14.135.95:3000/note/getDetail?id=529',
          header: {
            'content-type': 'application/json;charset=UTF-8'
          },
          success: function (res) {
            // 参数值为res.data,直接将返回的数据传入
            console.log(res)
          },
          fail: function () {
          }
        })
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
