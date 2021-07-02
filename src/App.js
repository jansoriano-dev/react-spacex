
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/ui/Header'
import LaunchList from './components/launches/LaunchList'
import Search from './components/ui/Search'
const App = () => {
  const [launches,setLaunches] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [query,setQuery] = useState('')
  useEffect(()=>{
    const fetchItems = async ()=>{
      const result = await axios(`https://api.spacexdata.com/v3/launches/?flight_number=${query}`)
      // console.log(result.data)
      setLaunches(result.data)
      setIsLoading(false)
      }
      fetchItems()
  },[query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q)=>setQuery(q)} />
      <LaunchList isLoading={isLoading} launches={launches}/>
    </div>
  )
}

export default App
