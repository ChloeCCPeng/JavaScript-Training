/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const grid = document.querySelector('.grid');
grid.addEventListener('mouseenter', () => {
    grid.style.outline = '3px solid CornflowerBlue'
})

grid.addEventListener('mouseleave', () => {
    grid.style.outline =''
})

const randColor = () => {
    let hexColor = Math.floor(Math.random() * 16777215).toString(16);
    return hexColor;
  };

const cells = document.querySelectorAll('.cell')

cells.forEach((cell) => {
    cell.addEventListener('mouseenter', () => {
        cell.style.outline = `1.5px dashed #${randColor()}`
    })

    cell.addEventListener('mouseleave', () => {
        cell.style.outline = ""
    })

    cell.addEventListener('click', () => {
        if (cell.style.background) {
            cell.style.background = '';
        } else {
            cell.style.background = `#${randColor()}`
        }
    })
})

