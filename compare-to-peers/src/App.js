import Menu from './pages/Menu'
import HeroSection from './pages/HeroSection/HeroSection'
import './styles/App.sass'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <HeroSection />
      </header>
    </div>
  );
}

export default App;
