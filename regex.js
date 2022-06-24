let textHeader = document.getElementById("regexTest");

let text = textHeader.textContent;
const testText = RegExp(/(h{0}e)|e$/);
console.log(text)
let array1;
array1 = testText.exec(text);

console.log(array1)
// if (textHeader == "/Welcome to Regex testing/")
// {
//     console.log("hello");
// }
