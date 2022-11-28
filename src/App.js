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
  const [palavraSecreta, setPalavraSecreta] = useState([]);
  const [contErro, setErro] = useState(0);

function comecarJogo() {                
  setPreJogo(false); 
  palavraAleatoria();

}

function palavraAleatoria() {                
  const aleatoria = palavras[Math.floor(Math.random() * palavras.length)].split("");
  const aleatoriaSecreta = [...aleatoria] 
  setPalavraChave(aleatoria)
  setPalavraSecreta(aleatoriaSecreta.fill("_"))
}

function fazerJogada(letra){
  setSelecionados([...selecionados, letra])    
  console.log(palavraChave)
  console.log(palavraSecreta)
  if (palavraChave.includes(letra.toLowerCase())){
    for(let i = 0; i < palavraChave.length; i++) {
      if (letra.toLowerCase() === palavraChave[i]){
        palavraSecreta[i] = letra.toLowerCase();
      } 
    }
  }else {
    let number =  contErro
    number = number + 1
    setErro(number)
  }
}

  return (
    <div className="container-pagina">     
     <Jogo 
      comecarJogo={comecarJogo}
      palavraChave={palavraChave}
      palavraSecreta={palavraSecreta}
      contErro={contErro}
     />
     <Letras 
      alfabeto={alfabeto}
      preJogo={preJogo}
      selecionados={selecionados}
      fazerJogada={fazerJogada}          
     /> 
     <Chute 
      preJogo={preJogo}      
     />

    </div>   
  )
}


export default App

