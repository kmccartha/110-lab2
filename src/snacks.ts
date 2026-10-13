import { animation } from "./animation";

animation("Party! Party! Party! - Snacks Time");

const snacks: string[] = ["Chips", "Cookies", "Popcorn", "Candy"];

export function printSnacks(): void {
    console.log(snacks);
}

printSnacks();