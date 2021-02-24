import * as apiModel from './Api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromCharacterApiCollecionToVm = (
  characters: apiModel.ApiEntity[]
): viewModel.CharacterCollectionEntityVm[] => {
  return characters.map((character) => mapFromCharacterApiToVm(character));
};

const mapFromCharacterApiToVm = (
  character: apiModel.ApiEntity
): viewModel.CharacterCollectionEntityVm => ({
  id: character.id,
  name: character.name,
  status: character.status,
  image: character.image,
  gender: character.gender,
  species: character.species
});
