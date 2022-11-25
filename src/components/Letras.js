export default function Letras(props) {
    const alfa = props.alfa
    const [jogo] = props.jogo
    const [letr, setLetr] = props.letr
    const [miss, setMiss] = props.miss
    const [word] = props.word
    const [xord, setXord] = props.xord
    const [hits, setHits] = props.hits
    const size = props.size
    

    function doTheMagic(bool, l, i, arr) {
        const pos = bool ? i : i + arr.length;
        const newLetr = [...letr];
        const newWord = [...word];
        newLetr[pos] = false;
        setLetr(newLetr);

        if (newWord.includes(l)) {
            const indexes = [];
            newWord.forEach((e, i) => {
                if (e === l) {
                    indexes.push(i);
                }
            })
            const newXord = [...xord];
            indexes.forEach(i => {
                newXord[i] = l + " ";
            })
            setXord(newXord);
            //need to check if hits === size to see if player won
            const newHits = (hits + 1)
            if (newHits >= size){
                alert("you won!")
            } 
            setHits(newHits);
        } else {
            if (miss < 6) {
                const curMiss = miss + 1;
                setMiss(curMiss);
                if (curMiss < 6){
                    console.log("errors:" + curMiss)                    
                } else {
                    console.log("game over: " + curMiss)
                }
            } else {
                console.log("game is already over")
            }
        }
    }

    function shenanigans(jogo, bool, letr, i, arr){
        const pos = bool ? i : i + arr.length
        return ((jogo && letr[pos]) || (!jogo && !letr[pos]))
    }

    function renderAtStart(bool) {
        return alfa
            .filter((_l, i, arr) => bool ? i < arr.length / 2 : i >= arr.length / 2)
            .map((l, i, arr) => <button
                data-test="letter"
                className={shenanigans(jogo, bool, letr, i, arr) ? "" : "active"}
                key={l}
                disabled={shenanigans(jogo, bool, letr, i, arr) ? " " : ""}
                onClick={(e) => doTheMagic(bool, l, i, arr, e)}
            >{l.toUpperCase()}</button>)
    }
    return (
        <div className="Letras">
            <div>{renderAtStart(true)}</div>
            <div>{renderAtStart(false)}</div>
        </div>
    )
}
