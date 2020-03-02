import { Employee } from "./Employee";
import { Menu } from './index'


export class Chef extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary);
    }

    public sayJob(): void {
        console.log("Olá! Eu sou o chef")
    }

    public removeDishFromMenu(dishToRemove: string): void {
        Menu.map( dish => {
            if(dish.getDishName() === dishToRemove){
                Menu.splice(Menu.indexOf(dish), 1)
            }
        })
    }


} 