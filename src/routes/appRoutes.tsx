import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Test from '@/pages/Test/Test'
import MainLayout from '@/layouts/HomeLayout'
import Resources from '@/pages/Resources/Resources'

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='/resources' element={<Resources />} />
    </Route>
    <Route path='/test' element={<Test />} />
  </Routes>
)

export default AppRoutes
