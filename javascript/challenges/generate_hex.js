// generate hex color codes
const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const createHexColor = () => {
  let generatedColor = "#";

  // get 6 random indexes from the array and add it to make the hex variable 
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * hexArray.length);
    generatedColor += hexArray[randomNumber];
  }
  console.log(generatedColor);
};  

createHexColor();
