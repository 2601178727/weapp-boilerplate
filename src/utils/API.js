class API {
  post (url, postData) {
    return new Promise((resolve, reject) => {
      wx.request({
        // 项目的真正接口，通过字符串拼接方式实现
        url: url,
        header: {
          'content-type': 'application/json;charset=UTF-8'
        },
        data: postData,
        method: 'POST',
        success: function (res) {
          resolve(res)
        },
        fail: function (err) {
          reject(err)
        }
      })
    })
  }
  get (url) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        header: {
          'content-type': 'application/json;charset=UTF-8'
        },
        method: 'GET',
        success: function (res) {
          resolve(res)
        },
        fail: function (err) {
          reject(err)
        }
      })
    })
  }
  upload (url, filePath, formData) {
    return new Promise((resolve, reject) => {
      wx.uploadFile({
        url: url,
        filePath: filePath,
        name: 'new parameter',
        header: {
          'content-type': 'application/json;charset=UTF-8'
        },
        formData: formData,
        success: function (res) {
          resolve(res)
        },
        fail: function (err) {
          reject(err)
        }
      })
    })
  }
}

module.exports = API
