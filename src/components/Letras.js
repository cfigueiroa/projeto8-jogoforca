import styled from 'styled-components';

export default function Letras({ alfa, selLetr, isGame, used }) {

    function render(arr) {
        return arr.map(l => (
            <button
                data-test="letter"
                disabled={used.includes(l) || isGame()}
                onClick={() => selLetr(l)}
                key={l}>{l}</button>
        ))
    }

    const srt = alfa.slice(0, alfa.length / 2);
    const end = alfa.slice(alfa.length / 2, alfa.length); 

    return (
        <LetrasContainer>
            <Top>
                {render(srt)}
            </Top>
            <Bot>
                {render(end)}
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
