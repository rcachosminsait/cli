<template lang="pug">
  ods-main-header(
    headerLogoText="housekeeping"
    logoUrl="/"
    breadcrumbSeparator=">"
    actionsMenuIcon="overflow-menu"
    userMenuText="Pedro Páramo"
    clientLogo="header/logo-cliente.svg"
    :showSuitesMenu="true"
    :showBreadcrumbs="true"
    environment="dev"
    :showNotifications="true"
    :notifications="notifications"
    :showActionsMenu="true"
    :showUserMenu="true")
    template(slot="actions")
      header-actions
    template(slot="user")
      user-menu
    template(slot="suites")
      suites-menu
</template>

<script>
import OdsMainHeader from '@/components/main-header/MainHeader'
import notificationsDemo from '../../../static/notificationsDemo.json'
import HeaderActions from '@/components/header/HeaderActions'
import UserMenu from '@/components/header/UserMenu'
import SuitesMenu from '@/components/header/SuitesMenu'
import * as _ from 'lodash'

export default {
  name: 'HeaderContent',
  components: {
    OdsMainHeader,
    HeaderActions,
    UserMenu,
    SuitesMenu
  },
  computed: {
    notifications () {
      return _.orderBy(notificationsDemo, ['status', 'date'], ['asc', 'desc'])
    }
  }
}
</script>
