import { useState } from 'react';
import Chute from './Chute';
import GlobalStyle from '../styles/globalStyles';
import Jogo from './Jogo';
import Letras from './Letras';
import mywl from '../palavras';
import styled from 'styled-components';

export default function App() {

  const [kick, setKick] = useState("");
  const [miss, setMiss] = useState(0);
  const [used, setUsed] = useState([]);
  const [word, setWord] = useState("");
  const [xord, setXord] = useState([]);
  const [yord, setYord] = useState([]);
  const alfa = [...'abcdefghijklmnopqrstuvwxyz'];
  const mtry = 6;
  const norm = str => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  function start() {
    const tmpKick = "";
    const tmpMiss = 0;
    const tmpUsed = [];
    const tmpWord = mywl[Math.floor(Math.random() * mywl.length)];
    const tmpXord = [...tmpWord];
    const tmpYord = tmpXord.map(() => "_ ");
    setKick(tmpKick);
    setMiss(tmpMiss);
    setUsed(tmpUsed);
    setWord(tmpWord);
    setXord(tmpXord);
    setYord(tmpYord);
  }

  function selLetr(letter) {
    setUsed([...used, letter]);
    if (xord.map(e => norm(e)).includes(letter)) {
      const tmpXord = [...xord];
      const tmpYord = [...yord];
      tmpXord.forEach((l, i) => {
        if (norm(l) === letter) {
          tmpYord[i] = l + " ";
        }
      });
      setYord(tmpYord);
    } else {
      if (miss < mtry) {
        const tmpMiss = miss + 1;
        setMiss(tmpMiss);
      }
    }
  }

  function isGame() {
    return (!word || miss === mtry || yord.join("").replaceAll(' ', '') === word);
  }

  function guess() {
    (kick === word || kick === norm(word)) ? setYord([...word]) : setMiss(mtry);
    setKick("");
  }

  function setColor() {
    if (miss === mtry) {
      return "#ff0000";
    } else if (yord.join("").replaceAll(' ', '') === word) {
      return "#27ae60";
    }
    return "#000";
  }

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Jogo isGame={isGame} miss={miss} setColor={setColor} start={start} word={word} yord={yord} />
        <Letras alfa={alfa} selLetr={selLetr} isGame={isGame} used={used} />
        <Chute isGame={isGame} kick={kick} setKick={setKick} guess={guess} />
      </AppContainer>
    </>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
