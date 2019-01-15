##### 实现活体检验
> https://blog.csdn.net/u014374031/article/details/56831693

##### 扫码
> https://developers.weixin.qq.com/miniprogram/dev/api/wx.scanCode.html

##### 七牛云上传
> https://developer.qiniu.com/kodo/manual/1272/form-upload
> https://developer.qiniu.com/kodo/api/1312/upload

##### 百度人脸识别
> http://ai.baidu.com/docs#/Face-Detect-V3/top

##### 微信小程序自定义拍照页面开发
> https://blog.csdn.net/u010606780/article/details/80887589

##### 小程序支付
> https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_10&index=1

> https://www.jianshu.com/p/43bfa884dc1f  —— 支付说明


##### 可用组件
> https://developers.weixin.qq.com/miniprogram/dev/component/

##### 路由跳转
> https://www.jianshu.com/p/98a76d1bc40b

##### 扫描普通二维码打开小程序
> https://developers.weixin.qq.com/miniprogram/introduction/qrcode.html#%E9%85%8D%E7%BD%AE%E6%B5%81%E7%A8%8B

##### 小程序视频组件
> https://blog.csdn.net/i10630226/article/details/78695078

##### 小程序文件上传
> http://www.wxapp-union.com/forum.php?mod=viewthread&tid=999&highlight=upload

##### 小程序网络请求
> https://blog.csdn.net/single_cong/article/details/80340934

##### 小程序定制键盘
> https://blog.csdn.net/qq_41629498/article/details/81747403

##### 小程序长链接
> https://juejin.im/post/5b5ad3c16fb9a04fab451c9d


- [ ] 是否需要websocket长连接 
- [ ] 如何判断用户开始核验
- [ ] 核验时长控制
- [ ] 七牛云
- [ ] 百度大脑人脸识别——腾讯云
- [ ] 扫描二维码，跳转指定页面 —— 需要企业账户
- [ ] 扫描二维码会不会有数据丢失
- [ ] 二维码有效时间
- [ ] 调取支付



核验记录 按照微信号为唯一标准 记录包括自己的和他人的 搜索当前微信号下
身份证号不可修改 姓名可修改 ——提示
只能比对三次 —— 把身份证号作为唯一标识

调起支付生成订单
支付完成可以取消订单
一次付费只可以用于一个人比对
半小时比对时间 三次比对错误 任何一次成功 订单结束
未支付的订单可以取消订单 —— 也可以继续订单进行支付
待支付、完成、过期、进行中
支付超时 30分钟
比对次数、最新一次比对结果、订单状态