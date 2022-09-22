import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import countriesData from './countries.json'
import "./App.css";

function App() {
  return <div className="App">
    <Navbar />
    <CountriesList path="/countries" element={<CountriesList />} countries={countriesData}/>
    
  </div>;
}
export default App;