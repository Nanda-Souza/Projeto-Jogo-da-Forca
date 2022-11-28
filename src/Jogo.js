function Jogo({palavraChave}) {
    return (
        <div className="container-superior">
            <div className="forca">
                <img src="assets/forca0.png" alt=""></img>
            </div>
  
        <div className="container-direita">
            <div className="botao">
                <button className="escolha">Escolher Palavra</button>
            </div>
            <ul className="palavra-chave">
                {palavraChave.map((p) => (
                    <li key={p} className="lista">{p}</li>                    
                ))}
            </ul>

              
        </div>
  
       </div>

    )
}

export default Jogo
