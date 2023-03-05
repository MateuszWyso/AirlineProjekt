const sumPlik = require("./sum")
import {sum2, zmienna2} from "./sum2"
import style from './index.scss'

console.log("hello world");
console.log("suma wynosi " + sumPlik.sum(2,4));

let heading = document.querySelector("#demo"),
sumValue = sumPlik.sum(10,10)

heading.innerText = `10+10 = ${sumValue}`;
