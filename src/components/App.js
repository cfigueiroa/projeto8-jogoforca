import { useState } from 'react';
import alfa from '../alfabeto';
import mywl from '../palavras';
import Chute from './Chute';
import Jogo from './Jogo';
import Letras from './Letras';

function App() {
  const [jogo, setJogo] = useState(true); // fresh game = true
  const [letr, setLetr] = useState(Array.from(Array(26)).map(_e => true)) // never clicked = true
  const [erro, setErro] = useState(0);
  const [word, setWord] = useState("")
  const rand = () => setWord(mywl[Math.floor(Math.random() * mywl.length)])

  return (
    <div className="App">
      <h1>Jogo da Forca</h1>
      <Jogo
        rand={rand}
        alfa={alfa}
        jogo={[jogo, setJogo]}
        erro={[erro, setErro]}
        word={[word, setWord]}
      />

      <Letras
        letr={[letr, setLetr]}
        alfa={alfa}
        jogo={[jogo, setJogo]}
        erro={[erro, setErro]}
        word={[word, setWord]}
      />

      <Chute
        alfa={alfa}
        jogo={[jogo, setJogo]}
        erro={[erro, setErro]}
        word={[word, setWord]}
      />
    </div>
  )
}

export default App
