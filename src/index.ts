import { NumbersCollection } from "./lib/NumbersCollection";
import { Sorter } from "./lib/Sorter";

const numbersCollecton = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollecton); 

sorter.sort();
console.log(numbersCollecton.data);