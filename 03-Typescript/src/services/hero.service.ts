import { heroes } from "../data/heroes";

export function getHeroById(id: number) {
    return heroes.find((user) => user.id == id);
  }