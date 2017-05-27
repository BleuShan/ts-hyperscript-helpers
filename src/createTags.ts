import {
  CurriedCreateTagsFunction,
  HyperScriptHelperNamespace,
  HyperScriptHelperRootTag,
  HyperScriptFunction} from './types'
import createTag from  './createTag'
import {isNil} from './utils'

function createTags<T extends string, VNodeData, VNode>(h: HyperScriptFunction<VNodeData, VNode>): CurriedCreateTagsFunction<T, VNodeData, VNode>
function createTags<T extends string, VNodeData, VNode>(h: HyperScriptFunction<VNodeData, VNode>, tagNames: T[]): HyperScriptHelperNamespace<T, VNodeData, VNode>
function createTags<T extends string, VNodeData, VNode>(h: HyperScriptFunction<VNodeData, VNode>, tagNames: T[], rootTagName: T): HyperScriptHelperRootTag<T, VNodeData, VNode>
function createTags<T extends string, VNodeData, VNode>(h: HyperScriptFunction<VNodeData, VNode>, tagNames?: T[], rootTagName?: T) {
  const _createTag = createTag(h)

  function curriedCreateTags(names: T[], rootName?: T)  {
      const root = !isNil(rootName) ? _createTag(rootName) : Object.create(null)

      return names.reduce((result, tagName) => {
        result[tagName] = _createTag(tagName)
        return result
      }, root)
  }

  if (!isNil(tagNames)) {
    return !isNil(rootTagName) ? curriedCreateTags(tagNames, rootTagName) : curriedCreateTags(tagNames)
  }

  return curriedCreateTags
}

export default createTags
