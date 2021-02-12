var todos = [
    "clean room!",
    "brush teeth!",
    "exercise!",
    "study javascript!",
    "eat healthy"
];

for (var i=0; i< todos.length; i++){
    console.log(todos[i] + " Extra");
}

todos.forEach(function(todo, i) {
    console.log(todo, i);
});
//forEach는 배열인 경우 사용

function logTodos(todo, i){
    console.log(todo, i);
}

todos.forEach(logTodos);



var counterOne = 0;
while(counterOne < 10) {
    console.log(counterOne);
    counterOne++;
}
//조건 확인 후 작업 시작

var counterTwo = 10
do {
    console.log(counterTwo);
    counterTwo--;
} while(counterTwo > 0);
//조건 확인X, 작업 시작