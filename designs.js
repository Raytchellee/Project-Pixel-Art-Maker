const sizePicker = document.getElementById("sizePicker");
const colorPicker = document.getElementById("colorPicker");
const pixelCanvas = document.getElementById("pixelCanvas");

const inputHeightElement = document.getElementById("inputHeight");
const inputWidthElement = document.getElementById("inputWidth");

sizePicker.addEventListener("submit", (event) => {
  // prevents the page from refreshing when user clicks on the submit button
  event.preventDefault();       

  makeGrid();
})

function makeGrid() {
  // get the number of rows and columns
  const columns = inputWidthElement.value;
  const rows = inputHeightElement.value;

  // Clear out the former grid
  pixelCanvas.innerHTML = "";

  // display the new grid
  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < columns; j++) {
      const column = document.createElement("td");

      // add event listeners to the grid cells to change the background color when a user clicks on it.
      column.addEventListener("click", () => {
        // get the color on the color picker
        let color = colorPicker.value;

        // set the background color of the cell
        column.style.backgroundColor = color;
      })

      row.appendChild(column);
    }

    pixelCanvas.appendChild(row);
  }
}