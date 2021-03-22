import './App.css';
import About from './components/about/about.jsx';
import Portfolio from './components/portfolio/portfolio.jsx';
import Contact from './components/contact/contact.jsx';

function App() {
  return (
    <div className="App">
    <div className="HomePage">
      <header id="Navigation">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul> 
      </header>
      <div className="HomeImage">

      </div>
    </div>
    <About></About>
    <Portfolio></Portfolio>
    <Contact></Contact>
     
    </div>
  );
}

export default App;
