export interface Position {
  lat: number;
  lng: number;
}
export type City = HourlyForecastResponseCity | DailyForecastResponseCity;
export interface HourlyForecastResponseCity {
  id: number;
  name: string;
  coord: Position;
  country: string;
}
export interface DailyForecastResponseCity {
  geoname_id: number;
  name: string;
  lat: number;
  lon: number;
  country: string;
  iso2: string;
  type: string;
  population: number;
}

export interface ForecastComponentBaseProps {
  position: Position;
  city?: City;
  setCity?: (data: City) => void;
}
