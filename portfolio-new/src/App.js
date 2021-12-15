import './App.scss';
import { Navbar, Contact, Hero, Works, Portfolio, Menu} from './components/index'
import { useState } from 'react';

function App() {
  const [menuOpen,setMenuOpen] = useState(false)

  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Hero />
        <Portfolio />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
