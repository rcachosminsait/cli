<template>
    <ods-menu
        class="onesait-navigation"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        menuTrigger="click"
        :collapse-transition="true"
        position="fixed"
        :isFirstLevel="true">
        <ods-menu-item index="0">
            <ods-icon name="logo"></ods-icon>
            <span slot="title">Home</span>
        </ods-menu-item>

        <ods-submenu index="1">
            <template slot="title">
                <i class="ods-icon-dashboard"></i>
                <span slot="title2">Navigator One</span>
            </template>
            <ods-submenu index="1-1" menu-trigger="click">
                <span slot="title"><span>Submenu Item 1</span></span>
                <ods-menu-item index="1-1-1">Option 1</ods-menu-item>
                <ods-menu-item index="1-1-2">Option 2</ods-menu-item>
            </ods-submenu>
            <ods-submenu index="1-2" menu-trigger="click">
                <span slot="title"><span>Submenu Item 2</span></span>
                <ods-menu-item index="2-2-1"><span>Option 1</span></ods-menu-item>
                <ods-menu-item index="2-2-2"><span>Option 2</span></ods-menu-item>
                <ods-menu-item index="2-2-3"><span>Option 3</span></ods-menu-item>
            </ods-submenu>
            <ods-menu-item index="1-2"><span>Submenu Item 3</span></ods-menu-item>
            <ods-menu-item index="1-4"><span>Submenu Item 4</span></ods-menu-item>
        </ods-submenu>

        <ods-submenu index="2">
            <template slot="title">
                <i class="ods-icon-list"></i>
                <span slot="title2">Navigator Two</span>
            </template>
            <ods-menu-item index="2-1"><span>Submenu Item 1</span></ods-menu-item>
            <ods-submenu index="2-2" menu-trigger="click">
                <span slot="title"><span>Submenu Item 2</span></span>
                <ods-menu-item index="2-2-1"><span>Option 1</span></ods-menu-item>
                <ods-menu-item index="2-2-2"><span>Option 2</span></ods-menu-item>
                <ods-menu-item index="2-2-3"><span>Option 3</span></ods-menu-item>
            </ods-submenu>
            <ods-menu-item index="2-3"><span>Submenu Item 3</span></ods-menu-item>
            <ods-submenu index="2-4" menu-trigger="click">
                <span slot="title"><span>Submenu Item 4</span></span>
                <ods-menu-item index="1-4-1"><span>Option 1</span></ods-menu-item>
            </ods-submenu>
        </ods-submenu>

        <ods-menu-item index="3" disabled>
            <i class="ods-icon-user"></i>
            <span slot="title">Navigator Three</span>
        </ods-menu-item>
        <ods-menu-item index="4">
            <i class="ods-icon-user-role"></i>
            <span slot="title">Navigator Four</span>
        </ods-menu-item>
    </ods-menu>
</template>

<script>
export default {
  name: 'sideNavigation',
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleClose () {
      console.log('close')
    },
    handleOpen () {
      console.log('open')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
