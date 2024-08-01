import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { charmander } from './bases/06-decorators2.ts'
// import { charmander } from './bases/05-decoratiors.ts'
// import { charmander } from './bases/04-injection.ts'

// import {name, age} from './bases/01-types.ts'
//import { bulbasaur } from './bases/02-objects.ts'
// import { charmander } from './bases/03.classes.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn ${charmander.name}!!!
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
