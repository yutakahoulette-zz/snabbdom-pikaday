# snabbdom-pikaday

Simple snabbdom wrapper for pikaday.

Falls back to native date input UI for mobile, while preserving the format transformation passed into pikaday.

Returns a function that takes two arguments:
- the snabbdom data object that gets set into an input element
- the config object for pikaday

Example:

```javascript
import snabbPik from 'snabbdom-pikaday'

const form = () => h('form',
  [
    h('label', 'Start Date'),
    snabbPik(
      {attrs: {name: 'start'}},
      {minDate: new Date(), format: 'Do MMMM YYYY'}
    )
  ]
)
```

Dependencies:
- snabbdom
- pikaday
- moment

Demo: http://yutakahoulette.com/snabbdom-pikaday/

For the demo, I stripped down the default pikaday stylesheet (index.css). It inherits font-family and removes things like colors and border-radiuses. You can include it with npm + postcss-import.
