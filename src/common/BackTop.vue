<template lang="pug">
transition(name='fadeInUp')
  .backTop(v-if='scroll')
    i.icon-arrow-up(@click='backTop')

</template>

<script>
export default {
    data() {
        return {
            scroll: false
        }
    },
    methods: {
        backTop() {
            let top = document.body.scrollTop
            let speed = 150
            let timer = setInterval(() => {
                document.body.scrollTop = top -= speed
                if (top <= 0) {
                    top = 0
                    clearInterval(timer)
                }
            }, 30)
        }
    },
    mounted() {     //使用箭头函数后，内层this会查找外层的非箭头函数的this。
        window.onscroll = () => {
            let scrollTop = 0 
	        if (document.documentElement && document.documentElement.scrollTop)	{ 
		        scrollTop = document.documentElement.scrollTop 
	        } else if (document.body) { 
		        scrollTop = document.body.scrollTop
	        } 
            if (scrollTop> 800) {
                this.scroll = true
            } else {
                this.scroll = false
            }
        }
    }
}

</script>

<style scoped>
.fadeInUp-enter-active {
  animation: fadeInUp .5s;
}
.fadeInUp-leave-active{
    animation: fadeInUp .5s reverse;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.backTop {
    position: fixed;
    right: 20px;
    bottom: 20px;
}

.backTop .icon-arrow-up {
    font-size: 20px;
    display: inline-block;
    width: 48px;
    height: 48px;
    padding: 10px;
    border: 1px solid #ccc;
    color: #ccc;
    border-radius: 10px;
    background: #fff url('../../static/svg/icon_backtop.svg');
    cursor: pointer;
    opacity: 0.8;
}
</style>
