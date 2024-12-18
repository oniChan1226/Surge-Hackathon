import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <div>dashboard</div>
        <Link to="/user/report"><button>Report a need?</button></ Link>
    </div>
  )
}

export default Dashboard