let contDiv = document.getElementById("mainDiv").children;
console.log(contDiv.length)

// let text = textHeader.textContent;
const testText = RegExp(/e/);
// console.log(text)
let array1;
// array1 = testText.exec(text);

array1 = [];

function checkRegEx()
{
    for(let i = 0; i < contDiv.length; i++)
    {
        let header = document.getElementById(`regexTest${i}`)
        console.log(header.textContent);
        array1.push(testText.exec(header));
    }
    return array1;
}
console.log(checkRegEx());
// if (textHeader == "/Welcome to Regex testing/")
// {
//     console.log("hello");
// }
