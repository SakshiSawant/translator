var translateButton = document.querySelector('#btn-translate');
var inputText = document.querySelector('#textinput');
var output = document.querySelector('#output');

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationText(text){
    inputURL = serverURL + "?" + "text=" + text;
    return inputURL;
}
function clickHandler(){
    var input = inputText.value;
    fetch(getTranslationText(input)).then(response => response.json()).then(json => output.innerText=json.contents.translated).catch(errorHandler);
}
function errorHandler(){
    alert('Something went wrong. Try again later!');
}
translateButton.addEventListener('click',clickHandler)

// inputText.addEventListener('click', function(){
//     console.log('Input');
// })