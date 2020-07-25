import { LeafletMouseEvent } from "leaflet";
import React from "react";
import { Map as Leaflet, Marker, Popup, TileLayer } from "react-leaflet";
import { Position } from "../interfaces";
interface MapProps {
  position: Position;
  onPositionChange: (data: Position) => void;
}
export const Map = (props: MapProps) => {
  const { position, onPositionChange } = props;

  // to apply default config to marker, use this method which controls using ref
  const initMarker = (ref: any) => {
    if (ref) {
      ref.leafletElement.openPopup();
    }
  };

  const handleMarkerPositionChange = (event: LeafletMouseEvent) => {
    const { latlng } = event;
    console.log(latlng);
    onPositionChange(latlng as Position);
  };
  return (
    <Leaflet
      style={{
        height: "100%",
        width: "100%",
      }}
      center={position}
      zoom={13}
      onclick={handleMarkerPositionChange}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        maxZoom={18}
      />
      <Marker position={position} ref={initMarker}>
        <Popup autoPan>Popup inprogress</Popup>
      </Marker>
    </Leaflet>
  );
};
