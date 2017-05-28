export type CurriedCreateTagFunction<NodeData, Node> =
  (tagName: string) => HyperScriptFunction<NodeData, Node>

export interface CurriedCreateTagsFunction<T extends string, NodeData, Node> {
  (tagNames: T[]): HyperScriptHelperNamespace<T, NodeData, Node>
  (tagNames: T[], rootTag: T): HyperScriptHelperRootTag<T, NodeData, Node>
}

export interface HyperScriptFunction<NodeData, Node> {
  (): Node
  (text: string): Node
  (data: NodeData): Node
  (children: Node[]): Node
  (selectorOrData: string|NodeData, text: string): Node
  (selectorOrData: string|NodeData, children: Node[]): Node
  (selector: string, data: NodeData): Node
  (selector: string, data: NodeData, text: string): Node
  (selector: string, data: NodeData, children: Node[]): Node
  (selector: string, data?: NodeData, ...children: Node[]): Node
}

export type HyperScriptHelperNamespace<T extends string, NodeData, Node> =
  {[K in T]: HyperScriptFunction<NodeData, Node>}

export type HyperScriptHelperRootTag<T extends string, NodeData, Node> =
  HyperScriptFunction<NodeData, Node> & HyperScriptHelperNamespace<T, NodeData, Node>
