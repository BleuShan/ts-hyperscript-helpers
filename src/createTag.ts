import {HyperScriptFunction, CurriedCreateTagFunction} from './types'
import {isNil} from './utils'
import isSelector from './isSelector'

function createTag<VNodeData, VNode>(h: HyperScriptFunction<VNodeData, VNode>): CurriedCreateTagFunction<VNodeData, VNode>
function createTag<VNodeData, VNode>(h: HyperScriptFunction<VNodeData, VNode>, tagName: string): HyperScriptFunction<VNodeData, VNode>
function createTag<VNodeData, VNode>(h: HyperScriptFunction<VNodeData, VNode>, tagName?: string) {
  function curriedCreateTag(tagName: string): HyperScriptFunction<VNodeData, VNode> {
    return function createNode(a?: any, b?: any, c?: any) {
      if (isSelector(a)) {
        const selector = `${tagName}${a}`

        if (!isNil(b) && !isNil(c)) {
          return h(selector, b, c)
        } else if (!isNil(b)) {
          return h(selector, b)
        }

        return h(selector, {} as VNodeData)
      }

      if (!isNil(c)) {
        return h(`${tagName}${a}`, b, c)
      } else if (!isNil(b)) {
        return h(tagName, a, b)
      } else if (!isNil(a)) {
        return h(tagName, a)
      }

      return h(tagName, {} as VNodeData)
    }
  }

  return !isNil(tagName) ? curriedCreateTag(tagName) : curriedCreateTag
}

export default createTag
