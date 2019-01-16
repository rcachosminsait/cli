<template lang="pug">
  ods-main-navigation(
    :navigation="navigation"
    ref="navigation")
    template(slot="suites")
      suites-menu
</template>

<script>
import navigationConfig from '@/components/nav/config.json'
import SuitesMenu from '@/components/header/SuitesMenu'

export default {
  name: 'NavContent',
  components: {
    SuitesMenu
  },
  data () {
    return {
      navigation: navigationConfig
    }
  },
  watch: {
    '$i18n.locale': {
      handler (val) {
        const assignName = item => {
          this.$set(item, 'name', item.langs[this.$i18n.locale])
          if (item.children && Object.keys(item.children).length) {
            for (const key in item.children) {
              assignName(item.children[key])
            }
          }
        }
        for (const key in this.navigation) {
          assignName(this.navigation[key])
        }
      },
      immediate: true
    }
  }
}
</script>
