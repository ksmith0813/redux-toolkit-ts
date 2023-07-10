import { useAppDispatch, useAppSelector } from './hooks'
import { addDog, dogSelector } from 'store/slices/dogSlice'

export const useDogReducer = () => {
  const dispatch = useAppDispatch()

  const dogState = useAppSelector(dogSelector)

  const addDogName = (name: string) => dispatch(addDog({ name }))

  return {
    dogState,
    addDogName,
  }
}
