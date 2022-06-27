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

function appendChecks(elementName)
{
    let h1 = document.createElement('h1')
    h1.textContent = `${elementName} Matches search parameters`;
    // secondDiv.appendChild()
    console.log(elementName);
    console.log('hello');
    return h1;
}

matches.map(item => {
   secondDiv.appendChild(appendChecks(item.input));
   console.log(item.input)
});
