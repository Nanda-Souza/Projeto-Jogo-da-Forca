import Letras from './Letras'
import Chute from './Chute'
import Jogo from './Jogo'
import palavras from './palavras'
import { useState } from 'react'

function App() {
  const [alfabeto, setAlfabeto] = useState(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"])
  const palavraChave = ["i", "n", "u", "y", "a", "s", "h"]
  const [preJogo, setJogo] = useState(true)

  return (
    <div className="container-pagina">     
     <Jogo 
      palavraChave={palavraChave}      
      setJogo={setJogo}
      alfabeto={alfabeto}
      setAlfabeto={setAlfabeto}      
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

