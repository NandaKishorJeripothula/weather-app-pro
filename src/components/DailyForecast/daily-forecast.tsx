import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import React from "react";
import { Daily } from "../Forecast/interfaces";
import { ForecastComponentBaseProps } from "../interfaces";
import { useWeatherAppStyles } from "../styles";
import { getFormattedTime } from "../utils";
interface DailyForecastProps extends ForecastComponentBaseProps {
  data: Daily[];
}
export const DailyForecast = (props: DailyForecastProps) => {
  const classes = useWeatherAppStyles(props);
  const { loading } = props;
  return (
    <Box>
      <Box className={clsx(classes.background, classes.content)}>
        <Typography className={clsx(classes.blackClr, classes.person)}>
          Daily Forecast
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
              <RenderDailyForecastData {...props} />
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

const RenderDailyForecastData = (props: ForecastComponentBaseProps): any => {
  const { data, error, timeZone } = props;
  const classes = useWeatherAppStyles({});
  if (data && data.length) {
    return data.map((day: Daily, key: number) => (
      <Box className={classes.newListItem} key={key}>
        <Box className={classes.fxVCenter}>
          <Box>
            <Typography
              className={clsx(classes.newListItemTitle, classes.ellipsisBy210)}
            >
              {getFormattedTime(timeZone, day.dt)}
            </Typography>
          </Box>
          <Box>
            <Typography
              className={clsx(classes.newListItemTitle, classes.ellipsisBy210)}
            >
              {day.temp.min}℉ / {day.temp.max}℉
            </Typography>
          </Box>
          <Box>
            <img
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt={day.weather[0].description}
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
