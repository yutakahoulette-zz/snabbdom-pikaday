const h = require('snabbdom/h').default
const test = require('tape')

const pik = require('../index.js')

test('sets the data object into the snabbdom element', t => {
  t.plan(1)
  let p = pik({props: {name: 'country'}}, {})
  t.equal(p.data.props.name, 'country')
})


