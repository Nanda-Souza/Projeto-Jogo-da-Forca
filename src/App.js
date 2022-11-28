import Letras from './Letras'
import Chute from './Chute'
import Jogo from './Jogo'
import palavras from './palavras'
import { useState } from 'react'

function App() {
  const [alfabeto, setAlfabeto] = useState(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"])
  const [palavraChave, setPalavraChave] = useState([])
  const [preJogo, setPreJogo] = useState(true)
  const [selecionados, setSelecionados] = useState([]);

function comecarJogo() {                
  setPreJogo(false); 
  palavraAleatoria();

}

function palavraAleatoria() {                
  const aleatoria = palavras[Math.floor(Math.random() * palavras.length)].split("");
  setPalavraChave(aleatoria)
  

}

  return (
    <div className="container-pagina">     
     <Jogo 
      comecarJogo={comecarJogo}
      palavraChave={palavraChave}
      selecionados={selecionados}
     />
     <Letras 
      alfabeto={alfabeto}
      preJogo={preJogo}      
     /> 
     <Chute 
      preJogo={preJogo}      
     />

    </div>   
  )
}


export default App

