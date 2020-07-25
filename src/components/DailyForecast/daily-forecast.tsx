import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import React from "react";
import { ForecastComponentBaseProps } from "../interfaces";
import { useWeatherAppStyles } from "../styles";
interface DailyForecastProps extends ForecastComponentBaseProps {}
export const DailyForecast = (props: DailyForecastProps) => {
  const classes = useWeatherAppStyles(props);
  // const { data, loading, error } = useFetch();

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
          Data comes here
        </Box>
      </Box>
    </Box>
  );
};
