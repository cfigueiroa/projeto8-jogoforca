import styled from 'styled-components';

export default function Chute({ isGame, kick, setKick, guess }) {

    return (
        <ChuteContainer>
            <p>Já sei a palavra!</p>
            <input
                value={kick}
                onChange={(e) => setKick(e.target.value)}
                data-test="guess-input"
                disabled={isGame()}
                type="text" />
            <button
                onClick={guess}
                data-test="guess-button"
                disabled={isGame()}>
                Chutar</button>
        </ChuteContainer>
    );
}

const ChuteContainer = styled.div`
    display: flex;
    gap: 15px;
    justify-content: center;
    justify-content: center;
    margin-bottom: 50px;
        p{
            font-family: 'Roboto', sans-serif;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 44px;
        }
        input{
            border-radius: 3px;
            border: 1px solid #cccccc;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
            height: 40px;
            width: 353px;
        }
        button{
            background-color: #e1ecf4;
            border-radius: 3px;
            color: #3c76a1;
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            height: 40px;
            line-height: 19px;
            width: 100px;
        }
`;
