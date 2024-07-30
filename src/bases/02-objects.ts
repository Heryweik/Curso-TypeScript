
export const pokemonIds = [1, 20, 30, 34, 99]

// pokemonIds.push('Hola') // Se puede porque ts lo convierte a js pero marca error

pokemonIds.push( +'2' ) // hacemos una conversion rapida a number

interface Pokemon {
    id: number;
    name: string;
    age?: number;
}

export const bulbasaur: Pokemon = {
    id: 1,
    name: 'Bulbasaur',
}

// pokemons es un arreglo de pokemones
// tipos en arreglos
export const pokemons: Pokemon[] = []

pokemons.push(bulbasaur)

console.log(pokemons)