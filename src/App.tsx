import EditorWrapper from './components/EditorWrapper'
import Editor from './components/Editor'
import PropertyControlPanel from './components/PropertyControlPanel'

function App () {

  return (
    <main className='h-screen w-full flex'>
      <div className='h-full w-[260px] shadow-sm border-r'></div>
      <EditorWrapper>
        <Editor />
      </EditorWrapper>
      <div className='h-full w-[260px] shadow-sm border-l'>
        <PropertyControlPanel />
      </div>
    </main>
  )
}

export default App
