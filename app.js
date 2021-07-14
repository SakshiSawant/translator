var translateButton = document.querySelector('#btn-translate');
var inputText = document.querySelector('#textinput');
var output = document.querySelector('#output');



function clickHandler(){
    output.innerText = 'This is Awesome!' + inputText.value;
}

translateButton.addEventListener('click',clickHandler)

inputText.addEventListener('click', function(){
    console.log('Input');
})