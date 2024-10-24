import { useState } from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Introduction from './pages/Intro/Introduction'
import AnimeInfo from './pages/AnimeInfo/AnimeInfo'
import AuthPage from './pages/Auth/Auth';
import Catalog from './pages/Catalog/Catalog';
function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
            <Route path="/"  element={<Introduction/>} />
            <Route path="/anime/*" element={<AnimeInfo/>} />
            <Route path="/auth" element={<AuthPage/>} />
            <Route path="/catalog" element={<Catalog/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
