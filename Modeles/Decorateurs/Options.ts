import { BoissonDecorateur } from "./BoissonDecorateur.ts";

export class Lait extends BoissonDecorateur {
    getDesciption(): string {
      return this.boisson.getDesciption() + " + lait"
    }

    getCout(): number {
      return this.boisson.getCout() + 0.70
    }
}

export class Sucre extends BoissonDecorateur {
    getDesciption(): string {
      return this.boisson.getDesciption() + " + Sucre"
    }

    getCout(): number {
      return this.boisson.getCout() + 0.30
    }
}

export class Caramel extends BoissonDecorateur {
    getDesciption(): string {
      return this.boisson.getDesciption() + " + Caramel"
    }

    getCout(): number {
      return this.boisson.getCout() + 1.50
    }
}