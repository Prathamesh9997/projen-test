import { GoogleMap, Marker } from '@react-google-maps/api';
import { useCallback, useMemo, useRef, useState, useEffect } from 'react';
import { MapContainer } from '../CustomGoogleMapWithInfoBox/CustomGoogleMapWithInfoBox.styled';

type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;
type infoBoxObject = {
  lat: number;
  lng: number;
};
const data = [

  {
    lat: 52.56516016593568,
    lng: 13.308511300086922,
  },
  {
    lat: 52.54804410371126,
    lng: 13.277955574989265,
  },
  {
    lat: 52.51462768139623,
    lng: 13.28859858036036,
  },
  {
    lat: 52.47407615622027,
    lng: 13.340096993446297,
  },
  {
    lat: 52.4674359407651,
    lng: 13.380351586341805,
  },
  {
    lat: 52.471252879950846,
    lng: 13.413739724159187,
  },
  {
    lat: 52.49226625882809,
    lng: 13.47158960819239,
  },
  {
    lat: 52.53702993661982,
    lng: 13.499398751258797,
  },
  {
    lat: 52.57507190404537,
    lng: 13.46060328006739,
  },
  {
    lat: 52.58972673664611,
    lng: 13.381124062538094,
  },
  {
    lat: 52.58516392437745,
    lng: 13.334174675941414,
  },
];


export const LocationUpdate = () => {
  const mapRef = useRef<GoogleMap>();
  const [coordinate, setCoordinate] = useState<infoBoxObject>(
    { lat: 52.52549080781086, lng: 13.398118538856465 },
  );
  const center = useMemo<LatLngLiteral>(() => ({ lat: coordinate.lat, lng: coordinate.lng }), []);
  const options = useMemo<MapOptions>(() => ({ disableDefaultUI: true, clickableIcons: false }), []);
  const onLoad = useCallback((map: any) => (mapRef.current = map), []);

  const CoordinateUpdate = () => {
    let i = 0;
    let interval = setInterval(() => {
      setCoordinate({ lat: data[i].lat, lng: data[i].lng });
      i++;
      if (i >= data.length) {
        clearInterval(interval);
      }
    }, 3000);
  };
  useEffect(() => {
    CoordinateUpdate();
  }, []);
  return (
    <MapContainer>
      <GoogleMap zoom={10} center={center} mapContainerClassName="map-container" onLoad={onLoad} options={options}>

        <Marker
          position={{ lat: coordinate.lat, lng: coordinate.lng }}
        >
        </Marker>

      </GoogleMap>

    </MapContainer>
  );
};
