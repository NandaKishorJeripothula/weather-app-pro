import React, { useEffect } from "react";
import DailyForecast from "../DailyForecast";
import useFetch from "../hooks";
import HourlyForecast from "../HouryForecast";
import { City, Position } from "../interfaces";
import { getUrl } from "../utils";
interface ForecastProps {
  position: Position;
  city?: City;
  setCity?: any;
}
export const Forecast = (props: ForecastProps) => {
  const url = getUrl("forecast", props.position);
  const { loading, data, error } = useFetch(url);

  useEffect(() => {
    if (
      props &&
      props.setCity &&
      props.city &&
      props.city.name &&
      data &&
      data.city &&
      data.city.name &&
      props.city.name !== data.city.name
    ) {
      props.setCity((prevCity: City) => ({
        ...prevCity,
        ...((data.city || {}) as City),
      }));
    }
  }, [data, props]);
  return (
    <>
      <HourlyForecast
        error={error}
        data={data && data.hourly ? data.hourly : {}}
        timeZone={data && data.timezone}
        loading={loading}
      />
      <DailyForecast
        error={error}
        data={data && data.daily ? data.daily : {}}
        timeZone={data && data.timezone}
        loading={loading}
      />
    </>
  );
};
