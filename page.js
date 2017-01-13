import snabbdom from 'snabbdom'
import h from 'snabbdom/h'
import render from 'ff-core/render'

import ffPikaday from './index.js'

const view = () =>
  h('div', [
    ffPikaday({attrs: {name: 'start'}}, {format: 'Do MMMM YYYY'})
  , ffPikaday({attrs: {name: 'end'}}, {format: 'Do MMMM YYYY'})
  ])

const patch = snabbdom.init([
  require("snabbdom/modules/attributes").default
])

const container = document.querySelector('#container')


render({container, state: {}, view, patch})

