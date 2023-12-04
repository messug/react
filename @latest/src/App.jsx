import { useEffect, useState } from 'react'

import './App.css'

function SuperheroDetail(props)  {
  console.log("props", props)
  const  superHero = props.superHero;
  const color = props.color;
 
 
  return (
    <div>
      <h2 style={{color: superHero.color}}>{superHero.name}</h2>
      <ul>
        <li>Power:{superHero.power}</li>
        <li>New City:{superHero.homeCity}</li>
        <li>Alter Ego:{superHero.alterEgo} </li>
       </ul>
    </div>
   )
  }
  const superHeros = [
    {
      "name": "Flash",
      "power": "Speed",
      "homeCity": "Central City",
      "alterEgo": "Barry Alan",
      "color": "yellow"
    },
  {
      "name": "Spider-man",
      "power": "Web-slinging",
      "homeCity": "New York City",
      "alterEgo": "Peter Parker",
      "color": "blue"
  },
  {
    "name": "Superman",
    "power": "Super Strength",
    "homeCity": "Metropolis",
    "alterEgo": "Clark Kent",
    "color": "green"
  }
];
  
  function App() {
  const [superHeroLists, setSuperherosLists] = useState([]);

  useEffect(() => { 
    setSuperherosLists(superHeros);
  },[]);

  return (
      <div>
       <h1>SuperHero Registry</h1>
       {superHeroLists.map((superHeros) => {
        return <SuperheroDetail superHero = {superHeros}  />
       })}
      </div>
     );
   }

export default App
