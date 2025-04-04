import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmployeePerformanceDashboard from './Components/Employee'
import Navbar from './Components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex">
        <Navbar/>
        <EmployeePerformanceDashboard/>
      </div>
      
    </>
  )
}

export default App
