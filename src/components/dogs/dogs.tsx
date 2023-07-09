import { useState, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input, message } from 'antd'
import { Dog, addDog, dogSelector } from 'store/slices/dogSlice'

export const Dogs = () => {
    const [name, setName] = useState('')
    const state = useSelector(dogSelector)
    const dispatch = useDispatch()

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)

    const onAddDog = () => {
        if (!name) {
            message.destroy()
            message.error('Please add a dog name')
            return
        }
        
        dispatch(addDog({ name }))
        setName('')
    }

    const dogs = state.map((dog: Dog, index: number) => <div key={index} className='pt-100 medium-text'>{dog.name}</div>)
    const noDogs = !state.length && <div className='pt-100 light-text'>No Dogs have been added</div>
    
    return (
        <div className='m-200'>
            <Input onChange={onChange} value={name} placeholder='Add Dog' style={{width: 200}} />
            <Button onClick={onAddDog} type='primary' className='ml-100'>Add</Button>
            <div className='pt-200'>
                <div>List of Dogs</div>
                {dogs}
                {noDogs}
            </div>
        </div>
    )
}
