import * as React from 'react';
import { useParams } from 'react-router-dom';
import { mapFromCharacterApiToVm } from './character.mapper';
import { DetailPageParams } from './character.vm';
import { getCharacterFromApi } from './Api/character.api';
import { characterApiEntity } from './Api/character.api-model';

export const useCharacterCollection = () => {
  const [characterPage, setCharacter] = React.useState<characterApiEntity>({
    id: '',
    name: '',
    image: '',
    status: '',
    gender: '',
    species: '',
    bestSentences: [],
  });

  const { id } = useParams<DetailPageParams>();

  const loadCharacter = () => {
    getCharacterFromApi(id).then((character) => {
      setCharacter(mapFromCharacterApiToVm(character));
    });
  };

  return { characterPage, loadCharacter };
};
