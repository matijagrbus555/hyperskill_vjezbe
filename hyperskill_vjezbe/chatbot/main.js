
let question1 = prompt("Hello! My name is Aid. \n I was created in 2020. \n Please, remind me your name.");


let remainder1 = prompt("What a great name you have, " + question1 + "! \n Let me guess your age. \n Enter remainders of dividing your age by 3, 5 and 7. \n Tell me first remainder of dividing age by 3")
let remainder2 = prompt("Tell me remainder of dividing age by 5")
let remainder3 = prompt("Tell me remainder of dividing age by 7")

let age = (remainder1 * 70 + remainder2 * 21 + remainder3 * 15) % 105

prompt(question1 + ", your age is " + age + ", that's a good time to start programming!");