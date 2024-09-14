function multiply(a: number, b: number): number {
    return a * b;
}

function greet(name: string): string {
    return `Olá ${name}`;
}

console.log(
    "multiply(2, 3):", multiply(2, 3),
    "\ngreet('André'):", greet("André")
);