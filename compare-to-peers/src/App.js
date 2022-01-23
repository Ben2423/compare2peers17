import Menu from './pages/Menu'
import HeroSection from './pages/HeroSection/HeroSection'
import './styles/App.sass'
import CompanyList from './pages/ListCompanies/companieslist'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <HeroSection />
      </header>
      <CompanyList />

    </div>
  );
}

export default App;
