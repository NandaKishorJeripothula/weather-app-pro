import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import React from "react";
import { useWeatherAppStyles } from "../styles";
interface TitleProps {
  title: string;
}
export const Title = (props: TitleProps) => {
  const classes = useWeatherAppStyles(props);
  return (
    <Box
      className={clsx(classes.background, classes.content, classes.profileCard)}
    >
      <Typography
        className={clsx(classes.blackClr, classes.person)}
        style={{ fontSize: "18px" }}
      >
        {props.title}
      </Typography>
    </Box>
  );
};
