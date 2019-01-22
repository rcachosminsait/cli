<template lang="pug">
  ods-main-header(
    headerLogoText="housekeeping"
    logoUrl="/"
    breadcrumbSeparator=">"
    actionsMenuIcon="overflow-menu"
    userMenuText="Pedro Páramo"
    :showSuitesMenu="true"
    :showBreadcrumbs="true"
    environment="dev"
    :showNotifications="true"
    :notifications="notifications"
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
</template>

<script>
import notificationsDemo from '../../../static/notificationsDemo.json'
import HeaderActions from '@/components/header/HeaderActions'
import UserMenu from '@/components/header/UserMenu'
import SuitesMenu from '@/components/header/SuitesMenu'
import HeaderCustomContent from '@/components/header/HeaderCustomContent'
import * as _ from 'lodash'

export default {
  name: 'HeaderContent',
  components: {
    HeaderActions,
    UserMenu,
    SuitesMenu,
    HeaderCustomContent
  },
  computed: {
    notifications () {
      return _.orderBy(notificationsDemo, ['status', 'date'], ['asc', 'desc'])
    }
  }
}
</script>
