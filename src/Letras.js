function Letras({alfabeto, preJogo, selecionados, fazerJogada}) {
    
    return (
    <div className="container-letras">
        {alfabeto.map((a) => (
            <div key={a} className="botao-letras ">
                <button
                data-test="letter" 
                onClick={() => fazerJogada(a)}
                className={`letras ${(!preJogo && !selecionados.includes(a)) ? "ativadas" : ""}`} 
                disabled={preJogo || selecionados.includes(a)}>{a}</button>
            </div>
        ))}
      </div>
     )
}

export default Letras
