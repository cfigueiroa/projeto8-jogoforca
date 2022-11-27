import styled from 'styled-components';

export default function Jogo({ isGame, miss, setColor, start, word, yord }) {

    return (
        <JogoContainer>
            <Left>
                <img data-test="game-image" src={require(`../assets/forca${miss}.png`)} alt="" />
            </Left>
            <Right>
                <button data-test="choose-word" onClick={start}>Escolher Palavra</button>
                <p data-test="word" style={{ color: setColor() }} data-answer={word}>{!isGame() ? yord : word}</p>
            </Right>
        </JogoContainer>
    );
}

const JogoContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 70px;
    margin-top: 59px;
`;

const Left = styled.div`
    display: flex;
    min-width: 400px;
    width: 40%;
    img {
        max-height: 466.67px;
        max-width: 400px;
    }
`;

const Right = styled.div`
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 400px;
    width: 40%;
    button {
        background-color: #27ae60;
        border-radius: 8px;
        color: #fff;
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        height: 60px;
        line-height: 23px;
        margin-top: 30px;
        width: 200px;
    }
    p {
        color: #000;
        font-family: 'Noto Sans', sans-serif;
        font-size: 50px;
        font-style: normal;
        font-weight: 700;
        line-height: 68px;
    }
`;
