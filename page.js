import snabbdom from 'snabbdom'
import h from 'snabbdom/h'
import render from 'ff-core/render'

import snabbPik from './index.js'

const format = 'MM / DD / YYYY'

const view = () =>
  h('div', [
    h('h2', 'snabbdom pikaday')
  , h('section'
    , [
        h('p', 'start date')
      , snabbPik({attrs: {name: 'start'}}, {minDate: new Date(), format})
    ])
  , h('section'
    , [
        h('p', 'end date')
      , snabbPik({attrs: {name: 'start'}}, {minDate: new Date(), format})
    ])
  ])

const patch = snabbdom.init([
  require("snabbdom/modules/attributes").default
])

const container = document.querySelector('#container')

render({container, state: {}, view, patch})

