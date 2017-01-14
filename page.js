import snabbdom from 'snabbdom'
import h from 'snabbdom/h'
import render from 'ff-core/render'

import snabbPik from './index.js'

const view = () =>
  h('div', [
    h('section'
    , [
        h('p', 'Start Date')
      , snabbPik({attrs: {name: 'start'}}, {minDate: new Date(), format: 'Do MMMM YYYY'})
    ])
  , h('section'
    , [
        h('p', 'End Date')
      , snabbPik({attrs: {name: 'start'}}, {minDate: new Date(), format: 'Do MMMM YYYY'})
    ])
  ])

const patch = snabbdom.init([
  require("snabbdom/modules/attributes").default
])

const container = document.querySelector('#container')

render({container, state: {}, view, patch})

