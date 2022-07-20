import LocationInfo from './components/LocationInfo';
import './css/styles.css';
import './css/front-page.css';
import './css/search.css';
import './css/info-location.css';
import './css/residents.css';
import './css/footer.css';

function App() {
  return (
    <div className="App">
      <div className="front-page"></div>
      <LocationInfo/>
      <footer>Rick and Morty Wiki hecho en Academlo</footer>
    </div>
  )
}

export default App;