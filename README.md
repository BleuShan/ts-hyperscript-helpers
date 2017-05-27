### TS HyperScript-Helpers

[![Build Status](https://travis-ci.org/BleuShan/ts-hyperscript-helpers.svg?branch=master)](https://travis-ci.org/BleuShan/ts-hyperscript-helpers)

#### About

This is a generalized take on [Cycle.js HyperScript-Helpers](1). It uses its logic but it allows
for to use any HyperScript wrapper.

#### Example Usage

```ts
import {h} from 'your-favorite-hyperscript-wrapper'
import {patch} from 'your-favorite-vdom'
import {htmlhh} from 'ts-hyperscript-helpers'

const html = htmlhh(h)
const {head, body, h1, title} = html

const page = html([
  head([
    title('Hey!')
  ]),
  body([
    h1('Hello World!')
  ])
])

patch(document.querySelector('html'), page)
```


[1]: https://github.com/cyclejs/cyclejs/blob/master/dom/src/hyperscript-helpers.ts
