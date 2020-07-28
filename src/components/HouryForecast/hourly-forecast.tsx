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
import { Hourly } from "../Forecast/interfaces";
import { ForecastComponentBaseProps } from "../interfaces";
import { useWeatherAppStyles } from "../styles";
import { getFormattedTemperature, getFormattedTime } from "../utils";
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
  if (data && data.length) {
    return (
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date/Time</TableCell>
            <TableCell>Actual Temp</TableCell>
            <TableCell>Feel like Temp</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((hour: Hourly, key: number) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {getFormattedTime(timeZone, hour.dt)}
              </TableCell>
              <TableCell> {getFormattedTemperature(hour.temp)}</TableCell>
              <TableCell> {getFormattedTemperature(hour.feels_like)}</TableCell>
              <TableCell align="right">
                <Box>
                  <img
                    src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
                    alt={hour.weather[0].description}
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
