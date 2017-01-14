# snabbdom-pikaday

Simple snabbdom wrapper for pikaday.

Returns a function that takes two arguments:
- the snabbdom data object that gets set into an input element
- the config object for pikaday

Example:

```es6
import snabbPik from 'snabbdom-pikaday'

const form = () => h('form'
, [
    h('label', 'Start Date')
  , snabbPik(
      {attrs: {name: 'start'}}
    , {minDate: new Date(), format: 'Do MMMM YYYY'}
    )
  ]
)
```

Demo: yutakahoulette.github.io/snabbdom-demo

Bonus: a more minimal and modern stylesheet for pikaday (used in demo).

