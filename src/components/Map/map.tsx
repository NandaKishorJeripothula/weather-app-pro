import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import { LeafletMouseEvent } from "leaflet";
import React from "react";
import { Map as Leaflet, Marker, Popup, TileLayer } from "react-leaflet";
import useFetch from "../hooks";
import { City, Position } from "../interfaces";
import { useWeatherAppStyles } from "../styles";
import { getFormattedTemperature, getUrl } from "../utils";
interface MapProps {
  position: Position;
  onPositionChange: (data: Position) => void;
  city: City;
}
export const Map = (props: MapProps) => {
  const { position, onPositionChange } = props;
  const { data, loading, error } = useFetch(
    getUrl("current-forecast", position)
  );

  const classes = useWeatherAppStyles({});
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
        <Popup autoPan>
          {loading ? (
            <CircularProgress size={25} />
          ) : error ? (
            <Typography
              className={clsx(classes.newListItemTitle, classes.ellipsisBy210)}
            >
              Error: Please try with another location
            </Typography>
          ) : (
            <Box className={classes.fxVCenter}>
              <Box>
                <Typography
                  className={clsx(
                    classes.newListItemTitle,
                    classes.ellipsisBy210
                  )}
                >
                  {data && data.name ? `City: ${data.name}` : ""}
                  <br />
                  {`Weather : ${data.weather[0].main}`} <br />
                  {`Temaprature : ${getFormattedTemperature(
                    data.main.temp
                  )}`}{" "}
                  <br />
                </Typography>
              </Box>
              <Box>
                <img
                  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                  alt={data.weather[0].description}
                />
              </Box>
            </Box>
          )}
        </Popup>
      </Marker>
    </Leaflet>
  );
};
