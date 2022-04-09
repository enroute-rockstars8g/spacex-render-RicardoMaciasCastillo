import { ChangeEvent, useEffect, useState } from "react"
import { getPokemonById } from "../services/pokemon/service"

export const Pokedex = () => {
 const [pokemonId, setPokemonId] = useState<number>(1)
 const [actualPokemon, setActualPokemon] = useState<any>(undefined)

 useEffect(()=>{
     const firstPokemon = async()=>{
        const newPokemon = await getPokemonById(pokemonId)
        setActualPokemon(newPokemon)
     } 
     firstPokemon()

 },[])
 
 const getPokemonId = (event: ChangeEvent<HTMLInputElement>)=>{
  if(event.target.value !== '') setPokemonId(parseInt(event.target.value))
  else setPokemonId(1)
 }

 const fetchPokemon = async () => {
    const newPokemon = await getPokemonById(pokemonId)
    setActualPokemon(newPokemon)

  console.log(newPokemon)
  }
  return (
    <div>
  <h2>  Pokedex!  </h2>
  <p>Escribe el número del Pokemon</p>
  <input type="text" onChange={getPokemonId} /> 
    <button className="btn btn-primary" onClick={fetchPokemon}>Buscar</button>
    {actualPokemon!==undefined
    ?
    <div>

      <h2 >Nombre: {actualPokemon.name.toUpperCase()}!</h2><img src={actualPokemon.sprites.front_default} alt="" />

    </div>
    :null
    }
    </div>
  )
}
