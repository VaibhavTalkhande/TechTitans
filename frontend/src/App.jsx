import { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import axios from 'axios'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [apiData, setApiData] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get('/api/example')
      .then(res => {
        setApiData(res.data.message)
        setLoading(false)
      })
      .catch(err => console.log(err))
      axios.get('/')
      .then(res => {
        setMessage(res.data)
      })
      .catch(err => console.log(err))

  }
  , [])


  return (

    <div>
      <h1>{apiData}</h1>
      <h1>{loading ? 'Loading...' : ''}</h1>
      <h1>Hello from React!</h1>
      <h1>API Data: {apiData}</h1>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/about"Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </div>
  )
}

export default App
