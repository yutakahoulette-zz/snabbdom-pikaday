import R from 'ramda'
import h from 'snabbdom/h'
import pik from 'pikaday'

const bindPik = config => vnode => {
  config = R.merge(config || {}, {field: vnode.elm})
  new pik(config)
}

module.exports = (data, config) => {
  data = R.merge(data || {}, {hook: {insert: bindPik(config)}})
  return h('input', data)
}

