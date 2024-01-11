let i = 0;

// while (i < 20) {
//   i++;
//   console.log(i);
// }

while (i < 10) {
  if (i % 2 === 0) {
    console.log('teisingas', i);
  }
  if (i % 3 !== 0) {
    console.log('neteisingas', i);
  }
  i++;
}
// while (i < 21) {
//   if (1 % 3 === 0) {
//     console.log('skaicius $(i) dalinasi is 3');
//   } else {
//     console.log(i);
//   }
//   i++;
// }

// i = 1;

// while (true) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i);
//     break;
//   }
//   i++;
// }

// let suma = 0;
// while (i < 31) {
//   if (i % 2 === 0) {
//     suma += i; //tas pats kas 'suma = suma + i'
//     console.log(suma);
//   }
//   i++;
// }
// console.log(suma);

let skaicius = 1;
i = 0;
while (skaicius < 5)
  if (skaicius * 2 <= 10) {
    console.log(skaicius, 'kvadratas:', skaicius);
    skaicius++;
  }
let ledai = 60;
let kibinai = 47;
let sausainiai = 55;
while (ledai > 0 || kibinai > 0 || sausainiai > 0) {
  let nupirko_ledai = Math.ceil(Math.random() * ledai);
  let nupirko_kibinai = Math.ceil(Math.random() * kibinai);
  let nupirko_sausainiai = Math.ceil(Math.random() * sausainiai);
  console.log(
    'nupirkta',
    nupirko_ledai,
    'ledai',
    nupirko_kibinai,
    'kibinai',
    nupirko_sausainiai,
    'sausainiai'
  );
  ledai -= nupirko_ledai;
  kibinai -= nupirko_kibinai;
  sausainiai -= nupirko_sausainiai;
}
