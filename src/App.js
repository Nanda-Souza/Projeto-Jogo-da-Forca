import Letras from './Letras'

function App() {
  const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  return (
    <div class="container-pagina">

     <div class="container-superior">

      <div class="forca">
        <img src="assets/forca0.png" alt=""></img>
      </div>

      <div class="container-direita">

      <div class="botao">
        <button class="escolha">Escolher Palavra</button>
      </div>

      <ul class="underline ganhou perdeu">
	      <li class="lista">_</li>
	      <li class="lista">u</li>
	      <li class="lista">a</li>
        <li class="lista">_</li>
	      <li class="lista">e</li>
	      <li class="lista">_</li>
	      <li class="lista">_</li>
        <li class="lista">e</li>
	      <li class="lista">_</li>
	      <li class="lista">a</li>
      </ul>

      </div>

     </div>

     <Letras alfabeto={alfabeto}/>     

    <div class="container-inferior">

      <div class="chute">
        <p class="chute-palavra">Já sei a palavra!</p>
        <input type="text" class="texto" placeholder="" />
        <button class="chutar">Chutar</button>
      </div>
      </div>

     
    </div>   
  )
}

export default App

