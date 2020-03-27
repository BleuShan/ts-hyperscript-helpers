import {property} from 'jsverify'
import {complement} from 'ramda'
import {className, nonSelector, id} from './selectors.fixture'
import isClassOrIdSelector from '../src/isClassOrIdSelector'

describe('isClassOrIdSelector', function () {
  property('returns true with a class name', className, isClassOrIdSelector)
  property('returns true with a id', id, isClassOrIdSelector)
  property(
    'returns false with any non-selector string',
    nonSelector,
    complement(isClassOrIdSelector)
  )
})
