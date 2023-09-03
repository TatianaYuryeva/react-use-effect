import { useState, useEffect } from 'react'

import List from './components/List'
import Details from './components/Details'

import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [info, setInfo] = useState({})

  const fetchUsers = async () => {
    const response = await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
    const data = await response.json()
    setUsers(data)
    }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <>
      <div className="wrapper">
        <List users={users} onSelectUser={setInfo}/>
        {info.id && <Details info={info}/>}
      </div>
    </>
  )
}

export default App
