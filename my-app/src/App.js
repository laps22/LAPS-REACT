import Header from './components/Header';
import About from './components/About';
import logo from './logo.svg';
import './App.css';
import ProjectCard from './components/Project';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <About />
      <ProjectCard />
      <img src={logo} className="App-logo" alt="logo" />
      <footer>
        <Footer />
      </footer>
    </div>

  );
}

export default App;
