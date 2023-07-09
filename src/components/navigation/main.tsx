import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigation } from 'components/navigation/navigation'
import { Dogs } from 'components/dogs/dogs'
import { Cats } from 'components/cats/cats'

export const Main = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='Dogs' element={<Dogs />} />
        <Route path='Cats' element={<Cats />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
