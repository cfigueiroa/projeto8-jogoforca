export default function Letras(props) {
    return (
        <div className="Letras">
            <div>
                {props.data.alfabeto
                    .filter((_letra, i) => i < 13)
                    .map(letra =>
                        <button
                            key={letra}
                            onClick={() => props.data.chutar(letra)}>
                            {letra}
                        </button>)}
            </div>
            <div>
                {props.data.alfabeto
                    .filter((_letra, i) => i >= 13)
                    .map(letra =>
                        <button
                            key={letra}
                            onClick={() => props.data.chutar(letra)}>
                            {letra}
                        </button>)}
            </div>
        </div>
    )
}
