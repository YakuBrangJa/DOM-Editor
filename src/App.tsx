import {useState} from 'react'
import EditorWrapper from './components/EditorWrapper'
import Editor from './components/Editor'
import {sampleData2} from './data/sample2'
import {sampleData1} from './data/sample1'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='h-screen w-full flex'>
      <div className='h-full w-[260px] shadow-sm border-r'></div>
        <EditorWrapper>
        <Editor nodes={sampleData1} />
      </EditorWrapper>
      <div className='h-full w-[260px] shadow-sm border-l'></div>
    </main>
  )
}

export default App
