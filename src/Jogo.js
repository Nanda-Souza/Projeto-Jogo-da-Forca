function Jogo({palavraChave, comecarJogo, palavraSecreta, contErro}) {     

    return (
        <div className="container-superior">
            <div className="forca">
                <img src={"assets/forca" + contErro + ".png"} alt=""></img>
            </div>
  
        <div className="container-direita">
            <div className="botao">
                <button className="escolha" onClick={comecarJogo}>Escolher Palavra</button>
            </div>
            <ul className={`palavra-chave ${(palavraChave.length === 0) ? "esconder" : ""}`}>
                {palavraSecreta.map((p, index) => (                    
                    <li key={index} className="lista"> {p} </li>
                ))}
            </ul>

              
        </div>
  
       </div>

    )
}

export default Jogo
