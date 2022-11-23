export default function Jogo(props) {
    console.log(typeof props.data.palavra)
    return (
        <div className="Jogo">
            <div>
                <img src={require(`../assets/forca${props.data.state}.png`)} alt="" />
            </div>
            <div>
                <button onClick={props.data.escolherPalavra}>Escolher Palavra</button>
                <p>{[...props.data.palavra].map(_letra => <span>{"_ "}</span>)}</p>
            </div>
        </div>
    )
}
