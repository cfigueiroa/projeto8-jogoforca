export default function Jogo(props) {
    const [jogo, setJogo] = props.jogo
    const [miss] = props.miss
    const [word] = props.word
    const [xord, setXord] = props.xord
    const rand = props.rand
    const [hits] = props.hits
    const size = props.size


    const colorword = () => {
        if (miss === 6) {
            // setXord([...word].map(e => e + ' ')) 
            // Warning: Cannot update a component (`App`) while rendering a different component (`Jogo`).
            // To locate the bad setState() call inside `Jogo`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render
            // Jogo@http://localhost:3001/static/js/bundle.js:301:27
            // div
            // App@http://localhost:3001/static/js/bundle.js:87:741111
            setTimeout(() => setXord([...word].map(e => e + ' ')), 0);
            return "red"
        }
        if (hits === size) {
            return "green"
        }
    }

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
                {!jogo ? <p data-test="word" style={{ color: colorword() }} data-answer={word}>{xord}</p> : <></>}
            </div>
        </div>
    )
}
