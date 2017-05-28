import {property} from 'jsverify'
import {complement} from 'ramda'
import {className, nonSelector, id} from './selectors.fixture'
import isSelector from '../src/isSelector'

describe('isSelector', function () {
  property('returns true with a class name', className, isSelector)
  property('returns true with a id', id, isSelector)
  property('returns false with any non-selector string', nonSelector, complement(isSelector))
})
