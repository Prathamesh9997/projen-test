import { useLoadScript } from '@react-google-maps/api';
import { Routes, Route } from 'react-router-dom';
import { CustomGoogleMap } from './components/CustomGoogleMapWithInfoBox';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY || '',
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/map-with-infobox" element={<CustomGoogleMap />} />
      </Routes>
    </div>
  );
}

export default App;
