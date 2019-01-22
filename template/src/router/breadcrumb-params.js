const breadcrumbParams = {
  date: '01/01/1970',
  myParam: 'Another custom param'
}

export const setBreadcrumbParams = to => {
  to.matched.forEach(e => {
    for (const param in breadcrumbParams) {
      if (e.meta.breadcrumbParam === param) {
        to.params[e.meta.breadcrumbParam] = breadcrumbParams[param]
      }
    }
  })
}
