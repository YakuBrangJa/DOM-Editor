import React, {createContext, PropsWithChildren, useState} from 'react'

export const EditorContext = createContext<{
  activeNodeId: string | null,
  activeParentNodeId: string | null,
  activeNodePath: string | null,
  setActiveNodeId: React.Dispatch<React.SetStateAction<string | null>>
  setActiveParentNodeId: React.Dispatch<React.SetStateAction<string | null>>
  setActiveNodePath: React.Dispatch<React.SetStateAction<string | null>>
}>(null)

function EditorContextProvider ({children}: PropsWithChildren) {
  const [activeNodeId, setActiveNodeId] = useState(null);
  const [activeParentNodeId, setActiveParentNodeId] = useState(null);
  const [activeNodePath, setActiveNodePath] = useState(null);


  return (
    <EditorContext.Provider value={{
      activeNodeId,
      activeParentNodeId,
      activeNodePath,
      setActiveNodeId,
      setActiveParentNodeId,
      setActiveNodePath,
    }}>{children}</EditorContext.Provider>
  )
}

export default EditorContextProvider