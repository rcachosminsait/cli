<template lang="pug">
div
  h1 Confirmation of Editing random user: {{ $route.params.id }}
</template>

<script>
export default {
  name: 'EditRandomUserConfirmation',
  mounted () {
    console.log(this.$route)
  }
}
</script>
