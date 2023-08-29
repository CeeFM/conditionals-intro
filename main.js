let sum = 1+1;
let product = 4*5;
let difference = 6-2;

if (sum > 5) {
    console.log("True fact!") 
} else {
    console.log("LIES!")
};

if (product <= 20) {
    console.log("True fact!") 
} else {
    console.log("LIES!")
};

if (difference >= 0) {
    console.log("True fact!") 
} else {
    console.log("LIES!")
};

let likesDogs = true;

if (likesDogs) {
    console.log("You're a dog person!")
} else {
    console.log("You're a cat person!")
};

const person = {
    name: "Mr. Fake Stuff Totally Real Guy For Sure",
    preferredLanguage: "Spanish"
}

if (person.preferredLanguage === "English") {
    console.log(`Hello, ${person.name}!`)
} else if (person.preferredLanguage === "Spanish") {
    console.log(`Hola, ${person.name}!`)
} else if (person.preferredLanguage === "French") {
    console.log(`Bonjour, ${person.name}!`)
};

let grade = 88;

if (grade >= 0 && grade <= 69) {
    console.log("You got an F")
} else if (grade >= 70 && grade <= 76) {
    console.log("You got a D!")
} else if (grade >= 77 && grade <= 84) {
    console.log("You got a C!")
} else if (grade >= 85 && grade <= 92) {
    console.log("You got a B!")
} else {
    console.log("You got an A!")
};