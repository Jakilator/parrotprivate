// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let Listner = document.querySelector('input');
let webLink;

inputBox.onkeyup = (e)=>
{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData)
    {
        icon.onclick = ()=>
        {
            webLink = `https://dl.parrotprivate.ml/0:search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
    }
    //for enter key detection
    Listner.addEventListener('keyup', (e) => {
         if(e.keyCode === 13) {
            icon.click();
         }
    })  
}


