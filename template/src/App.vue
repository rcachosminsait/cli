<template lang="pug">
  #app
    template(v-if="!this.$route.path.includes('login')")
      header-content
      div.flex-container
        nav-content
        ods-main
          ods-scrollbar(wrapClass="ods-scrollbar--main-content")
            router-view
            footer
    template(v-else)
      router-view
</template>

<script>
import HeaderContent from '@/components/header/HeaderContent'
import NavContent from '@/components/nav/NavContent'

export default {
  name: 'App',
  components: {
    HeaderContent,
    NavContent
  }
}
</script>

<style lang="scss">
  html, body {
    font-family: 'Soho', Helvetica, Arial, sans-serif!important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-kerning: none;
    .ods-scrollbar--main-content {
      height: $--main-content-height;
      -ms-overflow-style: -ms-autohiding-scrollbar;
      padding: 24px;
      box-sizing: border-box;
      padding: $--main-content-padding;
      background: $--color-neutral-4;
    }
  }
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
</style>
