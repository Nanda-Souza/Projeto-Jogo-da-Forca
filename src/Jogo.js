function Jogo({palavraChave, setJogo, alfabeto, setAlfabeto}) {

    function comecarJogo() {        
        const comecarAlfabeto = [...alfabeto]
        setJogo(false);
        setAlfabeto(comecarAlfabeto)        
                

    }

    return (
        <div className="container-superior">
            <div className="forca">
                <img src="assets/forca0.png" alt=""></img>
            </div>
  
        <div className="container-direita">
            <div className="botao">
                <button className="escolha" onClick={comecarJogo}>Escolher Palavra</button>
            </div>
            <ul className="palavra-chave esconder">
                {palavraChave.map((p) => (
                    <li key={p} className="lista">{p}</li>                    
                ))}
            </ul>

              
        </div>
  
       </div>

    )
}

export default Jogo
