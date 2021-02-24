import * as React from 'react';
import { getCharacterFromApi } from './Api/character-collection.api';
import { CharacterCollectionEntityVm } from './character-collection.vm';
import { mapFromCharacterApiCollecionToVm } from './character-collection.mapper';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
  CharacterCollectionEntityVm[]
  >([]);

  const loadCharacterCollection = () => {
    getCharacterFromApi().then((character) => {
      setCharacterCollection(mapFromCharacterApiCollecionToVm(character));
    });
  };

  return { characterCollection, loadCharacterCollection };
};
