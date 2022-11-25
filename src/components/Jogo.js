export default function Jogo(props) {
    const [jogo, setJogo] = props.jogo
    const [miss] = props.miss
    const [word] = props.word
    const [xord] = props.xord
    const rand = props.rand
    return (
        <div className="Jogo">
            <div>
                <img
                    data-test="game-image"
                    src={require(`../assets/forca${miss}.png`)}
                    alt="" />
            </div>
            <div>
                <button
                    data-test="choose-word"
                    onClick={() => { rand(); setJogo(false); }}>
                    Escolher Palavra
                </button>
                {!jogo ? <p data-test="word" data-answer={word}>{xord}</p> : <></>}
            </div>
        </div>
    )
}
