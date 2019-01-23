<template lang="pug">
div
  h1.ods-mb-12 Users
  ods-button(@click="getRandomUser") Get random User
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
    generateId (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  }
}
</script>
