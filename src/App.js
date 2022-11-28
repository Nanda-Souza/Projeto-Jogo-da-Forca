import Letras from './Letras'
import Chute from './Chute'
import Jogo from './Jogo'

function App() {
  const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const palavraChave = ["i", "n", "u", "y", "a", "s", "h"]

  return (
    <div class="container-pagina">     
     <Jogo palavraChave={palavraChave}/>
     <Letras alfabeto={alfabeto}/> 
     <Chute />

    </div>   
  )
}

export default App

