import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import React from "react";
import { useWeatherAppStyles } from "../styles";
interface WeeklyForecastProps {}
export const WeeklyForecast = (props: WeeklyForecastProps) => {
  const classes = useWeatherAppStyles(props);
  return (
    <Box>
      <Box className={clsx(classes.background, classes.content)}>
        <Typography className={clsx(classes.blackClr, classes.person)}>
          Weekly Forecast
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
          Data comes here
        </Box>
      </Box>
    </Box>
  );
};
