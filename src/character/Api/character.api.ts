import Axios from 'axios';
import { characterApiEntity } from './character.api-model';

const url = 'http://localhost:3000/characters/';

export const getCharacterFromApi = async (id): Promise<characterApiEntity[]> => {
  const { data } = await Axios.get(`${url}/${id}`);
  return data;
};

