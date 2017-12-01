<template lang="pug">
div
  y-header
    div(slot='nav')
  router-view(style='margin-top: 40px;')
  y-footer
</template>
<script>
  import YHeader from '/common/header'
  import YFooter from '/common/footer'
  export default {
    components: {
      YHeader,
      YFooter
    }
  }
</script>
