
/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
function Human (names, eyesL, eyesR, handsL, handsR, legsL, legsR, race, height, weight) {
    this.names = names;
    this.eyes = {
        left: eyesL,
        right: eyesR,
    };
    this.hands = {
        left: handsL,
        right: handsR,
    };
    this.legs = {
        left: legsL,
        right: legsR,
    };
    this.race = race;

    this.height = function (heightRan) {
        this.height = heightRan;
    };
    this.weight = function (weightRan) {
        this.weight = weightRan;
    }
}

const chloe = new Human(
    "Chloe",
    "Brown",
    "Closed",
    "Hi",
    "on the back",
    "skinny",
    "skinny",
    "Asian",
    165,
    100
);

console.log(chloe)
