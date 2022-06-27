let contDiv = document.getElementById("mainDiv").children;
let secondDiv = document.getElementById("secondDiv");
console.log(contDiv.length)

// let text = textHeader.textContent;
const testText = RegExp(/^t.*/i);
// console.log(text)
// array1 = testText.exec(text);
matches = [];

function checkRegEx()
{
    const array1 = [];
    for(let i = 0; i < contDiv.length; i++)
    {
        let header = document.getElementById(`regexTest${i}`).textContent
        // console.log(header);
        if(testText.exec(header) !== null)
        {
            array1.push(testText.exec(header));
        } else {
            console.log("No matches")
        }
    }
    return array1;
}
matches = checkRegEx();
matches.map(item => {
    console.log(item.input);
});
// console.log(checkRegEx());
// if (textHeader == "/Welcome to Regex testing/")
// {
//     console.log("hello");
// }
