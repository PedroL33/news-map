import './App.css';
import Map from './components/map';
import { Wrapper } from "@googlemaps/react-wrapper";

function App() {
  return (
    <div className="App">
      <Wrapper apiKey={process.env.GOOGLEMAPS_API_KEY}>
        <Map />
      </Wrapper>
    </div>
  );
}

export default App;
