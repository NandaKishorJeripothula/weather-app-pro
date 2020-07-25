import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import React from "react";
import { Hourly } from "../Forecast/interfaces";
import { ForecastComponentBaseProps } from "../interfaces";
import { useWeatherAppStyles } from "../styles";
import { getFormattedTime } from "../utils";
interface HourlyForecastProps extends ForecastComponentBaseProps {
  data: Hourly[];
}
export const HourlyForecast = (props: HourlyForecastProps) => {
  const classes = useWeatherAppStyles(props);
  const { loading } = props;
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
              <RenderHourlyForecastData {...props} />
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

const RenderHourlyForecastData = (props: HourlyForecastProps): any => {
  const { data, error, timeZone } = props;
  const classes = useWeatherAppStyles({});
  if (data && data.length) {
    return data.map((hour: Hourly, key: number) => (
      <Box className={classes.newListItem} key={key}>
        <Box className={classes.fxVCenter}>
          <Box>
            <Typography
              className={clsx(classes.newListItemTitle, classes.ellipsisBy210)}
            >
              {getFormattedTime(timeZone, hour.dt)}
            </Typography>
          </Box>
          <Box>
            <Typography
              className={clsx(classes.newListItemTitle, classes.ellipsisBy210)}
            >
              {hour.temp} ℉ / {hour.feels_like} ℉
            </Typography>
          </Box>
          <Box>
            <img
              src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
              alt={hour.weather[0].description}
            />
          </Box>
        </Box>
      </Box>
    ));
  }
  if (error) {
    return "Error loading data, please try another location";
  }
  return null;
};
