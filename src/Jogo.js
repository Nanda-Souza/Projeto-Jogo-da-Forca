function Jogo({palavraChave}) {
    return (
        <div class="container-superior">
            <div class="forca">
                <img src="assets/forca0.png" alt=""></img>
            </div>
  
        <div class="container-direita">
            <div class="botao">
                <button class="escolha">Escolher Palavra</button>
            </div>
            <ul class="palavra-chave">
                {palavraChave.map((p) => (
                    <li key={p} class="lista">{p}</li>                    
                ))}
            </ul>

              
        </div>
  
       </div>

    )
}

export default Jogo
