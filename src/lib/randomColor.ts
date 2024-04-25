const colors = ["bg-cyan-500", "bg-purple-500", "bg-teal-500"];

export function randomColor(): string {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return randomColor;
}
