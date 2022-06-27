let contDiv = document.getElementById("mainDiv").children;
console.log(contDiv.length)

// let text = textHeader.textContent;
const testText = RegExp(/want/);
// console.log(text)
let array1;
// array1 = testText.exec(text);

array1 = [];

function checkRegEx()
{
    for(let i = 0; i < contDiv.length; i++)
    {
        let header = document.getElementById(`regexTest${i}`).textContent
        console.log(header);
        if(testText.exec(header) !== null)
        {
            array1.push(testText.exec(header));
        } else {
            console.log("No matches")
        }
    }
    array1.map(item => {
        console.log(item.input);
    });
}
console.log(checkRegEx());
// if (textHeader == "/Welcome to Regex testing/")
// {
//     console.log("hello");
// }
