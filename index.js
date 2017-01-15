import h from 'snabbdom/h'
import pik from 'pikaday'

const merge = (obj1, obj2) => {
  for (var attrname in obj2) { 
    obj1[attrname] = obj2[attrname] 
  }
  return obj1
}

const bindPik = config => vnode => {
  config = merge(config || {}, {field: vnode.elm})
  new pik(config)
}

module.exports = (data, config) => {
  data = merge(data || {}, {hook: {insert: bindPik(config)}})
  return h('input', data)
}

