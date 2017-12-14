import axios from 'axios';

const API_KEY = '48bc802907ddd48d7a53c8dcc8d60f6a';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?';
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}q=${city},us&APPID=${API_KEY}`;
  const request = axios.get(url);

  console.log('Action Request: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
