import 'mocha'
import {property, nestring, string, random} from 'jsverify'
import {replace, complement} from 'ramda'
import isSelector from '../src/isSelector'

const selectorName = replace(/^[.#]/, '')
const className = nestring.smap(s => `.${s}`, selectorName)
const id = nestring.smap(s => `#${s}`, selectorName)
const nonSelector = string.smap(selectorName, s => random(0, 100) > 50 ? `#${s}` : `.${s}`)

describe('isSelector', () => {
  property('should return true with a class name', className, isSelector)
  property('should return true with a id', id, isSelector)
  property('should return false with any non-selector string', nonSelector, complement(isSelector))
})
