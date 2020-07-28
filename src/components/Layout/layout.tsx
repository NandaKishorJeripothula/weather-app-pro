import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import { Forecast } from "../Forecast";
import { City, Position } from "../interfaces";
import Map from "../Map";
import { useWeatherAppStyles } from "../styles";
import Title from "../Title";

export const Layout = () => {
  const [position, setPosition] = useState<Position>({
    lat: 17.4468019,
    lng: 78.3102378,
  });
  const [city, setCity] = useState<City>({} as City);
  const classes = useWeatherAppStyles({});

  useEffect(() => {
    // to detect user current location and reintialize marker on first load
    navigator.geolocation.getCurrentPosition(
      (event: any) => {
        setPosition({
          lat: event.coords.latitude,
          lng: event.coords.longitude,
        });
      },
      undefined, // on fail ignore as we have default
      {
        timeout: 3000,
      } as any
    );
  }, []);

  return (
    <Box className={classes.bgTheme} height="100vh">
      <Grid
        container
        style={{
          flexWrap: "nowrap",
          height: "100%",
          width: "100%",
          padding: "25px",
        }}
      >
        <Grid item xs={4}>
          <Title title="Weather Map Pro" />
          <Forecast position={position} city={city} setCity={setCity} />
        </Grid>
        <Grid item xs={8} style={{ paddingLeft: "20px" }}>
          <Map position={position} onPositionChange={setPosition} city={city} />
        </Grid>
      </Grid>
    </Box>
  );
};
