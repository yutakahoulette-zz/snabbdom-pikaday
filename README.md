# snabbdom-pikaday

Simple snabbdom wrapper for pikaday.

Returns a function that takes two arguments:
1. the snabbdom data object that gets set into an input element
2. the config object for pikaday

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

Bonus!

Includes a more minimal and modern stylesheet for pikaday (used in demo).

