import { CharactersCollection } from "./lib/CharactersCollection";
import { NumbersCollection } from "./lib/NumbersCollection";
import { Sorter } from "./lib/Sorter";

const numbersCollecton = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollecton); 

const charsCollection = new CharactersCollection("jGzat")
const stringSorter = new Sorter(charsCollection);

sorter.sort();
stringSorter.sort();
console.log(numbersCollecton.data);
console.log(charsCollection.data);