const qiniuUploader = require('../../utils/qiniuUploader')

// 初始化七牛相关参数
function initQiniu () {
  var options = {
    region: 'ECN', // 华东区，生产环境应换成自己七牛帐户bucket的区域
    uptokenURL: 'https://aime.getweapp.com/qiniu/uptoken', // 生产环境该地址应换成自己七牛帐户的token地址，具体配置请见server端
    domain: 'https://oh39iobj6.qnssl.com/' // 生产环境该地址应换成自己七牛帐户对象存储的域名
  }
  qiniuUploader.init(options)
}

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
  handleRoute () {
    wx.navigateTo({
      url: '../people/people'// 实际路径要写全
    })
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
  },
  bindInputBlur (e) {
    this.inputValue = e.detail.value
  },
  getCode () {
    wx.scanCode({
      onlyFromCamera: true,
      success (res) {
        console.log(res)
      }
    })
  },
  getVideo () {
    initQiniu()
    var that = this
    wx.chooseVideo({
      // sourceType: ['camera', 'album'],
      sourceType: ['camera'],
      camera: 'front',
      maxDuration: 40,
      success: function (res) {
        console.log('拍照之后：')
        console.log(res)
        that.setData({
          src: res.tempFilePath
        })
        var filePath = res.tempFilePath || res.tempFilePaths[0]
        // 交给七牛上传
        qiniuUploader.upload(filePath, (res) => {
          that.setData({
            'imageObject': res
          })
        }, (error) => {
          console.error('error: ' + JSON.stringify(error))
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
