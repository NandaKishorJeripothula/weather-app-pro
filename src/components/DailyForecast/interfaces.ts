import { City } from "../interfaces";

export interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface List {
  dt: number;
  temp: Temp;
  pressure: number;
  humidity: number;
  weather: Weather[];
  speed: number;
  deg: number;
  clouds: number;
  rain?: number;
  snow?: number;
}

export interface DailyForecastResponse {
  cod: string;
  message: number;
  city: City;
  cnt: number;
  list: List[];
}
