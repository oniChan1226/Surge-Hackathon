import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './components/Header&Footer/Pages/Home'
import Signup from './components/Header&Footer/Pages/User/Signup'
import Login from './components/Header&Footer/Pages/User/Login'
import { UserProvider } from './context/UserContext'
import Dashboard from './components/Header&Footer/Pages/User/dashboard'
import Report from './components/Header&Footer/Pages/User/Report'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/user/signup' element={<Signup />} />
        <Route path='/user/login' element={<Login />} />
        <Route path='/user/dashboard' element={<Dashboard />} />
        <Route path='/user/report' element={<Report />} />
      </Route>
    )
  )

  return (
    <>
    <UserProvider>
    <RouterProvider router={router}/>
    </UserProvider>
    </>
  )
}

export default App
