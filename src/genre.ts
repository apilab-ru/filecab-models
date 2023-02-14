export enum GenreKind {
  anime = 'anime',
  manga = 'manga',
  tv = 'tv',
  films = 'films'
}

export interface Genre {
  id: number;
  name: string;
  key: string;
  kind: GenreKind[];
  imdbId?: number | null;
  smotretId?: number | null;
  kinopoiskId?: number | null;
}
