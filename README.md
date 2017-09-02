# 锤子商城


商品数据通过简单的爬虫抓取写入数据库 (eventproxy + superagent).头像图片是上传到本人的阿里云OSS的。
__注: 并不是通过proxy代理请求的锤子商城接口__

## 技术栈

vue2 + vuex + vue-router + webpack + ES6 + axios + sass + flex + svg + express + mongoose + ali-oss

## 关于部署


nodejs express配置
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

nginx配置
location /{
    add_header 'Access-Control-Allow-Origin' '*';
    add_header 'Access-Control-Allow-Credentials' 'true';
    add_header 'Access-Control-Allow-Methods' 'OPTION, POST, GET';
    add_header 'Access-Control-Allow-Headers' 'X-Requested-With, Content-Type';
}

## 项目运行

```txt
git clone https://github.com/zhi3210happy/vue-smarttisan.git
  
cd vue-smartisan

cnpm i

npm run dev

cd server (请先启动自己的mongoDB数据库)

cnpm i

npm run init

npm start

// 如果运行出现代理错误 请确保 config 文件下 index.js proxyTable代理正确

// 直接运行代理应为
http://mall.yucccc.com:3333

// 通过运行node-api请求本地api代理应为
http://127.0.0.1:3333

```

## 说明

由于锤子商城官网在不断变动，所以不能保证完全一样。
为了方便演示，这里提供了一个账号

```txt
 账号: admin  密码: admin
```

## 目标功能

- [x] 登陆、登出功能
- [x] 注册
- [x] 加入、删除、修改购物
- [x] 新增、修改、删除收货地址
- [x] 下单功能
- [x] 支付功能
- [x] 商品详情
- [x] 个人中心
- [x] 订单列表
- [x] 更换头像 -- 头像上传到阿里云OSS
- [ ] 首页轮播
## 后续

> 采用KOA2重构server
> 加入更多的功能
> 更多的细节会陆续修复.代码会陆续优化.


## 项目布局

```txt
.
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── server                                      // Express服务端
├── src                                         // 源码目录
│   ├── api                                     // 请求接口
│   ├── common                                  // 公共组件
│   ├── components                              // 组件
│   ├── page                                    // 页面
│   │   └── Cart                                // 购物车
│   │   └── Checkout                            // 提交订单
│   │   └── Goods                               // 商品
│   │       ├── goods                           // 商品列表
│   │       ├── goodsDetails                    // 商品详情
│   │   └── Home                                // 主页
│   │   └── Login                               // 登陆
│   │   └── Order                               // 订单
│   │       ├── order                           // 商品列表
│   │       ├── payment                         // 提交订单
│   │       ├── paysuccess                      // 提交成功
│   │   └── User                                // 个人中心
│   │       ├── children
│   │       │   ├── addressList                 // 地址列表
│   │       │   ├── information                 // 个人信息
│   │       │   └── order                       // 订单列表
│   │   └── index.vue                           // 主页
│   ├── store                                   // vuex的状态管理
│   │   ├── action.js                           // 配置actions
│   │   ├── index.js                            // 引用vuex，创建store
│   │   ├── modules                             // store模块
│   │   ├── mutation-types.js                   // 定义常量muations名
│   │   └── mutations.js                        // 配置mutations
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── favicon.ico                                 // 图标
├── index.html                                  // 入口html文件
.

```
