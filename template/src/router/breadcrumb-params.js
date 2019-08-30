const breadcrumbParams = {userInfo: '', randomStr: ''}

export const setBreadcrumbParams = function (to) {
  to.matched.forEach(e => {
    for (const param in breadcrumbParams) {
      if (e.meta.breadcrumbParam === param) {
        to.params[e.meta.breadcrumbParam] = breadcrumbParams[param]
      }
    }
  })
}
export const refreshParam = function (routes, param, value) {
  breadcrumbParams[param] = value
  // When refreshParam is call after the router is resolve it is necesary search the key in routes to change meta.compoundBreadcrumb that it is the text that is render in the breadcrumb
  routes.forEach(route => {
    if (route.meta && route.meta.breadcrumbParam === param) {
      route.meta.compoundBreadcrumb = value
    }
  })
}
