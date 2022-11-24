export default function Chute(props) {
    const [jogoStart] = props.jogo

    return (
        <div className="Chute">
            <p>Já sei a palavra!</p>
            <input type="text" disabled={jogoStart}/>
            <button disabled={jogoStart}>Chutar</button>
        </div>
    )
}
