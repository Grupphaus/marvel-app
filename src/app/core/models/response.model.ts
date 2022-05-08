import { CharacterCard } from "./card";

export interface CharactersResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: Data;
}

interface Data {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: CharacterCard[]|undefined;
}

export interface CharacterData {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Comics;
  stories: Stories;
  events: Comics;
  urls: URL[];
}

interface Comics {
  available: number;
  collectionURI: string;
  items: ComicsItem[];
  returned: number;
}

interface ComicsItem {
  resourceURI: string;
  name: string;
}

interface Stories {
  available: number;
  collectionURI: string;
  items: StoriesItem[];
  returned: number;
}

interface StoriesItem {
  resourceURI: string;
  name: string;
  type: ItemType;
}

enum ItemType {
  Cover = "cover",
  Empty = "",
  InteriorStory = "interiorStory",
}

export interface Thumbnail {
  path: string;
  extension: Extension;
}

enum Extension {
  Jpg = "jpg",
}

interface URL {
  type: URLType;
  url: string;
}

enum URLType {
  Comiclink = "comiclink",
  Detail = "detail",
  Wiki = "wiki",
}