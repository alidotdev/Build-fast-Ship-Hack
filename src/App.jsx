import './App.css'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Login from './pages/Login'
import NotesBoard from './pages/NotesBoard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
      <div>
        <BrowserRouter >
        <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/notes' element={<NotesBoard />} />
      
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
