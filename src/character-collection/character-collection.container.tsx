import React from 'react';
import { useCharacterCollection } from './character-collection.hook';
import CustomizedTables from './components/Table';

export const Characters: React.FC = () => {
  const {
    characterCollection,
    loadCharacterCollection,
  } = useCharacterCollection();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  return <CustomizedTables characterCollection={characterCollection} />;
};
