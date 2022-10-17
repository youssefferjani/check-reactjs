import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import NavBar from './components/NavBar'; 
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MyForm />
     
    </div>
  );
}

export default App;
