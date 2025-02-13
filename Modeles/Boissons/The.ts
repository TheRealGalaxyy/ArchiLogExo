import { Boisson } from "./IBoisson.ts";
export class The implements Boisson{
    getDesciption(): string {
      return "Un thé approuvé par la reine d'Angleterre !"
    }

    getCout(): number {
      return 2.00
    }
}