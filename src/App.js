import './App.css';
import Logo from './componentes/logo/index.js';
import OpcoesHeader from './componentes/OpcoesHeader/index.js';
import IconesHeader from './componentes/IconesHeader/index.js';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>

        <OpcoesHeader></OpcoesHeader>

        <IconesHeader></IconesHeader> 
      </header>
    </div>
  );
};

export default App;
