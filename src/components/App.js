import { useState } from 'react';
import alfabeto from '../alfabeto';
import palavras from '../palavras';
import Chute from './Chute';
import Jogo from './Jogo';
import Letras from './Letras';

function App() {

  const dados = {
    state: 0,
    palavras: palavras,
    alfabeto: alfabeto,
    palavra: palavras[Math.floor(Math.random() * palavras.length)],
  }

  return (
    <div className="App">
      <h1>Jogo da Forca</h1>
      <Jogo data={dados} />
      <Letras data={dados} />
      <Chute data={dados} />
    </div>
  )
}

export default App
