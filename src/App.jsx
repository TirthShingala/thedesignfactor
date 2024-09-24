import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Aboutus from './Pages/Aboutus'
import Contact from './Pages/Contact'
import Faq from './Pages/Faq'
import Layout from './Component/Layout/Layout'
import Login from './Pages/Auth/login'
import Signup from './Pages/Auth/Signup'
import Projects from './Pages/Projects'
import ProjectDetail from './Pages/ProjectDetail'
import Allpost from './Pages/Allpost'
import ProjectList from './Pages/ProjectList'

function App() {

  return (
    <>
      <Routes>
        {/* Website Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projectlist/:type/:slug" element={<ProjectList />} />
          <Route path="/detail/:projectid" element={<ProjectDetail />} />
          <Route path="/allpost" element={<Allpost />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
