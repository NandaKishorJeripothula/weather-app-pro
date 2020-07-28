import { formatToTimeZone } from "date-fns-timezone";
import fromUnixTime from "date-fns/fromUnixTime";
import config from "./config";
import { Position, TEMP_UNIT } from "./interfaces";
export const getUrl = (
  type: "timezone" | "forecast" | "current-forecast",
  position: Position
): string => {
  switch (type) {
    case "timezone":
      return `https://api.timezonedb.com/v2.1/get-time-zone?key=${config.TIMEZONE_API_KEY}&format=json&by=position&lat=${position.lat}&lng=${position.lng}`;
    case "forecast":
      return `https://api.openweathermap.org/data/2.5/onecall?lat=${position.lat}&lon=${position.lng}&units=${config.UNIT}&exclude=${config.EXCLUDE_FORECAST}&appid=${config.WEATHER_API_KEY}`;
    case "current-forecast":
      return `https://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.lng}&units=${config.UNIT}&appid=${config.WEATHER_API_KEY}`;
    default:
      return "";
  }
};

export const DATE_FORMAT_WITH_TIMEZONE = "Do MMM, YYYY";
export const TIME_FORMAT_WITH_TIMEZONE = "HH:mm";
export const DATE_TIME_FORMAT_WITH_TIMEZONE = "DD/MM, HH:mm";

export const getFormattedTime = (
  timeZone: string,
  dateTime: number,
  variant: "dateTime" | "date" | "time" = "dateTime"
) => {
  const dateObject = fromUnixTime(dateTime);
  switch (variant) {
    case "dateTime":
      return formatToTimeZone(dateObject, DATE_TIME_FORMAT_WITH_TIMEZONE, {
        timeZone,
      });
    case "date":
      return formatToTimeZone(dateObject, DATE_FORMAT_WITH_TIMEZONE, {
        timeZone,
      });
    case "time":
      return formatToTimeZone(dateObject, TIME_FORMAT_WITH_TIMEZONE, {
        timeZone,
      });
  }
};

const TEMPERATURE_UNIT = {
  Fahrenheit: "℉",
  Celsius: "℃",
  Kelvin: "K",
};
export const getFormattedTemperature = (temperature: number) => {
  switch (config.UNIT as TEMP_UNIT) {
    case "metric":
      return `${temperature} ${TEMPERATURE_UNIT.Celsius}`;
    case "imperial":
      return `${temperature} ${TEMPERATURE_UNIT.Fahrenheit}`;
    default:
      return `${temperature} ${TEMPERATURE_UNIT.Kelvin}`;
  }
};
