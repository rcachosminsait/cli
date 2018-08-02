<template>
  <div id="app">
    {{#if_eq onesait "yes"}}
    <ods-container>
      <ods-aside width="72px">
        <side-navigation></side-navigation>
      </ods-aside>
      <ods-container>
        <ods-header>
          <the-header></the-header>
        </ods-header>
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
{{#unless router}}
import HelloIndra from '@/views/HelloIndra'
{{/unless}}
{{#if_eq onesait "yes"}}
import SideNavigation from '@/components/SideNavigation'
import TheHeader from '@/components/TheHeader'
{{/if_eq}}
export default {
  name: 'App'{{#router}}
  {{#if_eq onesait "yes"}},
  components: {
    SideNavigation,
    TheHeader
  }{{/if_eq}}
  {{else}},
  components: {
    HelloIndra{{#if_eq onesait "yes"}},
    SideNavigation,
    TheHeader{{/if_eq}}
  }{{/router}}
}
</script>

<style>
html, body {
  font-family: 'Soho', Helvetica, Arial, sans-serif!important;
  -webkit-font-smoothing: subpixel-antialiased;
  font-kerning: none;
  background: #f5f7fa;
}
</style>
