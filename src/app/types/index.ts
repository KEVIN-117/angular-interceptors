interface Response {
  items: Character[];
  meta: MetaData;
  links: links;
}


interface Character {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
}


interface MetaData{
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

interface links{
    first: string;
    previous: string;
    next: string;
    last: string;
}


export type ResponseDto = Response;
export type CharacterDto = Character;
