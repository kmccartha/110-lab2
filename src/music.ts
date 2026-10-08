const music: string[] = [
    "Jazz", "Rock", "Classical", "Trap",
];

export function printMusic(): void {
    for (type of music) {
        console.log(type)
    }
}

printMusic();