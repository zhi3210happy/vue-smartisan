<template lang="pug">
  div
    y-shelf(title="我的订单")
      div(slot="content")
        div(v-if="orderList.length")
          div(v-for="(item,i) in orderList" :key="i")
            .gray-sub-title.cart-title
              .first
                div
                  span.date(v-text="item.createDate")
                  span.order-id 订单号： 
                    a(href="javascript:;") {{item.orderId}}
                .f-bc
                  span.price 单价
                  span.num 数量
                  span.operation 商品操作
              .last
                span.sub-total 实付金额
                span.order-detail
                  a(href="javascript:;") 查看详情
                    em.icon-font
            .pr
              .cart(v-for="(good,j) in item.goodsList" :key="j")
                .cart-l(:class="{bt:j>0}")
                  .car-l-l
                    .img-box
                      img(:src="good.productImg" alt="")
                    .ellipsis {{good.productName}}
                  .cart-l-r
                    div ¥ {{good.productPrice}}
                    .num {{good.productNum}}
                    .type
                      a.del-order(@click="_delOrder(item.orderId,i)" href="javascript:;" v-if="j<1") 删除此订单
                .cart-r
                  span
                  span
              .prod-operation.pa(style="right: 0;top: 0;")
                .total ¥ {{item.orderTotal}}
                .status {{item.orderStatus === '1' ? '已支付' : '已关闭'}}
        div(v-else)
          div(style="padding: 100px 0;text-align: center") 你还未创建过订单
</template>
<script>
  import { orderList, delOrder } from '/api/goods'
  import YShelf from '/components/shelf'
  export default {
    data () {
      return {
        orderList: []
      }
    },
    methods: {
      _orderList () {
        orderList().then(res => {
          this.orderList = res.result
        })
      },
      _delOrder (orderId, i) {
        delOrder({orderId}).then(res => {
          if (res.status === '0') {
            alert('删除成功')
            this.orderList.splice(i, 1)
          } else {
            alert('删除失败')
          }
        })
      }
    },
    created () {
      this._orderList()
    },
    components: {
      YShelf
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../../assets/style/mixin";

  .gray-sub-title {
    height: 38px;
    padding: 0 24px;
    background: #EEE;
    border-top: 1px solid #DBDBDB;
    border-bottom: 1px solid #DBDBDB;
    line-height: 38px;
    font-size: 12px;
    color: #666;
    display: flex;
    span {
      display: inline-block;
      height: 100%;
    }
    .first {
      display: flex;
      justify-content: space-between;
      flex: 1;
      .f-bc {
        > span {
          width: 112px;
          text-align: center;
        }
      }
    }
    .last {
      width: 230px;
      text-align: center;
      display: flex;
      border-left: 1px solid #ccc;
      span {
        flex: 1;
      }
    }
  }

  .bt {
    border-top: 1px solid #EFEFEF;
  }

  .date {
    padding-left: 6px;
  }

  .order-id {
    margin-left: 20px;
  }

  .cart {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    &:hover {
      .del-order {
        display: block;
      }
    }
    .del-order {
      display: none;
    }
    .cart-l {
      display: flex;
      align-items: center;
      flex: 1;
      padding: 15px 0;
      justify-content: space-between;
      position: relative;
      &:before {
        position: absolute;
        content: ' ';
        right: -1px;
        top: 0;
        width: 1px;
        background-color: #EFEFEF;
        height: 100%;
      }
      .ellipsis {
        margin-left: 20px;
        width: 220px;
      }
      .img-box {
        border: 1px solid #EBEBEB;
      }
      img {
        display: block;
        @include wh(80px);
      }
      .cart-l-r {
        display: flex;
        > div {
          text-align: center;
          width: 112px;
        }
      }
      .car-l-l {
        display: flex;
        align-items: center;
      }
    }
    .cart-r {
      width: 230px;
      display: flex;
      span {
        text-align: center;
        flex: 1;
      }
    }
  }

  .prod-operation {
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 254px;
    div {
      width: 100%;
      text-align: center;
    }
    div:last-child {
      padding-right: 24px;
    }
  }
</style>
