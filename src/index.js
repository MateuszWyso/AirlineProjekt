const sumPlik = require("./sum")
import {sum2, zmienna2} from "./sum2"
import style from './index.scss'

console.log("hello world");
console.log("suma wynosi " + sumPlik.sum(2,4));

let heading = document.querySelector("#demo"),
sumValue = sumPlik.sum(10,10)

heading.innerText = `10+10 = ${sumValue}`;

fetch("https://raw.githubusercontent.com/MateuszWyso/AirlineProjekt/main/endpoints/initial.json")
.then((res) => res.json()) // Transform the data into json
.then(data => console.log(data.name))
.then(err => console.log(err))