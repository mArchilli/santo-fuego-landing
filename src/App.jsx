import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import NotFound from './pages/NotFound'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* comodín para 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}