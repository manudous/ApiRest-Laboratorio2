import Axios from 'axios';
import { characterApiEntity } from './character.api-model';

const url = 'api/characters/';

export const getCharacterFromApi = async (
  id: string
): Promise<characterApiEntity> => {
  const { data } = await Axios.get(`${url}/${id}`);
  return data;
};




