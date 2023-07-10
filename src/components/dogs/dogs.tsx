import { useDogReducer } from 'store/hooks/useDogReducer'
import { Animals } from 'components/_common/animals'

export const Dogs = () => {
  const { dogState, addDogName } = useDogReducer()

  return <Animals type='Dogs' animals={dogState} addName={addDogName} />
}
