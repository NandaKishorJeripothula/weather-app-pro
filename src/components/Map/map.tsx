import React from "react";
import { Map as Leaflet, Marker, Popup, TileLayer } from "react-leaflet";
interface MapProps {
  position: {
    lat: number;
    lng: number;
  };
}
export const Map = (props: MapProps) => {
  const { position } = props;
  return (
    <Leaflet
      style={{
        height: "100%",
        width: "100%",
      }}
      center={position}
      zoom={13}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        maxZoom={18}
      />
      <Marker position={position}>
        <Popup>Popup inprogress</Popup>
      </Marker>
    </Leaflet>
  );
};
