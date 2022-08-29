import { GoogleMap, InfoWindow, Marker } from '@react-google-maps/api';
import { useCallback, useMemo, useRef, useState } from 'react';
// import { markerData } from '../../data/data';
import { InfoWindowContainer, InfoWindowContent, MapContainer } from '../CustomGoogleMapWithInfoBox/CustomGoogleMapWithInfoBox.styled';

type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;
type infoBoxObject = {
  lat: number;
  lng: number;
  id: number;
  address: string;
};
const markerData = [

  {
    lat: 52.56516016593568,
    lng: 13.308511300086922,
    address: 'Rajpath, India Gate, New Delhi, Delhi 110001',
  },
  {
    lat: 52.54804410371126,
    lng: 13.277955574989265,
    address: 'Rajpath, India Gate, New Delhi, Delhi 110001',
  },
  {
    lat: 52.51462768139623,
    lng: 13.28859858036036,
    address: 'Rajpath, India Gate, New Delhi, Delhi 110001',
  },
  {
    lat: 52.47407615622027,
    lng: 13.340096993446297,
    address: 'Rajpath, India Gate, New Delhi, Delhi 110001',
  },
  {
    lat: 52.4674359407651,
    lng: 13.380351586341805,
    address: 'Rajpath, India Gate, New Delhi, Delhi 110001',
  },
  {
    lat: 52.471252879950846,
    lng: 13.413739724159187,
    address: 'Rajpath, India Gate, New Delhi, Delhi 110001',
  },
  {
    lat: 52.49226625882809,
    lng: 13.47158960819239,
    address: 'Rajpath, India Gate, New Delhi, Delhi 110001',
  },
  {
    lat: 52.53702993661982,
    lng: 13.499398751258797,
    address: 'Rajpath, India Gate, New Delhi, Delhi 110001',
  },
  {
    lat: 52.57507190404537,
    lng: 13.46060328006739,
    address: 'Rajpath, India Gate, New Delhi, Delhi 110001',
  },
  {
    lat: 52.58972673664611,
    lng: 13.381124062538094,
    address: 'Rajpath, India Gate, New Delhi, Delhi 110001',
  },
  {
    lat: 52.58516392437745,
    lng: 13.334174675941414,
    address: 'Rajpath, India Gate, New Delhi, Delhi 110001',
  },
];

export const BusTracking = () => {
  const mapRef = useRef<GoogleMap>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [infoBoxData, setInfoBoxData] = useState<infoBoxObject>();
  const center = useMemo<LatLngLiteral>(() => ({ lat: 52.56516016593568, lng: 13.308511300086922 }), []);
  const options = useMemo<MapOptions>(() => ({ disableDefaultUI: true, clickableIcons: false }), []);

  const onLoad = useCallback((map: any) => (mapRef.current = map), []);
  const handleMarkerClick = (id: number, lat: number, lng: number, address: string) => {
    setInfoBoxData({ id, lat, lng, address });
    setIsOpen(true);
  };

  return (
    <MapContainer>
      <GoogleMap zoom={10} center={center} mapContainerClassName="map-container" onLoad={onLoad} options={options}>
        {markerData.map((mark, ind) => (
          <Marker
            key={ind}
            position={{ lat: mark.lat, lng: mark.lng }}
            onMouseOver={() => {
              handleMarkerClick(ind, mark.lat, mark.lng, mark.address);
            }}
          >
            {isOpen && infoBoxData?.id === ind && (
              <InfoWindow
                onCloseClick={() => {
                  setIsOpen(false);
                }}
              >
                <InfoWindowContainer>
                  <InfoWindowContent>{infoBoxData.address}</InfoWindowContent>
                </InfoWindowContainer>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </GoogleMap>
    </MapContainer>
  );
};
