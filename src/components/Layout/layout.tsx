import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";
import DailyForecast from "../DailyForecast";
import HourlyForecast from "../HouryForecast";
import { Position } from "../interfaces";
import Map from "../Map";
import { useWeatherAppStyles } from "../styles";
import Title from "../Title";

export const Layout = () => {
  const [position, setPosition] = useState<Position>({
    lat: 17.4468019,
    lng: 78.3102378,
  });
  const [city, setCity] = useState();
  const classes = useWeatherAppStyles({});
  return (
    <Box className={classes.bgTheme} p={3} height="100%">
      <Grid
        container
        style={{
          flexWrap: "nowrap",
        }}
      >
        <Grid item xs={4}>
          <Title title="Weather Map Pro" />
          <HourlyForecast position={position} />
          <DailyForecast position={position} />
        </Grid>
        <Grid item xs={8}>
          <Map position={position} onPositionChange={setPosition} />
        </Grid>
      </Grid>
    </Box>
  );
};
