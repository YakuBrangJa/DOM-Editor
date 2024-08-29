import React, {PropsWithChildren} from 'react'
import NodeContextProvider from './NodeContext'
import EditorContextProvider from './EditorContext'

function ContextProvider ({children}: PropsWithChildren) {
  return (
    <NodeContextProvider>
      <EditorContextProvider>
        {children}
      </EditorContextProvider>
    </NodeContextProvider>

  )
}

export default ContextProvider