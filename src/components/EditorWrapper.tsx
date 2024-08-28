import {ArrowUturnLeftIcon, ArrowUturnRightIcon} from '@heroicons/react/24/outline';
import React, {KeyboardEvent, PropsWithChildren, useEffect} from 'react'
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
      // editor.style.transform = `scale(${zoomLevel})`;
      editor.style.fontSize = `${16 * zoomLevel}px`

      // editor.style.transformOrigin = '0 0'; // Ensures zooming from the top-left corner
    }

    document.addEventListener('keydown', handleZoomControl);


    return () => {
      document.removeEventListener('keydown',handleZoomControl)
    }
  },[])


  return (
    <div className='h-full flex-1 bg-[#f0f0f0] relative'>
      <div id='editor-wrapper' className='w-full h-full text-[16px] origin-center mx-auto absolute overflow-scroll no-scrollbar'
      > 
        <div className='w-fit h-fit py-[150px] px-[200px] mx-auto'>
          {children}
        </div>
      </div>
      <div className='absolute top-5 left-[50%] -translate-x-[50%] flex rounded-lg shadow-md bg-white p-1 gap-2'>
        <button className='w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-md cursor-pointer text-gray-600'>
          <ArrowUturnLeftIcon width={20} height={20} className=' -rotate-45' />
        </button>
        <button className='w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-md cursor-pointer text-gray-600'>
          <ArrowUturnRightIcon width={20} height={20} className='rotate-45' />
        </button>
        <select className='w-20 h-9 flex items-center justify-center hover:bg-gray-100 rounded-md cursor-pointer px-1'>
          <option value="50%">50%</option>
          <option value="75">75%</option>
          <option value="100">100%</option>
        </select>
      </div>
    </div>

  )
}

export default EditorWrapper