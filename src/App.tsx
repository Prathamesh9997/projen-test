import { useLoadScript } from '@react-google-maps/api';
import { Routes, Route } from 'react-router-dom';
import { BusTracking } from './components/BusTracking/BusTracking';
import { CustomGoogleMap } from './components/CustomGoogleMapWithInfoBox';
import Dashboard from './components/Dashboard/Dashboard';
import { PolygonComponent } from './components/Direction/Polygon';
import { LocationUpdate } from './components/LiveLocationUpdate/LocationUpdate';


function App() {

  useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY || '',
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/map-with-infobox" element={<CustomGoogleMap />} />
        <Route path="/map-with-polygon" element={<PolygonComponent />} />
        <Route path="/map-with-location" element={<LocationUpdate />} />
        <Route path="//bus-tracking-map-live-location" element={<BusTracking />} />
      </Routes>
    </div>
  );
}

export default App;
