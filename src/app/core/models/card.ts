import { Thumbnail } from "./response.model";

export class CharacterCard {
  constructor(
    public id: number,
    public name: string,
    public thumbnail: Thumbnail,
    public isFavorite: boolean,
  ) {}

  get imageURL() {
    return `${this.thumbnail.path}.${this.thumbnail.extension}`
  }
}