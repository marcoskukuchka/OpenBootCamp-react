import logo from './logo.svg';
import './App.css';
import ComponenteA from './components/componenteA';


function App() {

  const contactoTest = {
    nombre: 'Marcos',
    apellido: 'Kukuchka',
    email: 'marcos.kukuchka@test.com',
    conectado: true,
  }; 

  return (
    <div className="App">
      <header className="App-header">
        <ComponenteA contacto={contactoTest}/>
      </header>
    </div>
  );
}

export default App;
