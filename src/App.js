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
  const [contAcerto, setAcerto] = useState(0);
  const [ganhou, setGanhou] = useState(false);
  const [perdeu, setPerdeu] = useState(false);
  const [chute, setChute] = useState("");
  

function comecarJogo() {                
  setPreJogo(false); 
  palavraAleatoria();
  setAcerto(0)
  setErro(0)
  setGanhou(false)
  setPerdeu(false)
  setSelecionados([])

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
        let numero = contAcerto
        numero = numero + 1
        if (numero === palavraChave.length){
          ganharJogo();
        } else{
          setAcerto(numero)
        }

      } 
    }
  }else {
    let numero =  contErro
    numero = numero + 1
    if (numero === 6){
      perderJogo();
    } else{
      setErro(numero);
    }
    
  }
}

function chutar(palavra){
  const resposta = palavraChave.join('')
  if (palavra.toLowerCase() === resposta){    
    ganharJogo()

  } else {
    perderJogo();

  }

}

function ganharJogo(){
    setGanhou(true)
    setPalavraSecreta(palavraChave)    
    setPreJogo(true)

}

function perderJogo(){
    setPerdeu(true)
    setPalavraSecreta(palavraChave)
    setErro(6)
    setPreJogo(true)
  
}

  return (
    <div className="container-pagina">     
     <Jogo 
      comecarJogo={comecarJogo}
      palavraChave={palavraChave}
      palavraSecreta={palavraSecreta}
      contErro={contErro}
      ganhou={ganhou}
      perdeu={perdeu}
     />
     <Letras 
      alfabeto={alfabeto}
      preJogo={preJogo}
      selecionados={selecionados}
      fazerJogada={fazerJogada}          
     /> 
     <Chute 
      preJogo={preJogo}
      chute={chute}
      setChute={setChute}
      chutar={chutar}
     />

    </div>   
  )
}


export default App

