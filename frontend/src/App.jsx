import React from 'react'
import './App.css'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Home from './pages/Home.jsx'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Layout from './component/Layout.jsx'
function App() {
  return (
    <div>
      <BrowserRouter>
     
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
       
      </BrowserRouter>
    
    </div>
    
  )
}

export default App