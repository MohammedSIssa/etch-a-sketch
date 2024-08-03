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
      if(num <= 24 && num > 16) {
        cell.style.height = "30px"
        cell.style.width = "30px"
      }
      else if(num <= 16 && num > 10) {
        cell.style.height = "40px"
        cell.style.width = "40px"
      }
      else if(num <= 10 && num > 5){
        cell.style.height = "75px"
        cell.style.width = "75px"
      }
      else if(num <= 5 && num > 2) {
        cell.style.height = "125px"
        cell.style.width = "125px"
      }
      else if(num <= 2) {
        cell.style.height = "250px"
        cell.style.width = "250px"
      }
      else if (num <= 32 && num > 24) {
        cell.style.height = "25px"
        cell.style.width = "25px"
      }
      else if (num <= 48 && num > 32) {
        cell.style.height = "16px"
        cell.style.width = "16px"
      }
      else if(num <= 58 && num > 48){
        cell.style.height = "13px"
        cell.style.width = "13px"
      }
      else {
        cell.style.height = "12px"
        cell.style.width = "12px"
        cell.style.borderColor = "rgba(22,22,22,0.6)"
      }
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