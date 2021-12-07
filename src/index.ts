import { CharactersCollection } from "./lib/CharactersCollection";
import { LinkedList } from "./lib/LinkedList";
import { NumbersCollection } from "./lib/NumbersCollection";

const numbersCollecton = new NumbersCollection([10, 3, -5, 0]);
numbersCollecton.sort();
console.log(numbersCollecton.data);

const charsCollection = new CharactersCollection("jGzat");
charsCollection.sort();
console.log(charsCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();