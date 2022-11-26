import styled from 'styled-components';

export default function Letras({ alfa, clickLetter, used, word, miss, yord, gameOver }) {
    function render(arr) {
        return arr.map(l => (
            <button
                data-test="letter"
                disabled={used.includes(l) || gameOver()}
                onClick={() => clickLetter(l)}
                key={l}>{l}</button>
        ))
    }
    return (
        <LetrasContainer>
            <Top>
                {render(alfa.slice(0, alfa.length / 2))}
            </Top>
            <Bot>
                {render(alfa.slice(alfa.length / 2, alfa.length))}
            </Bot>
        </LetrasContainer>
    )
}

const LetrasContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 50px;
    
    button{
        background-color: #E1ECF4;
        border-radius: 3px;
        color: #39739D;
        font-family: 'Roboto';
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        height: 40px;
        line-height: 19px;
        text-transform: uppercase;
        width: 40px;
        &:disabled{
        background-color: #9FAAB5;
        color: #7AA7C7;
    }
    }
    
`;

const Top = styled.div`
    display: flex;
    gap: 12px;
`;

const Bot = styled.div`
    display: flex;
    gap: 12px;
`;
