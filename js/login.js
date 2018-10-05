function logout(){
    localStorage.removeItem("username");
    location.replace("login.html");
}

function checkUser(){
    var data = parseInt(localStorage.getItem("visit"));
    data++;
    //alert(data);
   document.getElementById("counting").innerHTML="Total Visit -" +data + " ";
   localStorage.setItem("visit",data);

    if(!localStorage.getItem("username")){
        location.replace("login.html");
        //localStorage.removeItem("key");
    }
    printUser();
}
function checkUser1(){
    var data = parseInt(localStorage.getItem("visit"));
    data++;
    //alert(data);
   document.getElementById("counting").innerHTML="Total Visit -" +data + " ";
   localStorage.setItem("visit",data);

    if(!localStorage.getItem("username")){
        location.replace("login.html");
        //localStorage.removeItem("key");
    }
    printUser();
    printOnCart();
}
function checkUser2(){
    var data = parseInt(localStorage.getItem("visit"));
    data++;
    //alert(data);
   document.getElementById("counting").innerHTML="Total Visit -" +data + " ";
   localStorage.setItem("visit",data);
    //localStorage.removeItem("vibhanshu1");
    if(!localStorage.getItem("username")){
        location.replace("login.html");
        //localStorage.removeItem("key");
    }
    printUser();
    printOnBuy();
}

function checkUser3(){
   //localStorage.removeItem("emails");
    var data = parseInt(localStorage.getItem("visit"));
    data++;
    //alert(data);
   document.getElementById("counting").innerHTML="Total Visit -" +data + " ";
   localStorage.setItem("visit",data);
    //localStorage.removeItem("vibhanshu1");
    if(!localStorage.getItem("username")){
        location.replace("login.html");
        //localStorage.removeItem("key");
    }
    printUser();
    printOnSubs();
}

function checkUser4(){
    //localStorage.removeItem("emails");
     var data = parseInt(localStorage.getItem("visit"));
     data++;
     //alert(data);
    document.getElementById("counting").innerHTML="Total Visit -" +data + " ";
    localStorage.setItem("visit",data);
     //localStorage.removeItem("vibhanshu1");
     if(!localStorage.getItem("username")){
         location.replace("login.html");
         //localStorage.removeItem("key");
     }
     printUser();
     //printOnSubs();
 }

function printUser(){
    document.getElementById("welcome").innerHTML= "Hi Welcome " + localStorage.getItem("username");
}

function checkLogin(){
    if(localStorage.getItem("username")){
        location.replace("index.html");
        document.getElementById("store").innerHTML=localStorage.getItem("username");
        //localStorage.removeItem("key");
    }
}

function login(){
var id = document.getElementById("username").value;
var pass = document.getElementById("password").value;
var uname=[
    {username:"bhanu",password:"123"},
    {username:"vibhanshu",password:"456"},
    {username:"neeraj",password:"neerajmukta"},
    {username:"rakesh",password:"rakeshsharma"},  
];

for(var i=0;i<uname.length;i++)
{
    if(id.localeCompare(uname[i]["username"])==0 && pass.localeCompare(uname[i]["password"])==0 )
    {
        document.getElementById("msg").innerHTML="Successfully Loged In";
        document.getElementById("username").value="";
        document.getElementById("password").value="";
        if(typeof(Storage)!=="undefined")
        {
            localStorage.setItem("username",id);
            location.replace("index.html");
            //document.getElementById("store").innerHTML=localStorage.getItem("username");
        }
        else document.getElementById("store").innerHTML="Your Browser Doesnot Support Storage";
        break;
        
    }
    else {
        document.getElementById("msg").innerHTML="Incorrect User Id/Password";
        document.getElementById("username").value="";
        document.getElementById("password").value="";

}

}
}
function addCart(id)
{
var a=document.getElementById("nid"+id).innerHTML;
var b=parseInt(document.getElementById("pr"+id).innerHTML);
var c=parseInt(document.getElementById("qty"+id).value);
//alert(id + " " + a + " " + b + " " + c);
var uDetails={
    "id":id,
    "productName":a,
    "productPrice":b,
    "productQty":c
};

if(c>0)
{
    if(typeof(Storage)!==undefined)
    {   
        var us = localStorage.getItem("username");
        var prod = [];
        if(localStorage.getItem(us)){
            var us = localStorage.getItem("username");
            var u=JSON.parse(localStorage.getItem(us));
            var flag = 0;
            var ids = id;
            var qt = c;
            for(var i=0; i<u.length;i++){
                //console.log(u[i].id +"   "+u[i].productName);
                if(u[i].id==ids){
                    u[i].productQty += qt;
                    flag = 1;
                    break;
                }
            }
            if(flag==0){
                u.push(uDetails);
            }
            localStorage.setItem(us,JSON.stringify(u));
        }
        else{
            var regdUsers=[];
            regdUsers.push(uDetails);
            var us = localStorage.getItem("username");
            localStorage.setItem(us,JSON.stringify(regdUsers));
        }

    }
    else document.getElementById("Storage").innerHTML="Storage not available in your browser";

    alert("Product Successfully Added in cart");
}

document.getElementById("qty"+id).value=0;
//printValue();
}

