import { GoogleMap, Marker, Polyline } from '@react-google-maps/api';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { MapContainer } from '../../globalStyles/MapContainer';
import { path } from './data';

type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

const CustomGoogleMapWithDirections = () => {
  const origin = {
    lat: 34.89579519999999,
    lng: -117.0173456,
  };
  const destination = {
    lat: 34.893420000000006,
    lng: -117.02292000000001,
  };
  const [liveLocation, setLiveLocation] = useState(origin);
  const mapRef = useRef<GoogleMap>();
  const center = useMemo<LatLngLiteral>(
    () => ({
      lat: 34.89579519999999,
      lng: -117.0173456,
    }),
    [],
  );
  const options = useMemo<MapOptions>(() => ({ disableDefaultUI: true, clickableIcons: false }), []);
  const onLoad = useCallback((map: any) => (mapRef.current = map), []);
  const currentLocationIcon = {
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/GAudit_BlueDot.png',
    scaledSize: new google.maps.Size(15, 15),
  };

  const updateLocation = () => {
    let i = 0;
    let interval = setInterval(() => {
      setLiveLocation(path[i]);

      i++;
      if (i > path.length) {
        clearInterval(interval);
      }
    }, 1000);
  };

  useEffect(() => {
    updateLocation();
  }, []);

  return (
    <MapContainer>
      <GoogleMap
        zoom={18}
        center={center}
        mapContainerClassName="map-container-directions"
        onLoad={onLoad}
        options={options}
      >
        <Polyline path={[origin, ...path, destination]} />
        <Marker icon={currentLocationIcon} position={liveLocation} />
        <Marker label={'A'} position={origin} />
        <Marker label={'B'} position={destination} />
      </GoogleMap>
    </MapContainer>
  );
};

export default CustomGoogleMapWithDirections;
