import * as apiModel from './Api/character.api-model';
import * as viewModel from './character.vm';


export const mapFromCharacterApiToVm = (
  character: apiModel.characterApiEntity
): viewModel.CharacterEntityVm => ({
  id: character.id,
  name: character.name,
  status: character.status,
  image: character.image,
  gender: character.gender,
  species: character.species,
  bestSentences: character.bestSentences
});
