import './common.fixture'
import {htmlTag} from './elements.fixture'
import {selector} from './selectors.fixture'
import {property} from 'jsverify'
import * as hyperscript from 'hyperscript'
import {HyperScriptFunction} from '../src/types'
import createTag from '../src/createTag'

describe('createTag', function() {
  describe('with hyperscript', function() {
    const h = (hyperscript as unknown) as HyperScriptFunction<object, Element>

    describe('without currying', function() {
      property('match the hyperscript call with tag', htmlTag, function(tag) {
        const node = createTag(h, tag)()
        const expectedNode = h(tag)

        node.outerHTML.should.equal(expectedNode.outerHTML)
        return true
      })

      property('match the hyperscript call with tag and selector', htmlTag, selector, function(
        tag,
        sel
      ) {
        const node = createTag(h, tag)(sel)
        const expectedNode = h(`${tag}${sel}`)

        node.outerHTML.should.equal(expectedNode.outerHTML)
        return true
      })
    })

    describe('currying', function() {
      const createHyperscriptTag = createTag(h)

      property('match the hyperscript call with tag', htmlTag, function(tag) {
        const node = createHyperscriptTag(tag)()
        const expectedNode = h(tag)

        node.outerHTML.should.equal(expectedNode.outerHTML)
        return true
      })

      property('match the hyperscript call with tag and selector', htmlTag, selector, function(
        tag,
        sel
      ) {
        const node = createHyperscriptTag(tag)(sel)
        const expectedNode = h(`${tag}${sel}`)

        node.outerHTML.should.equal(expectedNode.outerHTML)
        return true
      })
    })
  })
})
