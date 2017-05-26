import {HyperScriptHelper, HyperScriptFunction} from './types'
import node from  './node'

export default function nodes<VNodeData, VNode>(h: HyperScriptFunction<VNodeData, VNode>) {
  const createTag = node(h)

  return function createTags<T extends string>(tagNames: T[], rootTag: T) {
    return tagNames.reduce((result, tagName) => {
        result[tagName as string] = createTag(tagName)

        return result
      }, createTag(rootTag) as HyperScriptHelper<T, VNodeData, VNode>)
  }
}
