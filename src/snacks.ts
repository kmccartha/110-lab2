
import { animation } from "./animation";

// Print snacks list
animation("Party! Party! Party! - Snacks Time");

export const snacks: string[] = ["Chips", "Cookies", "Popcorn", "Candy, popsicle, lolipop, protein bar"];

export function printSnacks(): void {
    console.log(snacks);
}

printSnacks();
