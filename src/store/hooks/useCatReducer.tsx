import { useAppDispatch, useAppSelector } from './hooks'
import { addCat, catSelector } from 'store/slices/catSlice'

export const useCatReducer = () => {
  const dispatch = useAppDispatch()

  const catState = useAppSelector(catSelector)

  const addCatName = (name: string) => dispatch(addCat({ name }))

  return {
    catState,
    addCatName,
  }
}
