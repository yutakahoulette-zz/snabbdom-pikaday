var assert = require('assert')
var R = require("ramda")
var flyd = require("flyd")
var render = require('ff-core/render')
var h = require('snabbdom/h').default
var snabbdom =require('snabbdom')

var patch = snabbdom.init([ 
  require('snabbdom/modules/class').default 
, require('snabbdom/modules/props').default
, require('snabbdom/modules/style').default
, require('snabbdom/modules/eventlisteners').default 
])

suite('test-suite-name')

test('does something cool', () => {
  assert.equal('cool', 'cool')
})

