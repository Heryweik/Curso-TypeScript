

import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
import { HttpAdapter, PokeApiAdapter, PokeApiFetchAdapter } from '../api/pokeApi.adapter';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        // Todo: inyectar dependencias
        private readonly http: HttpAdapter    
    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')
        console.log( data.moves);
        
        return data.moves;
    }

}

// Creamos una instancia de la clase PokeApiAdapter
const pokeApiAxios = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();

// Creamos una instancia de la clase Pokemon, la cual recibe un id, un nombre y la instancia de la clase PokeApiAdapter
export const charmander = new Pokemon( 4, 'Charmander', pokeApiAxios ); // Gracias al HttpAdapter, podemos inyectar la dependencia que queramos, ya sea la de Axios o la de Fetch

charmander.getMoves();