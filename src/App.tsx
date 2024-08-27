import { useState } from 'react'
import {sampleData1} from './data/sample1'
import EditorWrapper from './components/EditorWrapper'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='h-screen w-full flex'>
      <div className='h-full w-[260px] shadow-sm border-r'></div>
      <div className='h-full flex-1 bg-[#f0f0f0] overflow-auto'>
        {/* <NodeEditor data={sampleData1} /> */}
        <EditorWrapper>
          <div className='w-[75%] min-h-[1300px] mx-auto bg-white shadow-md'>
            
          </div>
        </EditorWrapper>
      </div>
      <div className='h-full w-[260px] shadow-sm border-l'></div>
    </main>
  )
}

export default App
