<template lang="pug">
  div
    .banner
      swiper(:options="swiperOption" )
        swiper-slide( v-for="(item,index) in bgimg" :key="index" )
          .bg( ref="bg" :style="item[0]" )
            .img.a( :style="item[1]" )
            .img.b( :style="item[2]" )
        .swiper-pagination( slot="pagination" )

    section.w.mt3.clearfix
      y-shelf( title="热门商品" )
        .hot( slot="content" )
          mall-goods( :msg="item" v-for="(item,i) in hot" :key="i" )
    section.w.mt30.clearfix( v-for="(item,i) in floors" :key="i" )
      y-shelf( :title="item.title" )
        .floors( slot="content" )
          .imgbanner
            img(　v-lazy="floors[i].image.image" :alt="item.title" )
          mall-goods( :msg="tab" v-for="(tab,i) in item.tabs" :key="i" )
</template>
<script>
import { productHome } from '/api/index.js'
import YShelf from '/components/shelf'
import product from '/components/product'
import mallGoods from '/components/mallGoods'
require('../../assets/style/swiper.css')
export default {
  data() {
    return {
      bgimg: {
        bgimga: [
          { background: 'url(http://image.smartisanos.cn/resource/3/9/kaixueji1.png?x-oss-process=image/resize,w_1220/quality,Q_100) center  no-repeat' },
          { background: 'url(http://image.smartisanos.cn/resource/f/5/kaixueji2.png?x-oss-process=image/resize,w_1220/quality,Q_100) center  no-repeat' },
          { background: 'url(http://image.smartisanos.cn/resource/3/d/kaixueji3.png?x-oss-process=image/resize,w_1220/quality,Q_100) center  no-repeat' }
        ],
        bgimgb: [
          { background: 'url(http://image.smartisanos.cn/resource/a/d/yhxin1.png?x-oss-process=image/resize,w_1220/quality,Q_100) center  no-repeat' },
          { background: 'url(http://image.smartisanos.cn/resource/e/a/yhxin2.png?x-oss-process=image/resize,w_1220/quality,Q_100) center  no-repeat' },
          { background: 'url(http://image.smartisanos.cn/resource/c/1/yhxin3.png?x-oss-process=image/resize,w_1220/quality,Q_100) center  no-repeat' }
        ],
        bgimgc: [
          { background: 'url(http://image.smartisanos.cn/resource/c/e/10011.png?x-oss-process=image/resize,w_1220/quality,Q_100) center  no-repeat' },
          { background: 'url(http://image.smartisanos.cn/resource/9/e/10012.png?x-oss-process=image/resize,w_1220/quality,Q_100) center  no-repeat' },
          { background: 'url(http://image.smartisanos.cn/resource/7/1/10013.png?x-oss-process=image/resize,w_1220/quality,Q_100) center  no-repeat' }
        ]
      },
      swiperOption: {
        // swiper optionss 所有的配置同swiper官方api配置
        autoplay: 3000,
        speed: 500,
        pagination: '.swiper-pagination',
        paginationElement: 'li',
        paginationClickable: true,
        loop: true,
        effect: 'flip',
        flip: {
          slideShadows: true,
          limitRotation: true
        },
        observeParents: true
      },
      banner: {},
      floors: [],
      hot: []
    }
  },
  mounted() {
    productHome().then(res => {
      let data = res.result
      this.floors = data.home_floors
      this.hot = data.home_hot
    })
  },
  components: {
    YShelf,
    product,
    mallGoods
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.banner,
.banner span,
.banner div {
  font-family: "Microsoft YaHei";
  transition: all .3s;
  -webkit-transition: all .3s;
  transition-timing-function: linear;
  -webkit-transition-timing-function: linear;
}

.banner {
  perspective: 3000px;
  position: relative;
  z-index: 19;
}

.bg {
  position: relative;
  width: 1220px;
  height: 500px;
  margin:auto;
  margin-top: 20px;
  background-size: 100% 100%;
  border-radius: 10px;
  cursor: pointer;
}

.img {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
}

.swiper-pagination-bullet {
  background: white;
}

.sk_item {
  width: 170px;
  height: 225px;
  padding: 0 14px 0 15px;
  >div {
    width: 100%;
  }
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all .3s;
    &:hover {
      transform: translateY(-5px);
    }
  }
  img {
    width: 130px;
    height: 130px;
    margin: 17px 0;
  }
  .sk_item_name {
    color: #999;
    display: block;
    max-width: 100%;
    _width: 100%;
    overflow: hidden;
    font-size: 12px;
    text-align: left;
    height: 32px;
    line-height: 16px;
    word-wrap: break-word;
    word-break: break-all;
  }
  .sk_item_price {
    padding: 3px 0;
    height: 25px;
  }
  .price_new {
    font-size: 18px;
    font-weight: 700;
    margin-right: 8px;
    color: #f10214;
  }
  .price_origin {
    color: #999;
    font-size: 12px;
  }
}

.box {
  overflow: hidden;
  position: relative;
  z-index: 0;
  margin-top: 29px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, .14);
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, .1);
}

ul.box {
  display: flex;
  li {
    flex: 1;
    img {
      display: block;
      width: 305px;
      height: 200px;
    }
  }
}

.mt30 {
  margin-top: 30px;
}

.hot {
  display: flex;
  >div {
    flex: 1;
    width: 25%;
  }
}

.floors {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .imgbanner {
    width: 50%;
    height: 430px;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
