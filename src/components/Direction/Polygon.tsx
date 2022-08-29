import { GoogleMap, Polyline, Marker, Polygon, InfoWindow } from '@react-google-maps/api';
import { useMemo, useState } from 'react';
import { MapContainer, InfoWindowContainer, InfoWindowContent } from '../CustomGoogleMapWithInfoBox/CustomGoogleMapWithInfoBox.styled';

type LatLngLiteral = google.maps.LatLngLiteral;
type infoBoxObject = {
  lat: number;
  lng: number;
  id: number;
  address: string;
};

const containerStyle = {
  width: '100%',
  height: '100%',
};

const data = [
  { lat: 28.6129, lng: 77.2295, address: 'Rajpath, India Gate, New Delhi, Delhi 110001' },
  { lat: 28.6223, lng: 77.2394, address: 'Tilak Marg, Mandi House, New Delhi, Delhi 110001' },
  { lat: 28.6379, lng: 77.2432, address: 'Tilak Marg, Mandi House, New Delhi, Delhi 110001' },
];

export const PolygonComponent = () => {
  const center = useMemo<LatLngLiteral>(() => ({ lat: 28.6129, lng: 77.2295 }), []);
  const [infoBoxData, setInfoBoxData] = useState<infoBoxObject>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleMarkerClick = (id: number, lat: number, lng: number, address: string) => {
    setInfoBoxData({ id, lat, lng, address });
    setIsOpen(true);
  };

  return (
    <MapContainer>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Polygon
          path={[
            { lat: 28.6304, lng: 77.2177 },
            { lat: 28.6379, lng: 77.2432 },
            { lat: 28.6012, lng: 77.2535 },
            { lat: 28.6002, lng: 77.2270 },
          ]}
        />
        <Polyline
          path={[
            { lat: 28.6129, lng: 77.2295 },
            { lat: 28.6223, lng: 77.2394 },
            { lat: 28.6379, lng: 77.2432 },
          ]}
        />
        {data.map((mark, ind) => (
          <Marker key={ind} position={{ lat: mark.lat, lng: mark.lng }}
            onMouseOver={() => {
              handleMarkerClick(ind, mark.lat, mark.lng, mark.address);
            }}>
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