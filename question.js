window.onload = function(){
var fullname = localStorage.getItem("fullname");
if(fullname==""){
window.location.href="login.html";
}else{
var ele = document.getElementById("what-new-content");

showPost();
}
}
function showAllWhatNew(){
alert("");
}
function showOnePost(ele,onePost){
var href = "#";
var title = onePost.title;
var p = document.createElement("p");
var a = document.createElement("a");
a.className = "a";
a.href = href;
a.innerHTML = title;
p.appendChild(a);
ele.appendChild(p);
}
function showPost(){
var loop1 = 1;
var loop2 = 1;
var loop3 = 1;
var ele1 = document.getElementById("tag1-new-content");
var ele2 = document.getElementById("tag2-new-content");
var ele3 = document.getElementById("tag3-new-content");
var db = firebase.database();
var ref = db.ref("Posts/");
ref.on("value",function(snapshot){
snapshot.forEach(function(childSnapshot){
var onePost = childSnapshot.val();
if(onePost.cap1==true||onePost.cap2==true||onePost.cap3==true||onePost.other==true){
 if(onePost.cap1==true){
  if(loop1<6){
  showOnePost(ele1,onePost);
  loop1++;
  }
 }if(onePost.cap2==true){
  if(loop2<6){
  showOnePost(ele2,onePost);
  loop2++;
  }
 }if(onePost.cap3==true){
  if(loop3<6){
  showOnePost(ele3,onePost);
  loop3++;
  }
 }
}else{
alert("other!"+onePost.cap1);
}
});
});
}
