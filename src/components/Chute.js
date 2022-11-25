export default function Chute(props) {
    const [jogoStart] = props.jogo

    return (
        <div className="Chute">
            <p>Já sei a palavra!</p>
            <input
                data-test="guess-input"
                type="text"
                disabled={jogoStart} />
            <button
                data-test="guess-button"
                disabled={jogoStart}>
                Chutar</button>
        </div>
    )
}
