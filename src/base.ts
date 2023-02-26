import { LibraryItemType } from './anime';
import { Types } from "./types";

export interface Item {
  id: number;
  title: string;
  image: string;
  description: string;
  type: LibraryItemType;

  episodes?: number;
  genre_ids: number[];
  original_title: string;
  popularity: number;
  year: number;
}

export interface GenreOld {
  id: number;
  name: string;
}

export interface SearchRequestResult<T> {
  page: number;
  total_results?: number;
  total_pages?: number;
  results: T[];
}

export interface SearchRequestResultV2<T> {
  page: number;
  results: T[];
  hasMore?: boolean;
  total?: number;
}

export interface SearchRequest {
  limit?: number;
  page?: number;
  name?: string;
  genre?: string; //ids
  year?: string; //ids
}

export interface SearchId {
  shikimoriId?: number;
  smotretId?: number;
  kinopoiskId?: number;
  imdbId?: number;
}

export interface AnimeSearchV2Query extends SearchRequest {
  shikimoriId?: number;
  smotretId?: number;
}

export interface FilmSearchParams extends SearchRequest {
  kinopoiskId?: number;
  imdbId?: number;
  type?: Types;
}


