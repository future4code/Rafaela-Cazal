import { Dish } from "./dish";

export class Dessert extends Dish {
  protected slicesNumber: number;
  constructor(
    name: string,
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number,
    slicesNumber: number
  ) {
    super(name, price, cost, ingredients, timeToCook);
    this.slicesNumber = slicesNumber;
  }

  public getSlicePrice(): number {
    return this.price / this.slicesNumber;
  }

  public cook(): void {
    console.log("Baking Dessert");
  }
}

export const brigadeiro = new Dessert("Brigadeiro", 100, 20, ["leite condensado, chocolate"], 100, 10);
export const beijinho = new Dessert( "Beijinho",  100, 20, ["leite condensado, coco"], 100, 10);
// console.log(brigadeiro.getSlicePrice());
// console.log(brigadeiro.getProfit());
