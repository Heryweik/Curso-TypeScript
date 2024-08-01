// Forma general

import axios from "axios";
import { PokeapiResponse } from "../interfaces/pokeapi-response.interface";

/* export class Pokemon {
    public id: number; // Podemos darle un valor por defecto y no dara error
    public name: string;

    // Inicializamos las propiedades de la clase
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
} */

// Forma mas comun y corta
export class Pokemon {

    // Getters sirven para obtener un valor de una propiedad
    // En este caso se usa ya que la imagen depende del id
    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

  constructor(
    public readonly id: number, // readonly es para que no se pueda modificar
    public name: string,
  ) {}

  // Metodos sirven para realizar acciones
  // Por defecto son publicos
  public scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
    this.speak(); // Accedemos a un metodo privado
  }

  private speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves() { // Es una promesa
    
    // const moves = 10;

    // const resp = await axios.get('https://pokeapi.co/api/v2/pokemon/4');
    // console.log(resp.data.moves);

    // Desestructuracion
    const {data} = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4'); // Le ponemos tipos para que sepa que tipo de datos va a recibir
    console.log(data.moves);

    return data.moves;

  }
}

// Usamos el new para crear una instancia de la clase Pokemon
export const charmander = new Pokemon(4, "Charmander");

// charmander.name = "Bulbasour"; // Podemos modificar el nombre porque no es readonly

// console.log(charmander);

// charmander.scream();
// charmander.speak();

// console.log(charmander.getMoves());

charmander.getMoves();