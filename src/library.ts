import { LibraryItemType } from './anime';
import { MetaData } from './meta-data';
import { Types } from "./types";

export interface Tag {
  name: string;
  key: string;
}

export interface Library {
  tags: Tag[];
  data: Record<string, LibraryItem[]>;
}

export interface LibraryItem extends MetaData {
  item: MediaItem;
}

export interface PreparedItem extends LibraryItem {
  type: Types;
}

export interface MediaItem {
  title: string;
  image: string;
  description: string;
  episodes?: number;
  popularity: number;
  year: number;
  id?: number;
  url: string;
  shikimoriId?: number;
  aniDbId?: number;
  imdbId?: number;
  smotretId?: number;
  kinopoiskId?: number;
  genreIds: number[];
  originalTitle: string;
  type: LibraryItemType;
}

export interface LibraryFlatData extends MetaData {
  item: LibraryFlatItem;
}

export interface LibraryFlatItem {
  smotretId?: number;
  imdbId?: number;
}

export interface FlatLibrary {
  tags: Tag[];
  data: Record<string, LibraryFlatData[]>;
}
