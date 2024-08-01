
// Adapter es para adaptar una libreria externa al proyecto
// En este caso es para adaptar la libreria axios a nuestro proyecto

import axios from "axios";
// import { PokeapiResponse } from "../interfaces/pokeapi-response.interface";

// Creamos una interfaz para poder inyectar la dependencia
export interface HttpAdapter {
    get<T>(url: string): Promise<T>;
}

export class PokeApiFetchAdapter implements HttpAdapter {
    async get<T>(url:string): Promise<T> {
        const resp = await fetch(url);
        const data: T = await resp.json();
        console.log('Con fetch');

        return data;
    }
}

export class PokeApiAdapter implements HttpAdapter {

    private readonly axios = axios

    async get<T>( url: string ): Promise<T> { // Le decimos que es una funcion generica, la T es el tipo de dato que va a regresar
        // const { data } = await this.axios.get<PokeapiResponse>( url ); // Le damos el tipo de datos
        const { data } = await this.axios.get<T>( url );
        console.log('Con axios');

        return data;
    }

    async post( url: string, data: any ) {
        return this.axios.post( url, data );
    }

    async patch( url: string, data: any ) {
        return this.axios.patch( url, data );
    }

    async delete( url: string ) {
        return this.axios.delete( url );
    }
    
}