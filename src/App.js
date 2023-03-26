import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <a href="https://www.flaticon.com/free-icons/celestial-body" title="celestial body icons">Celestial body icons created by manshagraphics - Flaticon</a>
    </div>
  );
}

export default App;
