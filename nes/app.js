/*let b = 1;
if(b > 7){
    console.log("b je vec od 7")

}
else if (b > 3) {
    console.log("b je vece od 3 ali ne i od 7")
}
else{

}

let b=1;
switch(b) {
    case 1;
    console.log("b je 1")
break;
default;
console.log("b nije 1")
break;
}*/

//let c = 10;
//c > 5 ? console.log("vece od 5") : console.log("manje od 5");
//let b = 10;
//for (let i = 0; i < 10; i++) {
//  //console.log("OVO JE PETLJA", i);

//  console.log(b, "default");
//  b += 2;
//  console.log(b, "petlja");
//  console.log(i);
//}

//Sabiranje

//let a = 0;
//for (let i = 0; i < 4; i++) {
// console.log("Nesto", i);
// a += +prompt("Broj");
//}
//console.log(a);

//VEZBA

//for (let i = 0; i < 100; i++) {
//if (i % 15 === 0) {
//console.log(i, " FIZZBUZZ");
// } else if (i % 5 === 0) {
// console.log(i, "BUZZ");
// } else if (i % 3 === 0) {
//  console.log(i, "FIZZ");
//} else {
// console.log(i);
//}
//}

//Vezba da dodamo na svaki paran 15 i svaki koji je deljiv sa 5+3

//for (let i = 0; i < 20; i++) {
// if (i % 2 === 0) {
//   console.log(i + 15);
// } else if (i % 5 === 0) {
//   console.log(i + 3);
// } else {
//  console.log(i);
//  }
//}

//
////////////////////////////////////////////////////////////////////////
//FUNKCIJE
// function funkcija() {
//   console.log(2 + 2);
// }
// funkcija(); Ovako je pozivamo u consol

// function nekaFunkcija() {
//   return 100 + 50;
// }
// console.log(nekaFunkcija());

/////////////////////////

// function trecaFunkcija(argument1, argument2) {
//   console.log(argument1 + argument2);
// }
// trecaFunkcija(100, 25);

//////////////////////////////////////// KVADRIRANJE DVA BROJA

// function kvadriranje(number1) {
//   let square = number1 * number1;
//   return square;
// }
// console.log(kvadriranje(3));
// console.log(kvadriranje(10));

//ODUZIMANJE DVA BROJA
// function oduzmi(number1, number2) {
//   //let minus = number1 - number2;

//   if (number2 > number1) {
//     return number2 - number1;
//   } else {
//     return number1 - number2;
//   }
// }
// console.log(oduzmi(3, 5));
//////////////////////////////////// CELZIUS U FARENHAJT

// function stepeni(number1) {
//   return number1 * 1.8 + 32;
// }
// console.log(stepeni(6));

// const farToCel = function (far) {
//   return far / 1.8 - 32;
// };
// console.log(farToCel(6));

/////////////////////////////////////////////////////// NIZ
//
// let someArray = [3, 10, 55, 82, 12, 4, 45];
// function getMaxNumber(niz) {
//   const duzinaNiza = niz.length;
//   let number = 0;

//   for (let i = 0; i < duzinaNiza; i++) {
//     if (number < niz[i]) {
//       number = niz[i];
//     }
//   }
//   return number;
// }
// console.log(getMaxNumber(someArray));

//////////////////////////////////////////////////////// MATRICA
////////////////// NIZ NIZOVA

// let matrica=[
//   [1,2,3],
//   [4,5,6],
//   [7,8,9],
// ];

// console.log(matrica[0][1])
// console.log(matrica[0][2]) //// I OVAKO ISPISUJEMO POJEDINACNO BROJEVE IZ OVIH NIZOVA

// for (let i = 0; i < matrica.length; i++) {
//   for (let j = 0; j <marica[i].length ; j++) {
//     console.log(matrica [i][j]);
//   }
// }
//////////////////////// SABIRANJE DVE BROJA U DVE FUNKCIJE
// function smallerFunction(a, b) {
//   return a + b;
// }
// function biggerFunction(numb) {
//   let a = 22;
//   let b = 10;
//   return numb(a, b);
// }
// console.log(biggerFunction(smallerFunction));
// biggerFunction(smallerFunction);

// let someArray = [3, 5, 23, 45, 753, 43, 31, 234, 100];

// let helperFunction = (a) => a + 10;

// function customFunction(niz, callbackFunction) {
//   let pomocniNiz = [];
//   for (let i = 0; i < niz.length; i++) {
//     console.log(callbackFunction(niz[i]));
//     pomocniNiz.push(callbackFunction(niz[i]));
//   }
//   return pomocniNiz;
// }

// console.log(someArray);
// console.log(customFunction(someArray, helperFunction));
////////////////////////////////////////////////////////////////////

// const nekiNiz = [5, 6, 2, 17, 11, 115, 69];

// const prvaMapa = nekiNiz.map((el) => el + 10);
// console.log(nekiNiz);
// console.log(prvaMapa);

// const someAges = [2, 5, 6, 4, 23, 66, 13, 9];
// const someArray = someAges.map((el) => el * 7);
// console.log(someAges);
// console.log(someArray);

// const someKms = [13, 22, 20, 66, 43, 69, 32, 98];
// const someNest = someKms.map((el) => el * 1.6);
// console.log(someKms);
// console.log(someNest);

// const nekeBrojeve = [12, 13, 6, 1, 20, 77, 56, 98, 11, 67, 88];
// const someNest = nekeBrojeve.map((el) => {
//   if (el % 2 === 0) {
//     return el * 2;
//   } else {
//     return el * 3;
//   }
// });
// console.log(nekeBrojeve);
// console.log(someNest);

