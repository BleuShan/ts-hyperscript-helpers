import {HyperScriptFunction} from './types'
import {complement, isNil} from 'ramda'
import isSelector from './isSelector'

const isNotNil = complement(isNil)

export default function node<VNodeData, VNode>(h: HyperScriptFunction<VNodeData, VNode>) {
  return function createTag(tagName: string): HyperScriptFunction<VNodeData, VNode> {
    return function (a?: any, b?: any, c?: any) {
      if (isSelector(a)) {
        const selector = `${tagName}${a}`

        if (isNotNil(b) && isNotNil(c)) {
          return h(selector, b, c)
        } else if (isNotNil(b)) {
          return h(selector, b)
        }

        return h(selector, {} as VNodeData)
      }

      if (isNotNil(c)) {
        return h(`${tagName}${a}`, b, c)
      } else if (isNotNil(b)) {
        return h(tagName, a, b)
      } else if (isNotNil(a)) {
        return h(tagName, a)
      }

      return h(tagName, {} as VNodeData)
    }
  }
}
