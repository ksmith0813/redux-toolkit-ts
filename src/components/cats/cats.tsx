import { useState, ChangeEvent } from 'react'
import { Button, Input, message } from 'antd'
import { Cat } from 'store/slices/catSlice'
import { useCatReducer } from 'store/hooks/useCatReducer'

export const Cats = () => {
  const [name, setName] = useState('')
  const { catState, addCatName } = useCatReducer()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)

  const onAddCat = () => {
    if (!name) {
      message.destroy()
      message.error('Please add a cat name')
      return
    }

    addCatName(name)
    setName('')
  }

  const cats = catState.map((cat: Cat, index: number) => (
    <div key={index} className='pt-100 medium-text'>
      {cat.name}
    </div>
  ))

  const noCats = !catState.length && <div className='pt-100 light-text'>No cats have been added</div>

  return (
    <div className='m-200'>
      <Input onChange={onChange} value={name} placeholder='Add Cat' style={{ width: 200 }} />
      <Button onClick={onAddCat} type='primary' className='ml-100'>
        Add
      </Button>
      <div className='pt-200'>
        <div>List of Cats</div>
        {cats}
        {noCats}
      </div>
    </div>
  )
}
