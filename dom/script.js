var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
}

button.addEventListener("click", function(){
    if(inputLength() > 0) {
        createListElement();
    } 
})

input.addEventListener("keypress", function(event){
    if(inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    } 
})

//함수를 사용하는 대신 추출하는 방법
function addListAfterClick() {
    if(inputLength() > 0){
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if(inputLength()>0 && event.keyCode===13){
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

//리팩토링 이전 버전
button.addEventListener("click", function(){
    if(input.value.length > 0) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value="";
    } 
})

input.addEventListener("keypress", function(event){
    if(input.value.length > 0 && event.keyCode===13) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value="";
    } 
})