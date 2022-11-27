import { useState } from 'react';
import alfa from '../misc/alfabeto';
import Chute from './Chute';
import GlobalStyle from '../misc/globalStyles';
import Jogo from './Jogo';
import Letras from './Letras';
import mywl from '../palavras'
import styled from 'styled-components';

export default function App() {

  const [kick, setKick] = useState("");
  const [miss, setMiss] = useState(0);
  const [used, setUsed] = useState([]);
  const [word, setWord] = useState("");
  const [xord, setXord] = useState([]);
  const [yord, setYord] = useState([]);

  function start() {
    const tmpKick = "";
    const tmpMiss = 0;
    const tmpUsed = [];
    const tmpWord = mywl[Math.floor(Math.random() * mywl.length)];
    const tmpXord = [...tmpWord];
    const tmpYord = tmpXord.map(_l => "_ ");
    setKick(tmpKick);
    setMiss(tmpMiss);
    setUsed(tmpUsed);
    setWord(tmpWord);
    setXord(tmpXord);
    setYord(tmpYord);
  };

  function selLetr(letter) {
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
    } else {
      if (miss < 6) {
        const tmpMiss = miss + 1;
        setMiss(tmpMiss);
      }
    }
  };

  function isGame() {
    return (!word || miss === 6 || yord.join("").replaceAll(' ', '') === word);
  };

  function guess() {
    (kick === word) ? setYord([...word]) : setMiss(6);
    setKick("");
  };

  function setColor() {
    if (miss === 6) {
      return "#FF0000";
    } else if (yord.join("").replaceAll(' ', '') === word) {
      return "#27AE60";
    }
    return "#000";
  };

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
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
