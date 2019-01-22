<template lang="pug">
div
  h1 Editing random user: {{ $route.params.id }}
  ods-button.ods-mt-12(@click="confirmation") Confirmation
</template>

<script>
export default {
  name: 'EditRandomUser',
  methods: {
    confirmation () {
      this.$router.push(`/users/random-user/${this.$route.params.id}/edit/confirmation`)
    }
  }
}
</script>
