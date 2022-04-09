export const getPokemonById = async (id: number) => {

    try {

        const response = await fetch( `https://pokeapi.co/api/v2/pokemon/${ id }` )
        
    if ( response.status!==200 ) return

    const pokemon:number = await response.json(); 
    console.log(pokemon)
    return pokemon

    

    } catch (error) {
        console.error(error)
    }
}