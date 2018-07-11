<template>
  <div id="app">
    {{#if_eq onesait "yes"}}
    <ods-container>
      <ods-aside width="72px">
        <side-navigation></side-navigation>
      </ods-aside>
      <ods-container>
        <ods-header>Cabecera</ods-header>
        <ods-main>
          {{#router}}
          <router-view/>
          {{else}}
          <HelloIndra/>
          {{/router}}
        </ods-main>
      </ods-container>
    </ods-container>
    {{/if_eq}}
    {{#if_eq onesait "noOds"}}
    <img src="./assets/images/logo.png">
    {{#router}}
    <router-view/>
    {{else}}
    <HelloIndra/>
    {{/router}}
    {{/if_eq}}
  </div>
</template>

<script>
{{#router}}
import SideNavigation from './components/SideNavigation'
{{/router}}
import HelloIndra from './views/HelloIndra'

export default {
  name: 'App',
  components: {
    HelloIndra{{#router}},
    SideNavigation{{/router}}
  }
}
</script>

<style>
#app {
  font-family: 'Soho', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-kerning: none;
  text-align: left;
}
</style>
