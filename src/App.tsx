import { useLoadScript } from '@react-google-maps/api';
import { Routes, Route } from 'react-router-dom';
import CustomGoogleMapWithDirections from './components/CustomGoogleMapWithDirections/CustomGoogleMapWithDirections';
import { CustomGoogleMapWithInfoBox } from './components/CustomGoogleMapWithInfoBox';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY || '',
  });

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/map-with-infobox" element={<CustomGoogleMapWithInfoBox />} />
          <Route path="/map-with-directions" element={<CustomGoogleMapWithDirections />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
