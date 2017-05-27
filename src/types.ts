export type CurriedCreateTagFunction<VNodeData, VNode> =
  (tagName: string) => HyperScriptFunction<VNodeData, VNode>

export interface CurriedCreateTagsFunction<T extends string, VNodeData, VNode> {
  (tagNames: T[]): HyperScriptHelperNamespace<T, VNodeData, VNode>
  (tagNames: T[], rootTag: T): HyperScriptHelperRootTag<T, VNodeData, VNode>
}

export interface HyperScriptFunction<VNodeData, VNode> {
  (text: string): VNode
  (data: VNodeData): VNode
  (children: VNode[]): VNode
  (selectorOrData: string|VNodeData, text: string): VNode
  (selectorOrData: string|VNodeData, children: VNode[]): VNode
  (selector: string, data: VNodeData): VNode
  (selector: string, data: VNodeData, text: string): VNode
  (selector: string, data: VNodeData, children: VNode[]): VNode
  (): VNode
}

export type HyperScriptHelperNamespace<T extends string, VNodeData, VNode> =
{[K in T]: HyperScriptFunction<VNodeData, VNode>}

export type HyperScriptHelperRootTag<T extends string, VNodeData, VNode> =
HyperScriptFunction<VNodeData, VNode> & HyperScriptHelperNamespace<T, VNodeData, VNode>
