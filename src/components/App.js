import { useState } from 'react';
import alfa from '../alfabeto';
import mywl from '../palavras';
import Chute from './Chute';
import Jogo from './Jogo';
import Letras from './Letras';

function App() {
  const [jogo, setJogo] = useState(true); // fresh game
  const [letr, setLetr] = useState(Array.from(Array(26)).map(_e => true)) // never clicked
  const [hits, setHits] = useState(0) // hit
  const [miss, setMiss] = useState(0) // miss
  const [size, setSize] = useState(0) // unique ocorrencies
  const [word, setWord] = useState("") // randomly picked word (string)
  const [xord, setXord] = useState([]) // crypted word (arr)

  const rand = () => {
    const randWord = mywl[Math.floor(Math.random() * mywl.length)]
    const randXord = [...randWord].map(_l => "_ ")
    setLetr(Array.from(Array(26)).map(_e => true))
    setSize(new Set([...randWord]).size)
    setWord(randWord)
    setXord(randXord)
  }

  return (
    <div className="App">
      <h1>Jogo da Forca</h1>
      <Jogo
        alfa={alfa}
        hits={[hits, setHits]}
        jogo={[jogo, setJogo]}
        miss={[miss, setMiss]}
        rand={rand}
        size={size}
        word={[word, setWord]}
        xord={[xord, setXord]}
      />

      <Letras
        alfa={alfa}
        hits={[hits, setHits]}
        jogo={[jogo, setJogo]}
        letr={[letr, setLetr]}
        miss={[miss, setMiss]}
        size={size}
        word={[word, setWord]}
        xord={[xord, setXord]}
      />

      <Chute
        alfa={alfa}
        hits={[hits, setHits]}
        jogo={[jogo, setJogo]}
        miss={[miss, setMiss]}
        size={size}
        word={[word, setWord]}
        xord={[xord, setXord]}
      />
    </div>
  )
}

export default App
