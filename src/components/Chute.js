import styled from 'styled-components';

export default function Chute({ isGame, kick, setKick, guess }) {

    return (
        <ChuteContainer>
            <p>Já sei a palavra!</p>
            <input data-test="guess-input" disabled={isGame()}
                onChange={e => setKick(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && guess()}
                type="text"
                value={kick} />
            <button data-test="guess-button" disabled={isGame()} onClick={guess}>Chutar</button>
        </ChuteContainer>
    );
}

const ChuteContainer = styled.div`
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 400;
    gap: 15px;
    justify-content: center;
    justify-content: center;
    margin-bottom: 50px;
    min-width: 660px;
        p{
            line-height: 44px;
        }
        input{
            border-radius: 3px;
            border: 1px solid #cccccc;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
            font-family: 'Roboto', sans-serif;
            font-size: 18px;
            font-weight: 700;
            height: 40px;
            width: 353px;
        }
        button{
            background-color: #e1ecf4;
            border-radius: 3px;
            border: 2px solid #7aa7c7;
            color: #3c76a1;
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            font-weight: 700;
            height: 40px;
            line-height: 19px;
            width: 100px;
            &:hover:enabled{
                filter: brightness(110%) saturate(110%);
                cursor: pointer;
            }
        }
`;
