import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from "@material-ui/core/Divider";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import React from "react";
import { Daily } from "../Forecast/interfaces";
import { ForecastComponentBaseProps } from "../interfaces";
import { useWeatherAppStyles } from "../styles";
import { getFormattedTemperature, getFormattedTime } from "../utils";

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
  if (data && data.length) {
    return (
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date/Time</TableCell>
            <TableCell>Min Temp</TableCell>
            <TableCell>Max Temp</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((day: Daily, key: number) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {getFormattedTime(timeZone, day.dt)}
              </TableCell>
              <TableCell>{getFormattedTemperature(day.temp.min)}</TableCell>
              <TableCell>{getFormattedTemperature(day.temp.max)}</TableCell>
              <TableCell align="right">
                <Box>
                  <img
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                    alt={day.weather[0].description}
                  />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
  if (error) {
    return "Error loading data, please try another location";
  }
  return null;
};
