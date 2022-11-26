import styled from 'styled-components';

export default function Jogo({ startGame, word, xord, yord, miss, gameOver, setColor}) {
    return (
        <JogoContainer>
            <Left>
                <img data-test="game-image" src={require(`../assets/forca${miss}.png`)} alt="" />
            </Left>
            <Right>
                <button data-test="choose-word" onClick={startGame}>Escolher Palavra</button>
                <p data-test="word" style={{color: setColor()}} data-answer={word}>{!gameOver() ? yord : xord.map(l => l + " ")}</p>
            </Right>
        </JogoContainer>
    )
}

const JogoContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px 0;
`;

const Left = styled.div`
    width: 40%;
    img {
        max-width: 400px;
        max-height: 466.67px;
    }
`
const Right = styled.div`
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40%;
    button {
        background-color: #27AE60;
        border-radius: 8px;
        color: #fff;
        font-family: 'Roboto';
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        height: 60px;
        line-height: 23px;
        width: 200px;
    }
    p {
        color: #000;
        font-family: 'Noto Sans';
        font-size: 50px;
        font-style: normal;
        font-weight: 700;
        line-height: 68px;
    }
`
