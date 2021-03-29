interface characterEntity {
  id: number;
  sentence: string;
}
export interface characterApiEntity {
  id: string;
  name: string;
  image: string;
  status: string;
  gender: string;
  species: string;
  bestSentences: characterEntity[];
}

