<template lang="pug">
div
  h1 Random user: \{{ $route.params.id }}
</template>

<script>
export default {
  name: 'RandomUser'
}
</script>
