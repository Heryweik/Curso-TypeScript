
class NewPokemon {

    constructor(
        public readonly id: number,
        public name: string,
    ) {}

    scream() {
        console.log(`No quiero!!!`);
    }

    speak() {
        console.log(`No quiero hablar!!`);
    }

}

const MyDecorator = () => {
    // En consola se muestra la clase Pokemon
    return (target: Function) => {
        // console.log(target)

        // Se modifica la clase Pokemon y ejecuta el constructor de NewPokemon
        return NewPokemon
    }
}

// Los decoradores son funciones
// Como daba error tuve que agregar la siguiente configuración en tsconfig.json
// "experimentalDecorators": true
@MyDecorator()
export class Pokemon {

    constructor(
        public readonly id: number,
        public name: string,
    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

}

export const charmander = new Pokemon( 4, 'Charmander' );

charmander.scream();
charmander.speak();