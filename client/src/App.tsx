import { BrowserRouter, Route, Routes } from 'react-router'

import Homepage from './pages/Homepage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
