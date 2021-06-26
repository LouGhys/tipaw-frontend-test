import { FC, HTMLAttributes } from 'react';
import { MapContainer, MapContainerProps, Marker, TileLayer } from 'react-leaflet';

export type MapProps = HTMLAttributes<MapContainerProps> & {
  x: number;
  y: number;
  zoom?: number;
};

export const Map: FC<MapProps> = ({ x, y, zoom = 13, ...props }) => {
  return (
    <MapContainer center={[y, x]} zoom={zoom} scrollWheelZoom={false} {...props}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[y, x]}>
        {/* <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup> */}
      </Marker>
    </MapContainer>
  );
};
