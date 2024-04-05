import './App.css'
import HellWorld from './Components/HelloWorld'
import QualSeuNome from './Components/QualSeuNome'
import Pessoa from './Components/Pessoa'

function App() {
  const name = 'Leandro'
  const nome = "Bolacho"

  const newName = name.toLowerCase()


  function soma(a, b){
    return a+b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <p>Olá, {newName}</p>
      <p>Soma: {soma(1,2)}</p>
      <img src ={url} alt="Minha Imagem"></img>
      <HellWorld/>
      <QualSeuNome nome="Bolacho"/>
      <Pessoa
        nome = "Biscoite" 
        idade = "32"
        profissao="acabar com a fome"
        foto="https://via.placeholder.com/150"
      />
      </div>
  );
}

export default App;
