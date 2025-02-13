import { Espresso } from "../Modeles/Boissons/Espresso.ts";
import { The } from "../Modeles/Boissons/The.ts";
import { Caramel, Lait, Sucre } from "../Modeles/Decorateurs/Options.ts";

let maBoisson1 = new Espresso()
let maBoisson2 = new The()

maBoisson1 = new Lait(maBoisson1);
maBoisson1 = new Sucre(maBoisson1);

maBoisson2 = new Caramel(maBoisson2);

console.log("Commande : \n-" + maBoisson1.getDesciption() + "\n-" + maBoisson2.getDesciption())
const cout = maBoisson1.getCout() + maBoisson2.getCout()
console.log("Prix total : \n" + maBoisson1.getCout() + "€ + " + maBoisson2.getCout() + "€ = " + cout + "€")


