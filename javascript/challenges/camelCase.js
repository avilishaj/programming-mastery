// create a function that converts strings with dashes to camel case

function convertToCamelCase(stringWithDashes) {
  const words = stringWithDashes.split("-");
  const camelCaseWords = words.map((word, index) => {
    if (index === 0) {
      return word;
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  });
  const camelCaseString = camelCaseWords.join("");
  return camelCaseString;
}

const stringWithDashes = "just-an-example";
const camelCaseString = convertToCamelCase(stringWithDashes);
console.log(camelCaseString); // justAnExample
