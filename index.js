class Lotto {
  constructor() {
    this.maxNumber = 45;
    this.numbers = new Set();
  }

  generateNumbers() {
    while (this.numbers.size < 6) {
      const randomNumbers = new Uint8Array(1);
      window.crypto.getRandomValues(randomNumbers);
      const number = randomNumbers[0] % this.maxNumber + 1;
      this.numbers.add(number);
    }

    return Array.from(this.numbers);
  }
}

const lotto = new Lotto();
console.log(lotto.generateNumbers());
