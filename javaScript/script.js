var database = [
    {
        username: "yeeun",
        password: "secret0718"
    },
    {
        username: "sally",
        password: "123",
    },
    {
        username: "ingrid",
        password: "777"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning"
    },
    {
        username: "Sally",
        timeline: "Javascript is sooo coool!"
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password){
    for(var i=0; i<database.length; i++){
        if(database[i].username === user &&
            database[i].password === pass) {
                return true;
            }
    }
    return false;
}

function signIn(user, pass) {
    if(isUserValid(user, pass)){
        console.log(newsFeed);
    } else{
        alert("Sorry");
    }

    // for(var i=0; i<database.length; i++){
    //     if(database[i].username === user &&
    //         database[i].password === pass) {
    //             console.log(newsFeed);
    //         } else{
    //             alert("Sorry, wrong user and password");
    //         }
    // }
    // if (user === database[0].username && 
    //     pass === database[0].password){
    //         console.log(newsFeed);
    // }else {
    //     alert("Sorry, wrong username and password!");
    // }
}

signIn(userNamePrompt, passwordPrompt);