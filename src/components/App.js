import { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../misc/globalStyles';
import Jogo from './Jogo';
import Letras from './Letras';
import Chute from './Chute';
import alfa from '../misc/alfabeto';
import mywl from '../palavras'

export default function App() {

  const [word, setWord] = useState("");
  const [xord, setXord] = useState([]);
  const [yord, setYord] = useState([]);
  const [miss, setMiss] = useState(0);
  const [used, setUsed] = useState([]);
  const [kick, setKick] = useState("");

  function startGame() {
    const tmpWord = mywl[Math.floor(Math.random() * mywl.length)];
    setWord(tmpWord);
    const tmpXord = [...tmpWord];
    setXord(tmpXord);
    const tmpYord = tmpXord.map(_l => "🥔 ");
    setYord(tmpYord);
    const tmpMiss = 0;
    setMiss(tmpMiss);
    const tmpUsed = [];
    setUsed(tmpUsed);
  }

  function clickLetter(letter) {
    setUsed([...used, letter]);
    if (xord.includes(letter)) {
      const tmpXord = [...xord];
      const tmpYord = [...yord];
      tmpXord.forEach((l, i) => {
        if (l === letter) {
          tmpYord[i] = letter + " ";
        }
      });
      setYord(tmpYord);
      console.log(tmpYord)
      if (tmpYord.join("").replaceAll(' ', '') === word) {
        console.log("Você ganhou!");
      }
    } else {
      if (miss < 6) {
        const tmpMiss = miss + 1;
        setMiss(tmpMiss);
        if (tmpMiss === 6) {
          console.log("Você perdeu!");
        }
      }
      else {
        console.log("Você já perdeu!");
      }
    }
  }

  function gameOver() {
    if (!word || miss === 6 || yord.join("").replaceAll(' ', '') === word) {
      return true;
    }
    return false;
  }

  function tryGuess() {
    if (kick === word) {
      setYord([...word]);
      setKick("");
    } else {
      console.log("Você perdeu! A palavra era " + word);
      setMiss(6);
      setKick("");
    }
  }

  function setColor() {
    if (miss === 6) {
      return "red";
    } else if (yord.join("").replaceAll(' ', '') === word) {
      return "green";
    } else {
      return "black";
    }
  }


  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Jogo
          gameOver={gameOver}
          miss={miss}
          startGame={startGame}
          word={word}
          xord={xord}
          yord={yord}
          setColor={setColor}
        />
        <Letras
          gameOver={gameOver}
          yord={yord}
          miss={miss}
          alfa={alfa}
          clickLetter={clickLetter}
          used={used}
          word={word}
        />
        <Chute
          kick={kick}
          setKick={setKick}
          tryGuess={tryGuess}
          gameOver={gameOver}
          yord={yord}
          miss={miss}
          alfa={alfa}
          clickLetter={clickLetter}
          used={used}
          word={word}
        />
      </AppContainer>
    </>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
