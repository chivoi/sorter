import { CharactersCollection } from "./lib/CharactersCollection";
import { LinkedList } from "./lib/LinkedList";
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

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();
linkedList.print();