function printValue(){
    var iam = localStorage.getItem("username");
    var u=JSON.parse(localStorage.getItem(iam));
    var str = "";
    for(var i=0; i<u.length;i++){
        //console.log(u[i].id +"   "+u[i].productName);
        if(u[i].productQty>0)
        str +="<br>"+u[i].id+" "+ u[i].productName + " " + u[i].productPrice +" " +u[i].productQty;
    }
    document.getElementById("cartData").innerHTML=str;
}

function printValueBuy(){
    var iam = localStorage.getItem("username")+'1';
    var u=JSON.parse(localStorage.getItem(iam));
    var str = "";
    for(var i=0; i<u.length;i++){
        //console.log(u[i].id +"   "+u[i].productName);
        if(u[i].productQty>0)
        str +="<br>"+u[i].id+" "+ u[i].productName + " " + u[i].productPrice +" " +u[i].productQty;
    }
    document.getElementById("cartData").innerHTML=str;
}

function printOnCart(){
    
    var iam = localStorage.getItem("username");
    var u=JSON.parse(localStorage.getItem(iam));
    var ct = 0;
    var allTotal = 0;
    var str = '<thead><tr><th scope="col">S.R. NO.</th><th scope="col">Product Id</th><th scope="col">Product Name</th><th scope="col">Product Price</th><th scope="col">Product Quantity</th><th scope="col">Total Price</th><th scope="col">Add One More</th><th scope="col">Remove One</th><th scope="col">Buy It</th></tr></thead><tbody>';
    for(var i=0; i<u.length;i++){
        //console.log(u[i].id +"   "+u[i].productName);
        if(u[i].productQty>0){
            ct = i + 1;
            var totalPrice =  u[i].productPrice * u[i].productQty;
            allTotal+=totalPrice;
            str +='<tr class="table-light">';
            str +='<th scope="row">'+ct+'</th>';    
            str += '<td>' + u[i].id + '</td>';    
            str += '<td>' + u[i].productName + '</td>';
            str += '<td>INR - <i class="fas fa-rupee-sign"> ' + u[i].productPrice + '</i> ' + '</td>';
            str += '<td>' + u[i].productQty + '</td>';
            str += '<td>INR - <i class="fas fa-rupee-sign"> ' + totalPrice + '</i> ' + '-/ Only</td>';
            str+= '<td><button class="btn btn-success"';
            str+= 'onclick="addOne('+u[i].id+ ')"><span class="glyphicon glyphicon-upload"><i class="far fa-arrow-alt-circle-up"></i></span></button></td>';
            str+= '<td><button class="btn btn-danger"';
            str+= 'onclick="removeOne('+u[i].id+ ')"><span class="glyphicon glyphicon-download"><i class="far fa-arrow-alt-circle-down"></i></span></button></td>';
            str+= '<td><button class="btn btn-primary"'
            str+= 'onclick="BuyMe('+u[i].id+ ')">';
            str+='BuyIt</td>';
        }
       
    }
    str+='<tr class="table-light">';
    str+='<td colspan="6"></td>';
    str+='<td><button class="btn btn-info">Total Price</button></td>';
    str+='<td><button class="btn btn-warning">INR - <i class="fas fa-rupee-sign"></i>  ' + allTotal+ ' -/ Only</button></td>';
    str+='</tr>';
    document.getElementById("cartPrint").innerHTML=str;
            
}

