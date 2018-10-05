alert("Rakesh");
console.log("welcome to JS");
var regdUsers=[];


var user1 ={
    userName:"Rakesh",
    password:"abc123"
};

var user2 ={
    userName:"Ranjan",
    password:"abc@123"
};

var user3 ={
    userName:"Rakesh",
    password:"1234"
};

regdUsers.push(user1);
regdUsers.push(user2);
regdUsers.push(user3);

console.log("Registered user = "+regdUsers.length);
localStorage.setItem("mit",JSON.stringify(regdUsers));

console.log("Users saved ");

var u=JSON.parse(localStorage.getItem("mit"));
user4 ={
    userName:"Nalin",
    password:"1234"
};
u.push(user1);
u.push(user4);
/*
for(var i=0; i<4;i++){
    console.log(u[i].userName +"   "+u[i].password);
}*/
localStorage.setItem("mit",JSON.stringify(u));
console.log("reading");

var u=JSON.parse(localStorage.getItem("mit"));
u.push(user1);
for(var i=0; i<u.length;i++){
    console.log(u[i].userName +"   "+u[i].password);
}

