import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './pages/Home'
import { SingUp } from './pages/SignUp'
import { SingIn } from './pages/SingnIn'

import { GlobalStyle } from "./styles/globalStyles"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SingUp />} />
        <Route path='/singIn' element={<SingIn />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
)
