import styled from 'styled-components';

export default function Letras({ alfa, clickLetter, used, word, miss, yord, gameOver }) {
    function render(arr) {
        return arr.map(l => (
            <button
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
        text-transform: uppercase;
        width: 40px;
        height: 40px;
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
