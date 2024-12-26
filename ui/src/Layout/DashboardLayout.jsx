import React from 'react'
import { Header } from '../components/Header&Footer'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Dashboard'

const DashboardLayout = () => {
  return (
      <>
        <Header />
        <Sidebar />
        <Outlet />
      </>
  )
}

export default DashboardLayout