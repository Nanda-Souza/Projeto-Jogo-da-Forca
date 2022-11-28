function Chute({preJogo}) {
    return (
    <div className="container-inferior">
        <div className="chute">
            <p className="chute-palavra">Já sei a palavra!</p>
            <input type="text" className="texto" disabled={preJogo} />
            <button className="chutar" disabled={preJogo}>Chutar</button>
        </div>
    </div> 

    )
}

export default Chute
