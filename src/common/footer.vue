<template>
  <div class="footer">
    <div class="container">
      <div class="siteinfo">
        <ul class="footer-nav clearfix">
          <li v-for="item in footerlist">
            <h3>{{item.dt}}</h3>
            <ul>
              <li v-for="dlitem in item.dl">
                <a href="#">{{dlitem}}</a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="service">
          <p>400-619-0909</p>
          <li class="time">周一至周日9:00-18:00(仅收市话费)</li>
          <li class="online">
            <a href="">
              <span class="info-question"></span>在线帮助</a>
          </li>
        </div>
        <div class="language"></div>
      </div>
      <div class="copyright">
        <span>Copyright © 2017, Smartisan Digital Co., Ltd. All Rights Reserved.北京锤子数码科技有限公司</span>
        <ul class="firstul clearfix">
          <li>
            <a href="#">法律声明</a>
          </li>
          <li>
            <a href="#">隐私条款</a>
          </li>
          <li>
            <a href="#">开发者中心</a>
          </li>
        </ul>
        <ul class="secondul">
          <li>京ICP备14041720号-1</li>
          <li>京ICP证140622号</li>
          <li>京公网安备11010502025474</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
.clearfix:after {
  content: "\200B";
  display: block;
  height: 0;
  clear: both;
}

.footer {
  background-color: #fafafa;
  margin-top: 30px;
  border-top: 1px solid #e6e6e6;
  display: block;
  .container {
    height: 353px;
    width: 1220px;
    margin: 0 auto;
    .siteinfo {
      padding: 97px 0 32px;
      position: relative;
      .footer-nav li {
        float: left;
        width: 149px;
        h3 {
          color: #646464;
          font-size: 12px;
          padding: 0 0 14px;
        }

        ul{
         margin-top:-2px;  
          li {
          font-size: 12px;
          color: #c3c3c3;
          padding: 4px 0;
          a {
            color: #969696;
          }
        }} 
      }


      .service {
        position: absolute;
        top: 96px;
        right: 0;
        p {
          font-size: 30px;
          color: #646464;
          text-align: right;
        }

        .time {
          text-align: right;
          letter-spacing: 0.7px;
          line-height: 2.2;
          font-size: 12px;
          color: #cabdbd;
        }
        .online {
          clear: both;
          width: 241px;
          margin-top:-3px;
          font-size: 12px;
          line-height: 18px;
          color: #c3c3c3;
          text-align: right;
          a {
            float: right;
            width: 130px;
            height: 34px;
            line-height: 32px;
            background: -webkit-linear-gradient(#fcfcfc, #f5f5f5);
            background: linear-gradient(#fcfcfc, #f5f5f5);
            cursor: pointer;
            font-size: 14px;
            padding: 0 0 0 26px;
            margin-top: 8px;
            text-align: left;
            color: #5079d9;
            border: 1px solid #dcdcdc;
            border-radius: 5px;
            .info-question {
              display: inline-block;
              width: 16px; 
              height: 32px;
              font-family: SmartisanIconFont;
              vertical-align: middle;
              font-size: 18px;
              margin-right: 6px;
              top: -1px;
              position: relative;
              background: url(/static/svg/question.svg);
              &:before {
                content: '';
              }
            }
          }
        }
      }
    }

    .copyright {
      color: #434d55;
      font-size: 12px;
      padding: 40px 0;
      border-top: 1px solid #e6e6e6;
      span {
        float: left;
        color: #757575;
        margin-right: 10px;
      }

      .firstul li {
        float: left;
        border-left: 1px solid #ccc;
        padding: 0 10px;
        a {
          color: #5079d9;
        }
      }

      .secondul li {
        float: left;
        color: #CABDBD;
        line-height: 3;
        padding: 0 10px;
        &:first-child {
          padding-left: 0;
        }
      }
    }
  }
}
</style>
<script>
export default {
  data () {
    return {
      footerlist: [{
        'dt': '订单服务',
        'dl': ['购买方式', '支付方式', '送货政策']
      }, {
        'dt': '服务支持',
        'dl': ['售后服务', '维修门店', '零售门店']
      }, {
        'dt': '自助服务',
        'dl': ['热点咨询', '预约购买', '订单物流']
      }, {
        'dt': '媒体中心',
        'dl': ['新闻动态', '官方视频', '图片资源']
      }, {
        'dt': '关于公司',
        'dl': ['公司简介', '加入我们', '联系我们']
      }, {
        'dt': '关注我们',
        'dl': ['新浪微博', '官方微信', '官方贴吧']
      }
      ]
    }
  },
  components: {
  }
}
</script>
