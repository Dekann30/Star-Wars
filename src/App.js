import {useState, useEffect} from 'react'
import './App.sass';
import StarshipCard from './components/StarshipCard';
import Nav from './components/Nav'

function App() {
  const [starship, setStarship] = useState([])

  const getStarship = async () => {
    const response = await fetch (
      `https://swapi.dev/api/starships/`
    )
    const data = await response.json()
    setStarship(data.results)

  }
  useEffect(()=>{getStarship()}, [])
  
  return (
    <div className="App">
      <Nav />
      <StarshipCard starship={starship}/>
    </div>
  );
}

export default App;
