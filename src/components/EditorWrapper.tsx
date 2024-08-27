import React, {KeyboardEvent, PropsWithChildren, useEffect} from 'react'
import {EditorNode} from '../types/Node.type'

function EditorWrapper({children} : PropsWithChildren) {

  useEffect(() => {
    let zoomLevel = 1
    const handleZoomControl =  (event: KeyboardEvent) => {
      if((event.metaKey || event.ctrlKey) && event.key === '=') {
        // Increase zoom level
        zoomLevel += 0.1;
        updateZoom();
        event.preventDefault(); // Prevent default browser zoom
      } else if((event.metaKey || event.ctrlKey) && event.key === '-') {
        // Decrease zoom level
        zoomLevel -= 0.1;
        updateZoom();
        event.preventDefault(); // Prevent default browser zoom
      } else if((event.metaKey || event.ctrlKey) && event.key === '0') {
        // Reset zoom level
        zoomLevel = 1;
        updateZoom();
        event.preventDefault(); // Prevent default browser zoom
      }
    }

    function updateZoom () {
      const editor = document.querySelector('#editor-wrapper'); // Replace with your editor's selector
      editor.style.transform = `scale(${zoomLevel})`;
      editor.style.transformOrigin = 'center'; // Ensures zooming from the top-left corner
    }

    document.addEventListener('keydown', handleZoomControl);


    return () => {
      document.removeEventListener('keydown',handleZoomControl)
    }
  },[])
  return (
    <div id='editor-wrapper' className='w-full h-auto py-[80px] overflow-auto origin-center'
    >
    {children}
    </div>
  )
}

export default EditorWrapper