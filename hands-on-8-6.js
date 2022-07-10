/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */


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

const main = document.querySelector('main');
main.appendChild(addDiv(div1))
