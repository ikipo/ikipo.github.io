window.onload = function(){
var fullname = localStorage.getItem("fullname");
if(fullname==""){
window.location.href="login.html";
}else{
var ele = document.getElementById("what-new-content");
var ele1 = document.getElementById("tag1-new-content");
var ele2 = document.getElementById("tag2-new-content");
var ele3 = document.getElementById("tag3-new-content");
for(i=0;i<5;i++){
showWhatNew(ele);
showWhatNew(ele1);
showWhatNew(ele2);
showWhatNew(ele3);
}
}
}

function showAllWhatNew(){
alert("");
}
function showWhatNew(ele){
var href = "#";
var title = "Câu hỏi";
//var ele = document.getElementById("what-new-content");
var p = document.createElement("p");
var a = document.createElement("a");
a.className = "a";
a.href = href;
a.innerHTML = title;
p.appendChild(a);
ele.appendChild(p);
}
