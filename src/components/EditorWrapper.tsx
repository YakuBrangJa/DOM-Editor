import {ArrowUturnLeftIcon, ArrowUturnRightIcon, MagnifyingGlassCircleIcon, MagnifyingGlassMinusIcon, MagnifyingGlassPlusIcon} from '@heroicons/react/24/outline';
import React, {KeyboardEvent, PropsWithChildren, useCallback, useEffect, useState} from 'react'
function EditorWrapper({children} : PropsWithChildren) {
  const [zoomLevel, setZoomLevel] = useState(1)


  const updateZoom = useCallback((level) => {
    const editor = document.querySelector('#editor-wrapper');
    editor.style.fontSize = `${16 * level}px`

  }, [])

  useEffect(() => {
    updateZoom(zoomLevel)
  }, [zoomLevel, updateZoom])

  useEffect(() => {
    const handleZoomControl =  (event: KeyboardEvent) => {
      if((event.metaKey || event.ctrlKey) && event.key === '=') {
        // Increase zoom level
        if(zoomLevel <= 1.5) setZoomLevel(prev => prev + 0.1)
        // zoomLevel += 0.1;
        updateZoom(zoomLevel);
        event.preventDefault(); // Prevent default browser zoom
      } else if((event.metaKey || event.ctrlKey) && event.key === '-') {
        // Decrease zoom level
        if(zoomLevel >= 0.5) setZoomLevel(prev => prev - 0.1)
        // zoomLevel -= 0.1;
        updateZoom(zoomLevel);
        event.preventDefault(); // Prevent default browser zoom
      } else if((event.metaKey || event.ctrlKey) && event.key === '0') {
        // Reset zoom level
        setZoomLevel(1)
        // zoomLevel = 1;
        updateZoom(zoomLevel);
        event.preventDefault(); // Prevent default browser zoom
      }
    }

    // function updateZoom () {
    //   const editor = document.querySelector('#editor-wrapper'); // Replace with your editor's selector
    //   // editor.style.transform = `scale(${zoomLevel})`;
    //   editor.style.fontSize = `${16 * zoomLevel}px`

    //   // editor.style.transformOrigin = '0 0'; // Ensures zooming from the top-left corner
    // }

    document.addEventListener('keydown', handleZoomControl);

    return () => {
      document.removeEventListener('keydown',handleZoomControl)
    }
  }, [zoomLevel, updateZoom])


  return (
    <div className='h-full flex-1 bg-[#f0f0f0] relative'>
      <div id='editor-wrapper' className='w-full h-full text-[16px] origin-center mx-auto absolute overflow-scroll no-scrollbar'
      > 
        <div className='w-fit h-fit py-[150px] px-[200px] mx-auto'>
          {children}
        </div>
      </div>

      <div className='absolute top-4 left-[50%] -translate-x-[50%] flex rounded-lg shadow-md bg-white p-1 text-gray-500'>
        <div className='flex items-center gap-1 px-2 border-r'>
          <button className='w-9 h-9 flex items-center justify-center  rounded-md cursor-pointer hover:text-blue-500'>
            <ArrowUturnLeftIcon width={20} height={20} className=' -rotate-45' />
          </button>
          <button className='w-9 h-9 flex items-center justify-center  rounded-md cursor-pointer hover:text-blue-500'>
            <ArrowUturnRightIcon width={20} height={20} className='rotate-45' />
          </button>
        </div>
        <div className='flex items-center gap-3 px-3'>
          <button className='text-gray-500 hover:text-blue-500'
            onClick={() => {
              if(zoomLevel > 0.6) setZoomLevel(prev => prev - 0.1)
            }}
          >
            <MagnifyingGlassMinusIcon width={20} height={20} />
          </button>
          <span className='w-10 text-end'>{Math.round(zoomLevel * 100)}%</span>
          <button className='text-gray-500 hover:text-blue-500'
            onClick={() => {
              if(zoomLevel <= 1.5) setZoomLevel(prev => prev + 0.1)
            }
            }
          >
            <MagnifyingGlassPlusIcon width={20} height={20} />
          </button>
        </div>
      </div>
    </div>

  )
}

export default EditorWrapper