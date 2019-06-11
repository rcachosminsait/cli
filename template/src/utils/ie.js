// polyfill closest IE11
const closest = () => {
  if (!Element.prototype.closest) {
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector
    }
    Element.prototype.closest = function (s) {
      let el = this
      let ancestor = this
      if (!document.documentElement.contains(el)) return null
      do {
        if (ancestor.matches(s)) return ancestor
        ancestor = ancestor.parentElement
      } while (ancestor !== null)
      return null
    }
  }
}

// polyfill append IE11
const append = (arr) => {
  arr.forEach(item => {
    if (item.hasOwnProperty('append')) return
    Object.defineProperty(item, 'append', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function append () {
        const argArr = Array.prototype.slice.call(arguments)
        const docFrag = document.createDocumentFragment()
        argArr.forEach(argItem => {
          const isNode = argItem instanceof Node
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)))
        })
        this.appendChild(docFrag)
      }
    })
  })
}

// polyfill string includes IE11
const includes = () => {
  if (!String.prototype.includes) {
    // eslint-disable-next-line no-extend-native
    String.prototype.includes = function (search, start) {
      'use strict'
      if (typeof start !== 'number') start = 0
      return start + search.length > this.length ? false : this.indexOf(search, start) !== -1
    }
  }
}

export {
  closest,
  append,
  includes
}
