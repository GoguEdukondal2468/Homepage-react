import logo from './logo.svg';
import './App.css';
import Bio from './components/Bio';
import Contact from'./components/Contact';
import Skills from './components/Skills';
import Experience from './components/Experience';


function App() {
  return (
    <main>
     <Bio/>
     <hr/>
     
     <Experience/>
     <hr/>
     <Skills/>
     <hr/>
     <Contact/>
    </main>
    
  );
}

export default App;
