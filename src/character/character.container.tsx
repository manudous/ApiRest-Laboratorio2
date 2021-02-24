import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCharacterFromApi } from './Api/character.api';
import { characterApiEntity } from './Api/character.api-model';
import { mapFromCharacterApiToVm } from './character.mapper';
import { DetailPageParams } from './character.vm';

export const CharacterPage: React.FC = () => {
  const [character, setCharacter] = React.useState<characterApiEntity>({
    id: '',
    name: '',
    image: '',
    status: '',
    gender: '',
    species: '',
    bestSentences: [],
  });

  const { name, species, gender, image } = character;
  
  const { id } = useParams<DetailPageParams>();
  
  const loadCharacter = () => {
    getCharacterFromApi(id).then((character) => {
      setCharacter(mapFromCharacterApiToVm(character));
    });
  };

  React.useEffect(() => {
    loadCharacter();
  }, []);

  return (<div>
    <p>{name}</p>
  </div>);
};
