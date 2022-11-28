function Letras({alfabeto}) {
    return (
    <div className="container-letras">
        {alfabeto.map((a) => <Letra key={a} letra = {a}/>)}
      </div>
     )
}

function Letra(props) {            
            return (
            <div className="botao-letras">
                <button className="letras">{props.letra}</button>    
            </div>
            )
        }

export default Letras

