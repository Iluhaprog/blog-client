import './App.scss';
import Nav from './components/nav';
import { BrowserRouter, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App__box App__box_left">
          <Nav />
        </div>
        <main className="App__box">
          
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
