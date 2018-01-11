<template lang="pug">
  div
    y-header
    router-view.main
    y-footer
    back-top
    <!--抛物图片-->
    transition( @after-enter='afterEnter' @before-enter="beforeEnter" )
      <!--整张图片-->
      .move_img( v-if="showMoveImg" :style="{left:(cartPositionL-10) + 'px',top:(cartPositionT-10) + 'px'}")
        div
          img(:src="moveImgUrl")
</template>
<script>
  import YHeader from '/common/header'
  import YFooter from '/common/footer'
  import BackTop from '/common/BackTop'
  import { mapState, mapMutations ,mapActions } from 'vuex'
  export default {
    data () {
      return {}
    },
    computed: {
      ...mapState(['cartPositionT', 'cartPositionL', 'showMoveImg', 'elLeft', 'elTop', 'moveImgUrl','searchData'])
    },
    mounted () {
      this.SEARCH_DATA({data:1})
      console.log(this.searchData)
    },
    methods: {
      ...mapMutations(['ADD_ANIMATION','SEARCH_DATA']),
      ...mapActions(['getSearchData']),
      // 监听图片进入购物车
      listenInCart () {
        this.ADD_ANIMATION({moveShow: false, receiveInCart: true})
      },
      beforeEnter (el) {
        let elStyle = el.style
        let elChild = el.children[0]
        let elChildSty = elChild.style
        elStyle.transform = `translate3d(0,${this.elTop - this.cartPositionT}px,0)`
        elChildSty.transform = `translate3d(${-(this.cartPositionL - this.elLeft)}px,0,0) scale(1.2)`
      },
      afterEnter (el) {
        let elStyle = el.style
        let elChild = el.children[0]
        let elChildSty = elChild.style
        elStyle.transform = `translate3d(0,0,0)`
        elChildSty.transform = `translate3d(0,0,0) scale(.2)`
        elStyle.transition = 'transform .55s cubic-bezier(.29,.55,.51,1.08)'
        elChildSty.transition = 'transform .55s linear'
        // 动画结束
        elChild.addEventListener('transitionend', () => {
          this.listenInCart()
        })
        elChild.addEventListener('webkitAnimationEnd', () => {
          this.listenInCart()
        })
      }
    },
    components: {
      YHeader,
      YFooter,
      BackTop
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../assets/style/mixin";

  .main {
    min-height: calc(100vh - 454px);
    background: #ededed;
    overflow: hidden;
    width: 100%;
  }

  .bn {
    border-style: none;
    border-width: 0;
    border: none;
  }

  .move_img {
    position: fixed;
    @include wh(40px);
    width: 45px;
    z-index: 29;
    height: 45px;
    div {
      @extend .bn;
    }
    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
      display: block;
      @extend .bn;
    }
  }

</style>
