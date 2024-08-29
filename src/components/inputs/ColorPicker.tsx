import React, {useEffect, useRef, useState} from 'react';
import {SketchPicker} from 'react-color';
import {useOnClickOutside} from 'usehooks-ts';

interface Props {
  label?: string
  onChange?: (color: string) => void
  value?: string
}

export function ColorPicker ({label, value, onChange}: Props) {
  // const [colorValue, setColorValue] = useState<string | undefined>(value)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const pickerRef = useRef(null)
  useOnClickOutside(pickerRef, () => setIsOpen(false))

  const changeHandler = (color: string) => {
    if(onChange) {
      onChange(color)
    }

    // if(!value) {
    //   setColorValue(color)
    // }
  }

  // useEffect(() => {
  //   console.log(colorValue)
  // }, [colorValue])

  return (
    <div className='flex items-center justify-between mt-3 text-[0.8rem] relative' ref={pickerRef}>
      <label htmlFor='' className='text-gray-500'>{label}</label>
      <span className='w-[120px] h-8 rounded-md text-gray-700 bg-gray-200/80 focus-within:outline-blue-500 focus-within:outline focus-within:outline-1 flex items-center px-[0.4rem] gap-2'>
        <button className='w-5 h-5 rounded border border-gray-300 bg-white' style={{
          backgroundColor: value
        }}
          onClick={() => setIsOpen(prev => !prev)}
        ></button>
        <input type="text" className='bg-transparent flex-1 min-w-0 focus:outline-none' value={value}
          onChange={(e) => changeHandler(e.target.value)}
        />
      </span>
      {isOpen && <SketchPicker
        color={value}
        onChangeComplete={(color) => {
          changeHandler(color.hex)
        }}
        className='absolute -left-[250px] top-[20px]'
      />}
    </div>
  );
}