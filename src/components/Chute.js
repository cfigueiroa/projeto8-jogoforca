import styled from 'styled-components';

export default function Chute({gameOver, kick, setKick, tryGuess}) {
    return (
        <ChuteContainer>
            <p>Já sei a palavra!</p>
            <input
                value={kick}
                onChange={(e) => setKick(e.target.value)}
                data-test="guess-input"
                disabled={gameOver()}
                type="text" />
            <button
                onClick={tryGuess}
                data-test="guess-button"
                disabled={gameOver()}>
                Chutar</button>
        </ChuteContainer>
    )
}

const ChuteContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    display: flex;
    justify-content: center;
        input{
            width: 353px;
            height: 40px;
            border: 1px solid #CCCCCC;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
            border-radius: 3px;
        }
        button{
            width: 100px;
            height: 40px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
            color: #3C76A1;
            background-color: #E1ECF4;
            border-radius: 3px;
        }
`;
