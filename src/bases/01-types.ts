
export let name: string | number = 'Yhonny';

export const age: number = 25;

export const isValid: boolean = true;

// name = 'Yupanky';

export const templateString = `Esto es un string
multilinea
que puede tener
" dobles
' simples
inyectar valores ${name}
expresiones ${age + 1}
booleanos ${isValid}`

console.log(templateString);