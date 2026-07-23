import { useEffect, useState } from 'react'

import './App.css'

import HomePage from './components/HomePage'
import Form from './components/Form'
import { randomPhoto } from './utils/helper';

function App() {

  const [employees, setEmployees] = useState([]);

  return (
   <div className='app'>
      <HomePage employees={employees} />
      <Form setEmployees={setEmployees} />
   </div>
  )
}

export default App
