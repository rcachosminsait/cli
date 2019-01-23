<template lang="pug">
div
  h1.ods-mb-12 Users
  ods-button(@click="getRandomUser") Get random User
  ods-button(@click="editRandomUser") Edit random User
  router-view
</template>

<script>
export default {
  name: 'Users',
  methods: {
    getRandomUser () {
      let num = this.generateId(0, 200)
      sessionStorage.setItem('userInfo', `SessionStorage ${num}`)
      this.$router.push(`/users/random-user/${num}`)
    },
    editRandomUser () {
      let str = Math.random().toString(36).substring(7)
      sessionStorage.setItem('randomStr', `random Str ${str}`)
      this.$router.push(`/users/random-user/${this.generateId(0, 200)}/edit/`)
    },
    generateId (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  }
}
</script>
