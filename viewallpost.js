window.onload = function(){

var fullname = localStorage.getItem("fullname");
if(fullname==""){
window.location.href="login.html";
}else{
showPost();
}
}

function showOnePost(ele,onePost){
var href = "loadpost.html";
var content = onePost.content;
var p = document.createElement("pre");
var a = document.createElement("a");
a.className = "a";
a.style.textDecoration = "none";
a.href = href;
p.onclick = function(){
 localStorage.setItem("onePost",JSON.stringify(onePost));
}
a.innerHTML = content;
p.appendChild(a);
var hr = document.createElement("hr");
ele.appendChild(p);
ele.appendChild(hr);
}
function showPost(){
var cap1check = true;
var cap2check = false;
var cap3check = false;
var capcheck = localStorage.getItem ("capcheck");
var ele1 = document.getElementById("tag1-new-content");
var title = document.getElementById("tag1-title");
var db = firebase.database();
var ref = db.ref("Posts/");
ref.on("value",function(snapshot){
snapshot.forEach(function(childSnapshot){
var onePost = childSnapshot.val();
if(onePost.cap1==true||onePost.cap2==true||onePost.cap3==true||onePost.other==true){
 if(onePost.cap1==true&&capcheck=="cap1"){
  title.innerHTML = "1";
  showOnePost(ele1,onePost);
  
  
 }if(onePost.cap2==true&&capcheck=="cap2"){
  title.innerHTML = "2";
  showOnePost(ele1,onePost);
  
  
 }if(onePost.cap3==true&&capcheck=="cap3"){
  title.innerHTML = "3";
  showOnePost(ele1,onePost);
  
  
 }
}else{
alert("other!"+onePost.cap1);
}
});
});
}
