import { useState } from 'react'
import { IoLogoSnapchat } from "react-icons/io";
import './App.css'
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuArrowUpRight } from "react-icons/lu";
import ChatForm from './components/ChatForm';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  const myRoute=createBrowserRouter(createRoutesFromElements(
    <Route>
       <Route path='/' element={<Layout />} >
         <Route index element={<Home />} />
       </Route>
       <Route path='/login' element={<Login />} />
       <Route path='/registration' element={<SignUp />} />
    </Route>
  ))

  return (
   <>
    <RouterProvider router={myRoute} />
   
   </>
  )
}

export default App
