import React, {createContext, PropsWithChildren, useState} from 'react'
import {sampleData1} from '../data/sample1'
import {EditorNode} from '../types/node.types'

export const NodeContext = createContext<{
  nodes: EditorNode[]
  updateNode: (nodeId: string, node: Partial<EditorNode>) => void
  getNode: (path: string) => EditorNode | null
}>(null)

function NodeContextProvider ({children}: PropsWithChildren) {
  const [nodes, setNodes] = useState(sampleData1)

  const updateNode = (nodeId: string, nodeChanges: Partial<EditorNode>) => {
    const updatedTree = update(nodes, nodeId, node => ({
      ...node,
      ...nodeChanges,
    }));

    setNodes(updatedTree);
  }

  function getNode (path: string): EditorNode | null {
    const segments = path.split('.').map(Number);

    let currentNode: EditorNode | null = null;

    for(let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      const nodeList: EditorNode[] = i === 0 ? nodes : currentNode?.children || [];
      currentNode = nodeList[segment] || null;

      if(!currentNode) {
        return null; // Path is invalid
      }
    }

    return currentNode;
  }

  return (
    <NodeContext.Provider value={{nodes, updateNode, getNode}}>{children}</NodeContext.Provider>
  )
}



export default NodeContextProvider

const update = (nodes: EditorNode[], nodeId: string, updateFn: (node: EditorNode) => Partial<EditorNode>) => {

  return nodes.map(node => {
    if(node.id === nodeId) {
      // Apply the update function to the node
      return {...node, ...updateFn(node)};
    } else {
      // Recursively update the children
      if(node.children) {
        return {...node, children: update(node.children, nodeId, updateFn)};
      }
    }

    return node;
  });
};