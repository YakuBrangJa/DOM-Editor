import {useEffect, useState} from 'react';
import {EditorNode} from '../types/node.types';

type Props = {
  nodes: EditorNode[]
}

const Editor = ({nodes}: Props) => {
// const [nodes, setNodes] = useState(data);
  const [activeNodeId, setActiveNodeId] = useState(null);
  const [activeParentNodeId, setActiveParentNodeId] = useState(null);

  const handleNodeClick = (id, parentId) => {
    setActiveNodeId(id);
    setActiveParentNodeId(parentId)
  };

  useEffect(() => {
    let path = '0.1'
    let pathCoordinates = path.split('.').map(Number)

    // pathCoordinates.reduce((prev,cur) => {
    //   return nodes[Number(cur)]
    // })
    let currentNode = nodes;
    pathCoordinates.map((segment, i) => {
      const nodeList = i === 0 ? nodes : (currentNode.children || [])
      currentNode = nodeList[segment]

    })

  }, [nodes])

  useEffect(() => {
    type TestNode = {
      type: string;
      path: string;
      children: TestNode[];
    };

    const test: TestNode[] = [
      {
        type: 'block',
        path: '0',
        children: [
          {
            type: 'block',
            path: '0.0',
            children: []
          },
          {
            type: 'block',
            path: '0.1',
            children: [
              {
                type: 'block',
                path: '0.1.0',
                children: []
              }
            ]
          },
          {
            type: 'block',
            path: '0.2',
            children: []
          }
        ]
      }
    ];

    function updateNodeByPath (
      nodes: TestNode[],
      path: string,
      newData: Partial<TestNode>
    ): boolean {
      const segments = path.split('.').map(Number);

      let currentNode: TestNode | null = null;

      for(let i = 0; i < segments.length; i++) {
        const segment = segments[i];
        const nodeList = i === 0 ? nodes : currentNode?.children || [];
        currentNode = nodeList[segment];

        if(!currentNode) {
          return false; // Path is invalid
        }
      }

      // Directly update the target node
      Object.assign(currentNode, {
        type: 'updated'
      });

      return true; // Update successful
    }

    // Example usage
    const updated = updateNodeByPath(test, '0.1', {type: 'updated-block'});

    if(updated) {
      console.log('Node updated successfully:', test);
    } else {
      console.log('Node not found or update failed');
    }

  }, [])
  // const updateNodeStyle = (id, property, value) => {
  //   const updateStyles = (node) => {
  //     if(node.id === id) {
  //       return {
  //         ...node,
  //         style: {
  //           ...node.style,
  //           [property]: value,
  //         }
  //       };
  //     }

  //     return {
  //       ...node,
  //       children: node.children.map(updateStyles),
  //     };
  //   };

  //   setNodes(updateStyles(nodes));
  // };

  const style = (node: EditorNode, parentType: 'block' | 'column' | 'row' | 'grid' | null): React.CSSProperties => {
    let result: React.CSSProperties = node.style

    // Render placeholder block
    if(node.type !== 'content' && !node.layout.type) {
      result.backgroundColor = '#0099ff33'
      result.minHeight = parentType === 'column' ? '7em' : '15em'
      result.border = activeNodeId !== node.id ? '1px dashed #0099ff99' : ''
    }

    if(node.type ===
      'content') {

    } else {
      result.display = node.layout.type !== 'block' ? 'grid' : ''
      if(node.layout.type === 'column') result.display = 'flex'
      result.gridTemplateColumns = node.layout.type === 'row' ? `repeat(${node.children.length}, 1fr)` : ''
      // result.gridTemplateRows = node.layout.type === 'column' ? `repeat(${node.children.length}, 1fr)` : ''
      result.alignItems = node.style.contentAlign
      result.flexDirection = node.layout.type === 'row' ? 'row' : 'column'
      result.gap = node.layout.type !== 'block' ? node.layout.gap + 'em' : ''
      result.flex = '1'
      result.flexShrink = '0'
    }

    return result
  }

  const renderNode = (node: EditorNode, parent?: {
    type: 'block' | 'column' | 'row' | 'grid' | null
    id: string
  }) => (
    <div
      key={node.id}
      id={node.id}
      onClick={(e) => {
        e.stopPropagation()
        handleNodeClick(node.id, parent?.id)
      }}
      className="text-inherit relative cursor-default [&:hover:not(:has(div:hover))]:outline outline-[1px] outline-[#0099ff] "
      style={{
        outline: activeNodeId === node.id ? '1px solid #0099ff' : (activeParentNodeId === node.id ? '1px dashed #ff00f7' : ''),
        // outlineOffset: activeParentNodeId === node.id ? '1px' : '',
        ...style(node, parent?.type)
      }}
    >
      {node.type === 'content' ? (
        <>
          {node.contentType === 'text' &&
            <p
              className='focus-within:outline-none focus-visible:outline-none focus:outline-none'
              style={{
                ...node.contentStyle,
              }}>{node.content}</p>}
          {node.contentType === 'button' &&
            <button className='cursor-default' style={{
              ...node.contentStyle,
            }}>{node.content}</button>}
        </>
      )
        :
        node.children.map(child => renderNode(child, {
          type: node.layout.type,
          id: node.id
        }))}
      {activeNodeId === node.id &&
        <div className='absolute -top-[24px] -right-[2px] h-[23px] bg-[#0099ff] flex items-center justify-center px-2 text-[14px] text-white'>
          {node.id}
        </div>}
      {activeParentNodeId === node.id &&
        <div className='absolute -top-[24px] -left-[1px] h-[23px] bg-[#ff00f7] flex items-center justify-center px-2 text-[14px] text-white'>
          {node.id}
        </div>}
    </div>
  );

  return (
    <div className='w-[50em] min-h-[80em] mx-auto bg-white shadow-md'>
      <div id="editor">
        {nodes.map(node => renderNode(node))}
      </div>
    </div>
  );
};

export default Editor;