function removeOne(id){
    
    var us = localStorage.getItem("username");
    var u=JSON.parse(localStorage.getItem(us));
    var flag = 0;
    var ids = id;
    for(var i=0; i<u.length;i++){
        if(u[i].id==ids && u[i].productQty>0){
            u[i].productQty--;
            flag = 1;
            break;
        }
    }
    localStorage.setItem(us,JSON.stringify(u));
    printOnCart();


}
function addOne(id){
    
    var us = localStorage.getItem("username");
    var u=JSON.parse(localStorage.getItem(us));
    var flag = 0;
    var ids = id;
    for(var i=0; i<u.length;i++){
        if(u[i].id==ids && u[i].productQty>0){
            u[i].productQty++;
            flag = 1;
            break;
        }
    }
    localStorage.setItem(us,JSON.stringify(u));
    printOnCart();


}

function BuyProduct(id){

    var a=document.getElementById("nid"+id).innerHTML;
    var b=parseInt(document.getElementById("pr"+id).innerHTML);
    var c=parseInt(document.getElementById("qty"+id).value);
    //alert(id + " " + a + " " + b + " " + c);
    var d = new Date();
    var e=1;
    var n = d.toUTCString();
    var uDetails={
        "id":id,
        "productName":a,
        "productPrice":b,
        "productQty":c,
        "orderTime":n,
        "status":e
    };
    
    
    if(c>0)
    {
        
        if(typeof(Storage)!==undefined)
        {   
            var us = localStorage.getItem("username")+'1';
            var prod = [];
            if(localStorage.getItem(us)){
                var us = localStorage.getItem("username")+'1';
                var u=JSON.parse(localStorage.getItem(us));
                u.push(uDetails);
                localStorage.setItem(us,JSON.stringify(u));
            }
            else{
                var regdUsers=[];
                regdUsers.push(uDetails);
                var us = localStorage.getItem("username")+'1';
                localStorage.setItem(us,JSON.stringify(regdUsers));
            }
    
        }
        else document.getElementById("Storage").innerHTML="Storage not available in your browser";

        alert("Orders Successfully Placed");
    }
   
    document.getElementById("qty"+id).value=0;
    //printValueBuy();
}

function printOnBuy(){
    
    var iam = localStorage.getItem("username")+'1';
    var u=JSON.parse(localStorage.getItem(iam));
    var ct = 0;
    var allTotal = 0;
    var str = '<thead><tr><th scope="col">S.R. NO.</th><th scope="col">Product Id</th><th scope="col">Product Name</th><th scope="col">Product Price</th><th scope="col">Product Quantity</th><th scope="col">Total Price</th><th scope="col">OrderTime</th><th scope="col">OrderStatus</th></thead><tbody>';
    for(var i=0; i<u.length;i++){
        //console.log(u[i].id +"   "+u[i].productName);
        if(u[i].productQty>0){
            ct = i + 1;
            var totalPrice =  u[i].productPrice * u[i].productQty;
            allTotal+=totalPrice;
            str +='<tr class="table-light">';
            str +='<th scope="row">'+ct+'</th>';    
            str += '<td>' + u[i].id + '</td>';    
            str += '<td>' + u[i].productName + '</td>';
            str += '<td>INR - <i class="fas fa-rupee-sign"> ' + u[i].productPrice + '</i> ' + '</td>';
            str += '<td>' + u[i].productQty + '</td>';
            str += '<td>INR - <i class="fas fa-rupee-sign"> ' + totalPrice + '</i> ' + '-/ Only</td>';
            str += '<td>' + u[i].orderTime + '</td>'; 

            if(u[i].status==1){
                str += '<td>' + '<button class="btn btn-danger" onclick="cancelOrder(' + u[i].id + ')">Click To Cancel' + '</button></td>'; 
            }
            else{
                allTotal-=totalPrice;
                str += '<td>' + 'Cancelled' + '</td>'; 
            }
            
        }
       
    }
    str+='<tr class="table-light">';
    str+='<td colspan="6"></td>';
    str+='<td><button class="btn btn-info">Total Price</button></td>';
    str+='<td><button class="btn btn-warning">INR - <i class="fas fa-rupee-sign"></i>  ' + allTotal+ ' -/ Only</button></td>';
    str+='</tr>';
    document.getElementById("buyPrint").innerHTML=str;
            
}

