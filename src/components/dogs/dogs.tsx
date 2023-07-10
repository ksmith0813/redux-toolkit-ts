import { useState, ChangeEvent } from 'react'
import { Button, Input, message } from 'antd'
import { Dog } from 'store/slices/dogSlice'
import { useDogReducer } from 'store/hooks/useDogReducer'

export const Dogs = () => {
  const [name, setName] = useState('')
  const { dogState, addDogName } = useDogReducer()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)

  const onAddDog = () => {
    if (!name) {
      message.destroy()
      message.error('Please add a dog name')
      return
    }

    addDogName(name)
    setName('')
  }

  const dogs = dogState.map((dog: Dog, index: number) => (
    <div key={index} className='pt-100 medium-text'>
      {dog.name}
    </div>
  ))

  const noDogs = !dogState.length && <div className='pt-100 light-text'>No Dogs have been added</div>

  return (
    <div className='m-200'>
      <Input onChange={onChange} value={name} placeholder='Add Dog' style={{ width: 200 }} />
      <Button onClick={onAddDog} type='primary' className='ml-100'>
        Add
      </Button>
      <div className='pt-200'>
        <div>List of Dogs</div>
        {dogs}
        {noDogs}
      </div>
    </div>
  )
}
