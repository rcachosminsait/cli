export const setBreadcrumbParams = to => {
  const breadcrumbParams = {
    userInfo: sessionStorage.getItem('userInfo'),
    randomStr: sessionStorage.getItem('randomStr')
  }
  to.matched.forEach(e => {
    for (const param in breadcrumbParams) {
      if (e.meta.breadcrumbParam === param) {
        to.params[e.meta.breadcrumbParam] = breadcrumbParams[param]
      }
    }
  })
}
