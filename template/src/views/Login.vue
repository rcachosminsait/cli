<template lang="pug">
  div.srm-login
    ods-row
      ods-col.srm-login__left(:xs='{ span:24 }', :sm='{ span:12 }')
        ods-row(type='flex', justify='center', align='middle')
          router-view
      ods-col.srm-login__right(:xs='{ span:24 }', :sm='{ span:12 }')
        ods-row(type='flex', justify='center', align='middle')
          img(src='https://www.minsait.com/sites/all/themes/custom/indra_bootstrap_sass/assets/images/logoMinsait.svg')
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {}
  }
}

</script>

<style lang="scss" scoped>
  .srm-login{
    width: 100%;
    height: 100vh;
    &__left{
      background-color: #FFF;
    }

    &__right{
      background: linear-gradient(135deg, #2E6C99 0%, #235b84 100%);
    }

    .ods-row, .ods-col {
      height: 100%;
    }
  }
</style>
