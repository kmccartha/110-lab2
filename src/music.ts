import { animation } from "./animation";

const music: string[] = [
    "Jazz", "Rock", "Classical", "Trap",
];

export function printMusic(): void {
	animation("Party! Party! Party! Party! - Music Time");

    for (const type of music) {
        console.log(type);
    }
}

printMusic();
