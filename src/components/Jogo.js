export default function Jogo(props) {
    const [erro] = props.erro
    const [jogo, setJogo] = props.jogo
    const rand = props.rand
    const [word] = props.word
    return (
        <div className="Jogo">
            <div>
                <img src={require(`../assets/forca${erro}.png`)} alt="" />
            </div>
            <div>
                <button onClick={() => { setJogo(false); rand() }}>
                    Escolher Palavra
                </button>
                <p>{!jogo && [...word].map((_letra, i) => <span key={i}>{"_ "}</span>)}</p>
            </div>
        </div>
    )
}
