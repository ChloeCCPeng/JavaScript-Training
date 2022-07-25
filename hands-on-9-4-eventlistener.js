const gridContainer = document.querySelector('.grid');
gridContainer.addEventListener('mouseover', () => {
  gridContainer.style.outline = '4px solid pink';
})

gridContainer.addEventListener('mouseleave', () => {
  gridContainer.style.outline = '';
})

const randColor = () => {
  let hexColor = Math.floor(Math.random() * 16777215).toString(16)
  return hexColor
}

const cells = document.querySelectorAll('.cell')
cells.forEach((cell) => {

  cell.addEventListener('mouseover', () => {
    cell.style.outline = "2px solid grey"
  })

  cell.addEventListener('mouseleave', () => {
    cell.style.outline = ''
  })

  cell.addEventListener('click', () => {
    if (cell.style.background) {
      cell.style.background = '';
    } else {
      cell.style.backgroundColor = `#${randColor()}`
    }
  })

})
