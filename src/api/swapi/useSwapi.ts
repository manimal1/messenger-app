import axios from 'axios';
import { makeUseAxios } from 'axios-hooks';

export const useSwapi = makeUseAxios({
  axios: axios.create({ baseURL: 'https://swapi.dev/api/' }),
});
