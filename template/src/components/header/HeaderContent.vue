<template lang="pug">
  ods-main-header(
    headerLogoText="housekeeping"
    logoUrl="/"
    breadcrumbSeparator=">"
    actionsMenuIcon="overflow-menu"
    userMenuText="Pedro Páramo"
    :showSuitesMenu="true"
    :showBreadcrumbs="true"
    :environment="env"
    :showActionsMenu="true"
    :showUserMenu="true")
    template(slot="actions")
      header-actions
    template(slot="userAvatar")
      img(src="@/assets/images/header/avatar.jpg")
    template(slot="user")
      user-menu
    template(slot="suites")
      suites-menu
    template(slot="clientLogo")
      div.ods-main-header__client-logo
        img(
          src="@/assets/images/header/logo-cliente.svg"
          alt="logo")
    template(slot="custom")
      header-custom-content
    template(slot="notifications")
      header-notifications
</template>

<script>
import HeaderActions from '@/components/header/HeaderActions'
import UserMenu from '@/components/header/UserMenu'
import SuitesMenu from '@/components/header/SuitesMenu'
import HeaderCustomContent from '@/components/header/HeaderCustomContent'
import HeaderNotifications from '@/components/header/HeaderNotifications'

export default {
  name: 'HeaderContent',
  components: {
    HeaderActions,
    UserMenu,
    SuitesMenu,
    HeaderCustomContent,
    HeaderNotifications
  },
  computed: {
    env () {
      return process.env.ENV_TAG
    }
  }
}
</script>
