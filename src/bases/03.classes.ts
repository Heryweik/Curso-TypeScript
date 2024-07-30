
export class Pokemon {
    public id: number; // Podemos darle un valor por defecto y no dara error
    public name: string;

    // Inicializamos las propiedades de la clase
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

// Usamos el new para crear una instancia de la clase Pokemon
export const charmander = new Pokemon(4, 'Charmander');