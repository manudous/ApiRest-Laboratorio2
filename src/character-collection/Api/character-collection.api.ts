import Axios from 'axios';
import { ApiEntity } from './character-collection.api-model';

const characterCollection = 'http://localhost:3000/characters';

export const getCharacterFromApi = async (): Promise<ApiEntity[]> => {
  const { data } = await Axios.get(characterCollection);
  return data;
};
