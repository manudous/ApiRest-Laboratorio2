import React from 'react';
import { useCharacterCollection } from './character.hook';
import { CharacterDescription } from './components/character-description/character-description.container';

export const CharacterPage: React.FC = () => {
  const { characterPage, loadCharacter } = useCharacterCollection();


  React.useEffect(() => {
    loadCharacter();
  }, []);

  return (
    <CharacterDescription characterPage={ characterPage}/>
  );
};
