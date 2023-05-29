export function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

export function generateTimer(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}