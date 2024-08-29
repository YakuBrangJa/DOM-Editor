import React, {createContext, PropsWithChildren, useState} from 'react'

export const EditorContext = createContext<{
  activeNodeId: string | null,
  activeParentNodeId: string | null,
  setActiveNodeId: React.Dispatch<React.SetStateAction<null>>
  setActiveParentNodeId: React.Dispatch<React.SetStateAction<null>>
}>(null)

function EditorContextProvider ({children}: PropsWithChildren) {
  const [activeNodeId, setActiveNodeId] = useState(null);
  const [activeParentNodeId, setActiveParentNodeId] = useState(null);


  return (
    <EditorContext.Provider value={{
      activeNodeId,
      activeParentNodeId,
      setActiveNodeId,
      setActiveParentNodeId,
    }}>{children}</EditorContext.Provider>
  )
}

export default EditorContextProvider