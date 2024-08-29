import React, {useState} from 'react'


const data = [
  {
    id: '1',
    name: 'name1'
  },
  {
    id: '2',
    name: 'name2'
  },
  {
    id: '3',
    name: 'name3'
  },
  {
    id: '4',
    name: 'name5'
  },
]
function test () {
  const [todoList, setTodoList] = useState(data)

  const findItemById = (id: string) => {
    return todoList.find(item => item.id === id)
  }

  const findItemByIndex = (index: number) => {
    return todoList[index]
  }


  return (
    <div>
      {todoList.map((item, index) => (
        <li key={item.id}
          onClick={() => {
            findItemById(item.id)
            findItemByIndex(index)
          }}
        >{item.name}</li>
      ))}
    </div>
  )
}

export default test