function cancelOrder(id){
    var x = confirm("Do you really wanted to cancel this order??");
    if(x){
        //alert("Delete Me");
        var us = localStorage.getItem("username")+'1';
        var u=JSON.parse(localStorage.getItem(us));
        var flag = 0;
        var ids = id;
        for(var i=0; i<u.length;i++){
            if(u[i].id==ids && u[i].productQty>0){
                u[i].status=0;
                flag = 1;
                break;
            }
        }
        localStorage.setItem(us,JSON.stringify(u));
        alert("Order Successfully Cancelled.");
        printOnBuy();

    }
    else{
        var dear  = localStorage.getItem("username");
        alert('Dear '+ dear + ' Thank You, for not canceling the order.');
    }
}
//
function subscription(){

    var email = document.getElementById("subs").value;
    var v = validateEmail(email);
    var pd = {
        "email":email
    }
    if(!v){
        alert("Invalid Emaill");
    }
    //alert(email);
    else if(email){  
      //  alert(email);
            var us = localStorage.getItem("emails");
            var flag = 0;
            if(localStorage.getItem("emails")){
                //var us = localStorage.getItem("username");
                var u=JSON.parse(localStorage.getItem("emails"));
               
                for(var i=0; i<u.length;i++){
                    var str = u[i].email;
                    if(str.localeCompare(pd['email'])==0){
                        flag = 1;
                        break;
                    }
                }
                if(flag==0)
                u.push(pd);
                localStorage.setItem("emails",JSON.stringify(u));
            }
            else{
                var u = [];
                u.push(pd);
                localStorage.setItem("emails",JSON.stringify(u));
            }
            //var us = localStorage.getItem("username");
            var u=JSON.parse(localStorage.getItem("emails"));
            if(flag==0){
                alert("Email Subscribed Successfully " + email);
            }
            else{
                alert("Your Email is already in our DataBase.");
            }
           
    }
    document.getElementById("subs").value="";
}



function printOnSubs(){
    
    var iam = localStorage.getItem("username");
    var u=JSON.parse(localStorage.getItem("emails"));
    var ct = 0; 
    var str = '<thead><tr><th scope="col">S.R. NO.</th><th scope="col">Email Address</th></thead><tbody>';
    for(var i=0; i<u.length;i++){
            ct = i + 1;
            str +='<tr class="table-light">';
            str +='<th scope="row">'+ct+'</th>';    
            str += '<td>' + u[i].email + '</td></tr>';    
       
    }
    str+='</tr>';
    document.getElementById("buyPrint").innerHTML=str;
    printOnSubs();
            
}

function deleteCart(){
    var x = confirm("Do you really wanted to delete MyCart??");
    if(x){
        //alert("Delete Me");
        var us = localStorage.getItem("username");
        localStorage.removeItem(us);
        alert("My Cart Deleted Successfully.");

    }
    else{
        var dear  = localStorage.getItem("username");
        alert('Dear '+ dear + ' Thank You, for not deleting my cart.');
    }
}

function deleteOrders(){
    var x = confirm("Do you really wanted to delete MyOredrs??");
    if(x){
        //alert("Delete Me");
        var us = localStorage.getItem("username")+'1';
        localStorage.removeItem(us);
        alert("MyOrders Deleted Successfully.");

    }
    else{
        var dear  = localStorage.getItem("username");
        alert('Dear '+ dear + ' Thank You, for not deleting myOrders.');
    }

}

function deleteSubs(){
    alert("As you are not super admin, so you are not able to delete it.");
}

function validateEmail(email) {
    var x = email;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        return false;
    }
    else{
        return true;
    }
}