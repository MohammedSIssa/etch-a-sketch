const container = document.querySelector('.container')
const sketchContainer = document.querySelector('.sketch-container')
const gridRange = document.querySelector("#grid-size")
const gridSizeLabels = document.querySelectorAll('.grid-size')
const createGridBtn = document.querySelector('button.create-grid')


makeGrid(16)

function makeGrid(num){
  sketchContainer.innerHTML = ""
  for(let i = 0; i < num; i++){
    let row = document.createElement('div')
    row.className = "row"
    for(let j = 0; j < num; j++){
      let cell = document.createElement('div')
      cell.className = "cell default"
      cell.id = `cell-${i}-${j}`
      cell.style.height = `${600 / num}px`
      cell.style.width = `${600 / num}px`
      row.appendChild(cell)
    }
    sketchContainer.appendChild(row)
    createHoverEffect()
  }
}

createGridBtn.addEventListener('click', () => makeGrid(gridRange.value))


gridRange.addEventListener('input', () => {
  gridSizeLabels[0].textContent = gridRange.value
  gridSizeLabels[1].textContent = gridRange.value
})

function createHoverEffect() {
  document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('mouseover', () => {
      cell.className = `cell color-${getRandomColor()}`
    })
    cell.addEventListener('mouseleave', () => {
      cell.className = `cell default inked`
    })
  })
}

function getRandomColor() {
  return Math.floor(Math.random() * 14)
}