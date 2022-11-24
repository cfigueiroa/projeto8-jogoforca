export default function Jogo(props) {
    const [erro] = props.erro
    const [jogo, setJogo] = props.jogo
    const rand = props.rand
    const [word] = props.word
    return (
        <div className="Jogo">
            <div>
                <img
                    data-test="game-image"
                    src={require(`../assets/forca${erro}.png`)}
                    alt="" />
            </div>
            <div>
                <button
                    data-test="choose-word"
                    onClick={() => { setJogo(false); rand() }}>
                    Escolher Palavra
                </button>
                {!jogo ? <p data-test="word" data-answer={word}>{[...word].map((_letra, i) => <span key={i}>{"_ "}</span>)}</p> : <></>}
            </div>
        </div>
    )
}