// const matricaNiza = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let someHelp = matricaNiza.map((manjiNiz) =>
//   manjiNiz.map((el) => {
//     if (el % 2 === 0) {
//       return el * 2;
//     } else {
//       return el * 3;
//     }
//   })
// );
// console.log(someHelp);

///////////////////////////////////////////// FILTER
// const brojevi = [5, 6, 78, 34, 21, 57, 84, 97];
// const neparniBrojevi = brojevi.filter((el) => el % 2 === 0);
// console.log(brojevi);
// console.log(neparniBrojevi);

/////////////// custom filter

// const brojevi = [5, 6, 78, 34, 21, 57, 84, 97];

// const ourCustomFilter = (niz, callbackFn) => {
//   const noviFilterNiz = [];
//   for (let i = 0; i < niz.length; i++) {
//     if (callbackFn(niz[i]) === true) {
//       noviFilterNiz.push(niz[i]);
//     }
//   }
//   return noviFilterNiz;
// };
// function customCallbackFn(el) {
//   return el > 10;
// }
// console.log(ourCustomFilter(brojevi, customCallbackFn));

///////////

// const nekiBrojevi = [7, 13, 7, 45, 39, 20, 11, 23, 2, 5, 7, 1];

// const svakiBroj = nekiBrojevi.map((el) => el * 3);
// const parniBrojevi = svakiBroj.filter((el) => el % 2 === 0);
// console.log(nekiBrojevi);
// console.log(svakiBroj);
// console.log(parniBrojevi);
///////////////////////////////////////////////////////////////////////////////////////////////77
// const nekaMatrica = [
//   [12, 5, 6],
//   [4, 33, 76],
//   [16, 23, 67],
// ];
// const dveMape = nekaMatrica.map((niz) => niz.filter((el) => el % 2 === 0));

// console.log(dveMape);
///////////////////////////////////////////////// REDUCE METODA
// const nizZaReduce = [2, 4, 67, 33, 45, 87, 53, 12, 11];

// const zbirElemnata = nizZaReduce.reduce(
//   (previousValue, currentValue) => previousValue + currentValue
// );
// console.log(zbirElemenata);

// const nekiNiz = [33, 22, 56, 43, 98, 16, 23];
// const prosecnaVrednost = nekiNiz.reduce((prev, curr) => prev + curr);
// console.log(prosecnaVrednost / nekiNiz.length);
///////////////////// OBJEKTI/////////////////////////////////////

// const ourFirstObject = {
//   car: "Alfa romeo",
//   vozac: "Dzenis Bronja",
//   suvozac: "Redzi",
//   godina: 23,
// };
// console.log(ourFirstObject);

/////////////////////////////////////////////////////VEZBA FIZZBUZZ////////////////////////////
// for (let i = 0; i < 100; i++) {
//   if (i % 15 === 0) {
//     console.log("FIZZBUZZ");
//   } else if (i % 5 === 0) {
//     console.log("BUZZ");
//   } else if (i % 3 === 0) {
//     console.log("FIZZ");
//   } else {
//     console.log(i);
//   }
// }
///////
// const nizBrojeva = [10, 15, 12, 45, 63, 75, 23, 42, 23, 17, 29, 45];
// nizBrojeva.push = [13, 65];
// nizBrojeva.unshift = [11, 12];
// console.log(nizBrojeva);
// const mnozenje = nizBrojeva.map((el) => el * 7).filter(el);
// console.log(mnozenje);
/////////////////7777OBJEKTI
// const shop = {
//   firmName: "SHOP",
//   gain: 100000,
//   staff: [
//     {
//       name: "Tajba",
//       position: "menager",
//       salary: 1000,
//     },
//     {
//       nema: "Iman",
//       position: "Boss",
//       salary: 1000,
//     },
//   ],
//   mostPaid() {
//     console.log(
//       "Our most paid worker is " +
//         shop.staff[0].name +
//         " her salary is " +
//         shop.staff[0].salary
//     );
//   },
// };
// console.log(shop);
// shop.mostPaid();

// const ourClassroom = [
//   { name: "iman", id: 1, age: 17 },
//   { name: "Tajra", id: 2, age: 17 },
//   { name: "Dzenis", id: 3, age: 22 },
//   { name: "redzep", id: 4, age: 17 },
//   { name: "imad", id: 5, age: 22 },
//   { name: "samed", id: 6, age: 32 },
//   { name: "medmed", id: 7, age: 17 },
//   { name: "blabla", id: 8, age: 13 },
// ];

// const filteredClass = ourClassroom
//   .filter((clas) => clas.id % 2 === 0)
//   .map((el) => {
//     return { id: el.id };
//   });
// console.log(filteredClass);

// The global variable
const watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    Metascore: "82",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    Metascore: "70",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    Metascore: "83",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
    Response: "True",
  },
];

// Only change code below this line

// Only change code above this line

// const movieNameAndReating = watchList.map((el) => {
//   return { title: el.Title, rating: el.imdbRating };
// });
// console.log(movieNameAndReating);

// const onlyAbove = movieNameAndReating.filter((el) => el.rating >= 8.0);
// console.log(onlyAbove);

/////////////////////////
// const nasCustomObjekat = {
//   odeljenje: "3-10",
//   duks: "zeleni",
//   ja: "ne znam",
//   godine: 18,
//   brojLaptopova: 9,
// };
// function ourFirstFunction(argumentFirst, argumentSecond) {
//   console.log(
//     `${argumentFirst} ${this.odeljenje} ${argumentSecond} ${this.duks}`
//   );
// }

// ourFirstFunction.call(nasCustomObjekat, "Volim", "i nosim duks");
