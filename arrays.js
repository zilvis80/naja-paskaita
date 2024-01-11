let cars = ['mazda', 'ford', 'bmw', 'audi', 'opel', 'renault'];
cars.push('nisan');
console.log(cars);
console.log(cars[0]);
console.log(cars[cars.length - 1]);
console.log(cars);
cars[3] = 'nisan';
console.log(cars);

cars.push('audi', 'zaz', 'renault');
console.log(cars);
let number = [3, 5, 8, 4, 9];
console.log(number);
let kestPazymiai = [6, 5, 3, 9, 4];
let darPazymiai = [5, 8, 6, 4, 2];
console.log('mokinio pazymiai:', kestPazymiai);
console.log('studento pazymiai', darPazymiai);

let suma =
  kestPazymiai[0] +
  kestPazymiai[1] +
  kestPazymiai[2] +
  kestPazymiai[3] +
  kestPazymiai[4];
let vidurkis = suma / kestPazymiai.length;
console.log('gauta suma:', suma);
console.log('pazymiu vidurkis:', vidurkis);
let suma =
  darPazymiai[0] +
  darPazymiai[1] +
  darPazymiai[2] +
  darPazymiai[3] +
  darPazymiai[4];
let vidurkis = suma / darPazymiai.length;
console.log('pazymiu suma:', suma);
console.log('pazymiu vydurkis:', vidurkis);
let vardai = ['kestas', 'darius', 'egle', 'Vytas', 'Adomas'];
console.log(vardai.length);
for (let i = 0; i < vardai.length; i++) {
  console.log(i + 1 + '-as vardas yra ' + vardai[i]);
}
let vardai = ['kestas', 'darius', 'egle', 'Vytas', 'Adomas'];
for (let i = 0; i < vardai.length; i++) {
  //   console.log('vardas:', vardai[i]);
}
let number = [];
for (let i = 0; i < 10; i++) {
  let sioks = Math.floor(Math.random() * 10) + 1;
  number.push(sioks);
}
console.log(number);
let number = [2, 3, 5, 4, 7, 6, 8, 1, 9];
for (let i = 0; i < number.length; i++) {
  console.log('indekasas:', i);
  console.log('skaicius:', number[i]);
  console.log();
}
let number = [78, 93, 36, 42];
for (let i = 0; i < number.length; i++) {
  if (number[i] % 2 == 0) {
    console.log('skaiciai:', number[i], 'yra lyginis');
  } else {
    console.log('skaiciai:', number[i], 'nelyginis skaicius');
  }
}

let radyklis = [34, 67, 23, 57, 86, 93];
for (let i = 0; i < radyklis.length; i++) {
  if (radyklis[i] % 3 == 0) {
    console.log('skaicius:', radyklis[i], 'nelyginis');
  } else {
    console.log('skaicius:', radyklis[i], 'lyginis');
  }
}
