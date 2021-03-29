export interface sentence {
  id: number;
  sentence: string;
}

export interface CharacterEntityVm {
  id: string;
  name: string;
  image: string;
  status: string;
  gender: string;
  species: string;
  bestSentences: sentence[];
}

export interface DetailPageParams {
  id: string;
}
