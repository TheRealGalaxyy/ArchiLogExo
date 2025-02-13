import { Boisson } from "./IBoisson.ts";
export class Espresso implements Boisson{
    getDesciption(): string {
      return "Un délicieux espresso servit bien chaud !"
    }

    getCout(): number {
      return 2.50
    }
}