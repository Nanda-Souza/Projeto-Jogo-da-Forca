function Letras({alfabeto, preJogo}) {
    
    return (
    <div className="container-letras">
        {alfabeto.map((a) => (
            <div key={a} className="botao-letras ">
                <button className={`letras ${!preJogo ? "ativadas" : ""}`} disabled={preJogo}>{a}</button>
            </div>
        ))}
      </div>
     )
}

export default Letras
