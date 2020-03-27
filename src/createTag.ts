import {HyperScriptFunction, CurriedCreateTagFunction} from './types'
import {isEmpty, isNil} from 'ramda'
import isSelector from './isClassOrIdSelector'

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

        return h(selector, {} as any)
      }

      if (typeof a === 'string' && !isNil(b) && !isEmpty(c)) {
        return h(`${tagName}${a}`, b, ...c)
      } else if (!isNil(b)) {
        return h(tagName, a, b)
      } else if (!isNil(a)) {
        return h(tagName, a)
      }

      return h(tagName, {} as any)
    }
  }

  if (!isNil(tagName)) {
    return curriedCreateTag(tagName)
  }

  return curriedCreateTag
}

export default createTag
