import { useState, ChangeEvent } from 'react'
import { Button, Input, message } from 'antd'
import { Cat } from 'store/slices/catSlice'
import { Dog } from 'store/slices/dogSlice'

interface AnimalProps {
  type: string
  animals: Cat[] | Dog[]
  addName: (name: string) => void
}

export const Animals = ({ type, animals, addName }: AnimalProps) => {
  const [name, setName] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)

  const onAddName = () => {
    if (!name) {
      message.destroy()
      message.error(`Please add a ${type} name`)
      return
    }

    addName(name)
    setName('')
  }

  const animalList = animals.map((animal: Cat | Dog, index: number) => (
    <div key={index} className='pt-100 medium-text'>
      {animal.name}
    </div>
  ))

  const noAnimals = !animals.length && <div className='pt-100 light-text'>No {type} have been added</div>

  return (
    <div className='m-200'>
      <Input
        onChange={onChange}
        onPressEnter={onAddName}
        value={name}
        placeholder={`Add a ${type} name`}
        style={{ width: 200 }}
      />
      <Button onClick={onAddName} type='primary' className='ml-100'>
        Add
      </Button>
      <div className='pt-200'>
        <div>List of {type}</div>
        {animalList}
        {noAnimals}
      </div>
    </div>
  )
}
