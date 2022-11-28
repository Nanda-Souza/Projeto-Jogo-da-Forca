function Jogo({palavraChave, comecarJogo, selecionados}) {     

    return (
        <div className="container-superior">
            <div className="forca">
                <img src="assets/forca0.png" alt=""></img>
            </div>
  
        <div className="container-direita">
            <div className="botao">
                <button className="escolha" onClick={comecarJogo}>Escolher Palavra</button>
            </div>
            <ul className={`palavra-chave ${(palavraChave.length === 0) ? "esconder" : ""}`}>
                {palavraChave.map((p, index) => (
                    <li key={index} className="lista">{selecionados.includes(p) ? {p} : "_"}</li>                    
                ))}
            </ul>

              
        </div>
  
       </div>

    )
}

export default Jogo
