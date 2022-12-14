function Chute({preJogo, chute, setChute, chutar}) {
    return (
    <div className="container-inferior">
        <div className="chute">
            <p className="chute-palavra">Já sei a palavra!</p>
            <input
                data-test="guess-input"             
                type="text" 
                className="texto" 
                placeholder="" 
                disabled={preJogo} 
                onChange={e => setChute(e.target.value)}
                value={chute}  />
            <button data-test="guess-button" className="chutar" disabled={preJogo} onClick={() => chutar(chute)}>Chutar</button>
        </div>
    </div> 

    )
}

export default Chute
