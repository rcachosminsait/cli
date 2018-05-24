<template>
  <div id="app">
    <img src="./assets/images/logo.png">
    {{#router}}
    <router-view/>
    {{else}}
    <HelloWorld/>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import HelloWorld from './views/HelloWorld'

{{/unless}}
export default {
  name: 'App'{{#router}}{{else}},
  components: {
    HelloIndra
  }{{/router}}
}
</script>

<style>
#app {
  font-family: 'Soho', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-kerning: none;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
