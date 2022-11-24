export default function Letras(props) {
    const alfa = props.alfa
    const [jogo] = props.jogo
    const render = (bool) => {
        // const [clicked, setClicked] = useState(false)
        return alfa
            .filter((_l, i, arr) => !bool ? i < arr.length / 2 : i >= arr.length / 2)
            .map(l => <button disabled={jogo} key={l} onClick={() => { }}>{l.toUpperCase()}</button>)
    }

    return (
        <div className="Letras">
            <div>{render(0)}</div>
            <div>{render(1)}</div>
        </div>
    )
}
