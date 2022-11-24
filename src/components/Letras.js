export default function Letras(props) {
    const alfa = props.alfa
    const [jogo] = props.jogo
    const [letr, setLetr] = props.letr
    const renderAtStart = (bool) => {
        return alfa
            .filter((_l, i, arr) => bool ? i < arr.length / 2 : i >= arr.length / 2)
            .map((l, i, arr) => <button
                disabled={(jogo && (bool ? letr[i] : letr[i + arr.length])) ||
                    (!jogo && (bool ? !letr[i] : !letr[i + arr.length])) ? " " : ""}
                key={l}
                onClick={() => {
                    const newLetr = [...letr];
                    bool ? newLetr[i] = false : newLetr[i + arr.length] = false;
                    setLetr(newLetr)
                }}
            >{l.toUpperCase()}</button>)
    }
    return (
        <div className="Letras">
            <div>{renderAtStart(true)}</div>
            <div>{renderAtStart(false)}</div>
        </div>
    )
}
