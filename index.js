import h from 'snabbdom/h'
import p from 'pikaday'
import m from 'moment'

const merge = (obj1, obj2) => {
  for (var attrname in obj2) { obj1[attrname] = obj2[attrname] }
  return obj1
}

const supportsDateInput = () => {
  let input = document.createElement('input')
  input.setAttribute('type','date')
  const notADateValue = 'not-a-date'
  input.setAttribute('value', notADateValue)
  return (input.value !== notADateValue)
}

const supportsTouch = () => 
  'ontouchstart' in document.documentElement

const bindPik = config => vnode => {
  config = merge(config || {}, {field: vnode.elm})
  new p(config)
}

const setDate = config => ev => {
  const val = ev.target.value
  const min = config.minDate ? m(config.minDate) : m()
  const date = m(val)._isValid
    ? m(val)
    : min 
 
  const formattedDate = date.format(config.format || 'MM/DD/YYYY')
  const visibleInput = ev.target.parentElement.querySelectorAll('input')[0]
  visibleInput.value = formattedDate
}

const minMax = minMax => minMax ? m(minMax).format('YYYY-MM-DD') : ''

const mobileVersion = (data, config) =>
  h('div', {style: { position: 'relative'}}, [
    h('input', data || {})
  , h('input', {
      props: {
        type: 'date'
      , max: minMax(config.maxDate) 
      , min: minMax(config.minDate) 
      }
    , hook: {insert: (vnode) => {
          const el = vnode.elm
          const parentWidth = el.parentElement.offsetWidth
          el.style.width = parentWidth + 'px'
        }
      }
    , style: {
        opacity: '0'
      , position: 'absolute'
      , left: '0px'
      , top: '0px'
      , width: '100%'
      , height: '100%'
      }
    , on: {input: setDate(config)}
    })
  ])

module.exports = (data, config) => {
  if(supportsDateInput() && supportsTouch()) return mobileVersion(data, config)

  data = merge(data || {}, {
    attrs: {readonly: true}
  , hook: {insert: bindPik(config)}
  })
  return h('input', data)
}

