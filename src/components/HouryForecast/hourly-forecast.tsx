import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import React from "react";
import useFetch from "../hooks";
import { ForecastComponentBaseProps } from "../interfaces";
import { useWeatherAppStyles } from "../styles";
import { getUrl } from "../utils";
import { HourlyForecastResponse, List } from "./interfaces";
interface HourlyForecastProps extends ForecastComponentBaseProps {}
export const HourlyForecast = (props: HourlyForecastProps) => {
  const classes = useWeatherAppStyles(props);
  const url = getUrl("hourly-forecast", props.position);
  const { loading, data, error } = useFetch(url);
  return (
    <Box>
      <Box className={clsx(classes.background, classes.content)}>
        <Typography className={clsx(classes.blackClr, classes.person)}>
          Hourly Forecast
        </Typography>
      </Box>
      <Divider className={classes.bgTheme} />
      <Box>
        <Box
          py={0.625}
          className={clsx(
            classes.background,
            classes.listingContainer,
            classes.profileCard
          )}
        >
          {loading ? (
            <CircularProgress size={25} />
          ) : (
            <>
              <RenderForecastData data={data} error={error} />
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

const RenderForecastData = (props: {
  data: HourlyForecastResponse;
  error: Error;
}): any => {
  const { data } = props;
  const { list, city } = data || {};
  const classes = useWeatherAppStyles({});
  if (list && list.length) {
    return list.map((_data: List, key: number) => (
      <Box className={classes.newListItem} key={key}>
        <Box className={classes.fxVCenter}>
          <Grid container spacing={0}>
            <Grid item xs>
              <Typography
                className={clsx(
                  classes.newListItemTitle,
                  classes.ellipsisBy210
                )}
              >
                {`${new Date(_data.dt).getHours() + 1}:00`}
              </Typography>
            </Grid>
            <Grid item xs>
              <img
                src={`http://openweathermap.org/img/wn/${_data.weather[0].icon}.png`}
                alt={_data.weather[0].description}
              />
            </Grid>
            <Grid item xs>
              <Typography
                className={clsx(
                  classes.newListItemTitle,
                  classes.ellipsisBy210
                )}
              >
                {`${_data.main.temp_min}&#176 C/${_data.main.temp_max}&#176 C`}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    ));
  }
  return null;
};
