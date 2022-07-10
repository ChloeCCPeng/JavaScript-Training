/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

 const addIntro = (intro) => {
    const newIntro = document.createElement('div');
    newIntro.innerHTML = `
    <h2>I am ${intro.name}</h2>
    <h2>${intro.favorite} is my favorite country to visit</h2>
    `;
    return newIntro;
};

const intro = {
    name: 'Chloe',
    favorite: 'Iceland'
};

const addDiv = (div) => {
    const newDiv = document.createElement('div');
    newDiv.innerHTML =`
        <h1>${div.title}</h1>
        <h3>${div.description}</h3>
        <img src=${div.picture}></img>
    `;
    return newDiv;
};

const div1 = {
    title: 'Travel',
    description: 'Travel through the world',
    picture: 'https://wwwnc.cdc.gov/travel/images/hiker-ocean-extreme.jpg',
}
const div2 = {
    title: 'Travel2',
    description: 'Travel through the world',
    picture: 'https://wwwnc.cdc.gov/travel/images/hiker-ocean-extreme.jpg',
}

const main = document.querySelector('main');
main.appendChild(addIntro(intro))
main.appendChild(addDiv(div1))
main.appendChild(addDiv(div2))

