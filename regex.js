let contDiv = document.getElementById("mainDiv").children;
let regexList = document.getElementById("correctList");
console.log(contDiv.length)

// let text = textHeader.textContent;
const testText = RegExp(/^T.*/);
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
    let li = document.createElement('li')
    li.textContent = `"${elementName}" Matches search parameters`;
    // secondDiv.appendChild()
    console.log(elementName);
    console.log('hello');
    return li;
}

matches.map(item => {
   regexList.appendChild(appendChecks(item.input));
   console.log(item.input)
});
