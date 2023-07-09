import { useState, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input, message } from 'antd'
import { Cat, addCat, catSelector } from 'store/slices/catSlice'

export const Cats = () => {
  const [name, setName] = useState('')
  const state = useSelector(catSelector)
  const dispatch = useDispatch()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)

  const onAddCat = () => {
    if (!name) {
      message.destroy()
      message.error('Please add a cat name')
      return
    }

    dispatch(addCat({ name }))
    setName('')
  }

  const cats = state.map((cat: Cat, index: number) => (
    <div key={index} className='pt-100 medium-text'>
      {cat.name}
    </div>
  ))
  const noCats = !state.length && <div className='pt-100 light-text'>No cats have been added</div>

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
