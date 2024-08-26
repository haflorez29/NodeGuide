import { getHeroById } from "./services/hero.service";

const Hero = getHeroById(7)
console.log(Hero?.name?? 'no hay un hero');

