import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import React from "react";
import DailyForecast from "../DailyForecast";
import Map from "../Map";
import { useWeatherAppStyles } from "../styles";
import Title from "../Title";
import WeeklyForecast from "../WeeklyForecast";
export const Layout = () => {
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
          <DailyForecast />
          <WeeklyForecast />
        </Grid>
        <Grid item xs={8}>
          <Map />
        </Grid>
      </Grid>
    </Box>
  );
};
