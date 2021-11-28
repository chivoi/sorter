"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./lib/NumbersCollection");
var Sorter_1 = require("./lib/Sorter");
var numbersCollecton = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
var sorter = new Sorter_1.Sorter(numbersCollecton);
sorter.sort();
console.log(numbersCollecton.data);
