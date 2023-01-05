//jshint esversion:6 
// this tell the compileler that we are using ES6 
// const fs = require("fs");

// fs.copyFileSync("file.txt","file2.txt");
//--------------------------------------------------------//
//superhero & villan name npm 

// var superheroes = require("superheroes");

// var mySuperHeroName= superheroes.random();

// console.log(mySuperHeroName);

//---------------------------------------------------//
//Number To Words 

var converter = require("number-to-words");

var convertedNumber =converter.toWords(Math.random()*100);

console.log(convertedNumber);
