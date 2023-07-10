import { useCatReducer } from 'store/hooks/useCatReducer'
import { Animals } from 'components/_common/animals'

export const Cats = () => {
  const { catState, addCatName } = useCatReducer()

  return <Animals type='Cats' animals={catState} addName={addCatName} />
}
