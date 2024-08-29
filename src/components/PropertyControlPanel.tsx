import React, {PropsWithChildren, useContext, useEffect, useMemo} from 'react'
import {TextBox} from './inputs/TextBox'
import {ColorPicker} from './inputs/ColorPicker'
import {NodeContext} from '../contexts/NodeContext'
import {EditorContext} from '../contexts/EditorContext'

function PropertyControlPanel () {
  const {nodes, getNode, updateNode} = useContext(NodeContext)
  const {activeNodeId} = useContext(EditorContext)

  const targetNodeValue = useMemo((() => {
    if(!activeNodeId) return null
    return getNode(activeNodeId)
  }), [activeNodeId, getNode])

  // const targetNodeValue = getNode(activeNodeId)
  // console.log('cp')
  useEffect(() => {
    console.log(targetNodeValue)
    console.log((parseFloat(targetNodeValue?.style.borderWidth?.slice(0, -2)) * 16))
  }, [targetNodeValue])

  return (
    <div className=' mt-10'>
      <Wrapper label='Background'>
        <ColorPicker label='Color'
          value={targetNodeValue?.style.backgroundColor || ''}
          onChange={color => {
            if(!activeNodeId) return;

            updateNode(activeNodeId, {
              style: {
                ...targetNodeValue?.style,
                backgroundColor: color
              }
            })
          }}
        />
      </Wrapper>
      <Wrapper label='Border'>
        <TextBox label='Width' type='number'
          value={(parseFloat(targetNodeValue?.style.borderWidth?.slice(0, -2)) * 16) || ''}
          onChange={e => {
            if(!activeNodeId) return;

            updateNode(activeNodeId, {
              style: {
                ...targetNodeValue?.style,
                borderWidth: `${Number(e.target.value) / 16}em`,
                borderStyle: 'solid',
                borderColor: targetNodeValue?.style.borderColor || '#333333'
              }
            })
          }}
        />
        <ColorPicker label='Color'
          value={targetNodeValue?.style.borderColor || ''}
          onChange={color => {
            if(!activeNodeId) return;

            updateNode(activeNodeId, {
              style: {
                ...targetNodeValue?.style,
                borderColor: color
              }
            })
          }}
        />
      </Wrapper>
    </div>
  )
}

export default PropertyControlPanel


const Wrapper = ({label, children}: PropsWithChildren & {label: string}) => {
  return (
    <div className='mx-4 mt-5 border-b pb-5'>
      <span className='text-[0.8rem] font-semibold'>{label}</span>
      <div className='pl-3'>
        {children}
      </div>
    </div>
  )
}


