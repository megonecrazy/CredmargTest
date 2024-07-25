import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListEmpComponent from './components/ListEmpComponent'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'
import LogInComponent from './components/LogInComponent'
import { DashBoardComponent } from './components/DashBoardComponent'
import { AddVendorComponent } from './components/AddVendorComponent'

function App() {

  return (
    <>
    
    <BrowserRouter>
          <Routes>
          <Route path='/' element={<LogInComponent/>}></Route>
            <Route path='/dashboard' element={<DashBoardComponent/>}></Route>
            <Route path='/listEmployee' element={<ListEmpComponent/>}></Route>
            <Route path='/addEmployee' element={<EmployeeComponent/>}></Route>
            <Route path='/addVendor' element={<AddVendorComponent/>}></Route>
          </Routes>
          
       </BrowserRouter>
    </>
  )
}

export default App
