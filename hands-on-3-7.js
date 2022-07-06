/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const makeupBag = {
    color: 'black',
    makeUps:{
        foundation: 'koreanBrand',
        powder: 'japaneseBrand'
    },
    bagSize: {
        length: 15,
        diameter: 6,
    },
    newMakeUps(makeUp) {
        this.makeUps.mascara = Mabline;
        this.makeUps.lipStick = Mac;
    },
};

// console.log(makeupBag.bagSize);
