console.log("task 1 start from here");

function slugify(title) {
  return title.toLowerCase().split(" ").join("-");
}

const title = "";
const slug = slugify(title);
let newLine = "\n ";

//! örnek kullanım

console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
console.log(newLine);
