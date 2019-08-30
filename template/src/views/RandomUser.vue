<template lang="pug">
div
  h1.ods-mb-12 Random user: \{{ $route.params.id }}
  ods-button(@click="editRandomUser") Edit random User
</template>

<script>
export default {
  name: 'RandomUser',
  methods: {
    editRandomUser () {
      let num = this.generateId(0, 200)
      let str = Math.random().toString(36).substring(7)
      this.$router.refreshParam('randomStr', `#hash ${str}`)
      this.$router.push(`/users/random-user/${num}/edit/`)
    },
    generateId (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  }
}
</script>
