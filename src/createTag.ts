import {HyperScriptFunction, CurriedCreateTagFunction} from './types'
import {isEmpty} from 'ramda'
import {isNil} from './utils'
import isSelector from './isSelector'

function createTag<NodeData, Node>(
  h: HyperScriptFunction<NodeData, Node>
): CurriedCreateTagFunction<NodeData, Node>
function createTag<NodeData, Node>(
  h: HyperScriptFunction<NodeData, Node>,
  tagName: string
): HyperScriptFunction<NodeData, Node>
function createTag<NodeData, Node>(h: HyperScriptFunction<NodeData, Node>, tagName?: string) {
  function curriedCreateTag(tagName: string): HyperScriptFunction<NodeData, Node> {
    return function createNode(a?: any, b?: any, ...c: any[]): Node {
      if (isSelector(a)) {
        const selector = `${tagName}${a}`

        if (!isNil(b) && !isEmpty(c)) {
          return h(selector, b, ...c)
        } else if (!isNil(b)) {
          return h(selector, b)
        }

        return h(selector, {} as NodeData)
      }

      if (!isNil(b) && !isEmpty(c)) {
        return h(`${tagName}${a}`, b, ...c)
      } else if (!isNil(b)) {
        return h(tagName, a, b)
      } else if (!isNil(a)) {
        return h(tagName, a)
      }

      return h(tagName, {} as NodeData)
    }
  }

  if (!isNil(tagName)) {
    return curriedCreateTag(tagName)
  }

  return curriedCreateTag
}

export default createTag
