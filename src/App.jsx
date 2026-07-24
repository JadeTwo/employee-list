import { useEffect, useState } from 'react'

import './App.css'

import HomePage from './components/HomePage'
import Form from './components/Form'
import { randomPhoto } from './utils/helper';

import { id } from './utils/helper';

function App() {

  const [employees, setEmployees] = useState([]);

  async function getEmployees() {
    try {

      const response = await fetch('https://dummyjson.com/users?limit=' + id);
      const { users } = await response.json();

      const existingEmployees = users.map(u => ({
        id: u.id,
        name: `${u.firstName} ${u.lastName}`,
        title: u.company.title,
        phone: u.phone,
        email: u.email,
        headshot: randomPhoto()
      }))

      setEmployees(existingEmployees);

    } catch(e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getEmployees()
  }, [])

  return (
   <div className='app'>
      <HomePage 
        employees={employees} 
        setEmployees={setEmployees} 
      />
   </div>
  )
}

export default App
