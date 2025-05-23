import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Accueil from './pages/Accueil.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/mon-equipe-ia">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/accueil" element={<Accueil />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
