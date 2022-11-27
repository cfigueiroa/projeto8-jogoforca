import styled from 'styled-components';

export default function Letras({ alfa, selLetr, isGame, used }) {

    function render(arr) {
        return arr.map(l => (
            <button
                data-test="letter"
                disabled={used.includes(l) || isGame()}
                onClick={() => selLetr(l)}
                key={l}>{l}</button>
        ));
    }

    const half = 2;
    const srt = alfa.slice(0, alfa.length / half);
    const end = alfa.slice(alfa.length / half, alfa.length);

    return (
        <LetrasContainer>
            <Top>{render(srt)}</Top>
            <Bot>{render(end)}</Bot>
        </LetrasContainer>
    );
}

const LetrasContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 11px;
    margin-bottom: 56px;
    button{
        background-color: #e1ecf4;
        border-radius: 3px;
        border: 2px solid #7aa7c7;
        color: #39739d;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        height: 40px;
        line-height: 19px;
        text-transform: uppercase;
        width: 40px;
        &:hover:enabled{
            cursor: pointer;
            filter: brightness(110%) saturate(110%);
        }
        &:disabled{
            background-color: #9faab5;
            color: #798a9f;
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
