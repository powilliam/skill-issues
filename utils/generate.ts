export function generate(total: number): Promise<Array<number>> {
  return new Promise((resolve) => {
    let numbers = [];

    for (let number = 0; number <= total; number++) {
      numbers.push(number);
    }

    resolve(numbers);
  });
}
