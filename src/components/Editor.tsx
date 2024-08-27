import {useState} from 'react';
import {EditorNode} from '../types/Node.type';

type Props = {
  data: EditorNode[]
}

const Editor = ({data}: Props) => {
  const [nodes, setNodes] = useState(data);
  const [activeNodeId, setActiveNodeId] = useState(null);

  const handleNodeClick = (id) => {
    setActiveNodeId(id);
  };

  const updateNodeStyle = (id, property, value) => {
    const updateStyles = (node) => {
      if(node.id === id) {
        return {
          ...node,
          style: {
            ...node.style,
            [property]: value,
          }
        };
      }

      return {
        ...node,
        children: node.children.map(updateStyles),
      };
    };

    setNodes(updateStyles(nodes));
  };

  const renderNode = (node: EditorNode) => (
    <div
      key={node.id}
      id={node.id}
      contentEditable
      // style={node.style}
      onClick={() => handleNodeClick(node.id)}
      className={activeNodeId === node.id ? 'selected' : ''}
    >
      {node.content}
      {node.children.map(renderNode)}
    </div>
  );

  return (
    <div>
      <div id="editor">
        {renderNode(nodes)}
      </div>

      {activeNodeId && (
        <div id="editor-controls">
          <label>
            Background Color:
            <input
              type="color"
              onChange={(e) => updateNodeStyle(activeNodeId, 'backgroundColor', e.target.value)}
            />
          </label>
          <label>
            Padding:
            <input
              type="text"
              onChange={(e) => updateNodeStyle(activeNodeId, 'padding', e.target.value)}
            />
          </label>
          <label>
            Margin:
            <input
              type="text"
              onChange={(e) => updateNodeStyle(activeNodeId, 'margin', e.target.value)}
            />
          </label>
          {/* Add more style inputs as needed */}
        </div>
      )}
    </div>
  );
};

export default Editor;
