import { Dish } from "./dish";

export class SaltyDish extends Dish {
  constructor(
    name: string,
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number
  ) {
    super(name, price, cost, ingredients, timeToCook);
  }

  public cook(): void {
    console.log("Cozinhando um prato salgado")
  }
}

export const feijoada = new SaltyDish("Feijoada", 100, 20, ["feijão, carne de porco"], 100);
export const macarronada = new SaltyDish("Macarronada", 100, 20, ["macarrão, molho de tomate"], 100);


