/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */


let h1 = document.querySelector("h1");
h1.innerHTML = "Hello"
console.log(h1.textContent)
 
let secondLi = document.querySelectorAll("ul li")[1];
console.log(secondLi)
secondLi.innerHTML = "Poo"

document.querySelector('ul li').classList.add("newLi")
