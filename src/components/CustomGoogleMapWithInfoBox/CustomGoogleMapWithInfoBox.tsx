import { GoogleMap, InfoWindow, Marker } from '@react-google-maps/api';
import { useCallback, useMemo, useRef, useState } from 'react';
import { markerData } from '../../data/data';
import { MapContainer } from './CustomGoogleMapWithInfoBox.styled';

type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;
type infoBoxObject = {
  lat: number;
  lng: number;
  id: number;
  address: string;
};

export const CustomGoogleMap = () => {
  const mapRef = useRef<GoogleMap>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [infoBoxData, setInfoBoxData] = useState<infoBoxObject>();
  const center = useMemo<LatLngLiteral>(() => ({ lat: 18.52043, lng: 73.856743 }), []);
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
            position={{ lat: mark.lat, lng: mark.lon }}
            onMouseOver={() => {
              handleMarkerClick(ind, mark.lat, mark.lon, mark.address);
            }}
          >
            {isOpen && infoBoxData?.id === ind && (
              <InfoWindow
                onCloseClick={() => {
                  setIsOpen(false);
                }}
              >
                <div
                  style={{
                    backgroundColor: 'white',
                    padding: '12px',
                  }}
                >
                  <div style={{ fontSize: '14px' }}>{infoBoxData.address}</div>
                </div>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </GoogleMap>
    </MapContainer>
  );
};
