function Jogo({palavraChave, comecarJogo, palavraSecreta, contErro, ganhou, perdeu}) {     

    return (
        <div className="container-superior">
            <div className="forca">
                <img src={"assets/forca" + contErro + ".png"} alt="" data-test="game-image"></img>
            </div>
  
        <div className="container-direita">
            <div className="botao">
                <button className="escolha" onClick={comecarJogo} data-test="choose-word">Escolher Palavra</button>
            </div>
            <ul data-test="word" 
                data-answer="quarentena"
                className={`palavra-chave ${(palavraChave.length === 0) ? "esconder" : ""} ${ganhou ? "ganhou" : ""} ${perdeu ? "perdeu" : ""}`}>
                {palavraSecreta.map((p, index) => (                    
                    <li key={index} className="lista"> {p} </li>
                ))}
            </ul>

              
        </div>
  
       </div>

    )
}

export default Jogo
