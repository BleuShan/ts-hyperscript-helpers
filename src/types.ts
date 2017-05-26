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

export type HyperScriptHelper<T extends string, VNodeData, VNode> =
  HyperScriptFunction<VNodeData, VNode> & {[K in T]: HyperScriptFunction<VNodeData, VNode> }
