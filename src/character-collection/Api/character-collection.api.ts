import Axios from 'axios';
import { ApiEntity } from './character-collection.api-model';

const characterCollection = 'api/characters';

export const getCharacterFromApi = async (): Promise<ApiEntity[]> => {
  const { data } = await Axios.get(characterCollection);
  return data;
};
