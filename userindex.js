window.onload=function(){
showUserInfo();
showNotesList();

}

function showUserInfo(){
var userinfo=new UserInfo();
var img1=document.getElementById("img1");
img1.onclick=function(){
alert("Đổi ảnh bìa");
}
var img2=document.getElementById("img2");
img2.onclick=function(){
alert("Đổi avatar");
}
var fullnameele=document.createElement("h2");
fullnameele.onclick=function(){
alert("Đổi Họ và Tên");
}
fullnameele.className="userfullname";
fullnameele.innerHTML=userinfo.fullname;
img1.src=userinfo.banner;
img2.src=userinfo.avatar;
var ele2=document.getElementById("fullnamewr");
ele2.appendChild(fullnameele);
}

function showNotesList(){
var user=new UserInfo();
var db=firebase.database();
var array=[];
var ref=db.ref("Notes/"+user.username);
ref.on("value",function(snapshot){
snapshot.forEach(function(childSnapshot){
var note=childSnapshot.val();
showOneNote(note);
array.push(note);
});
});
}

function showOneNote(oneNote){
var ele=document.getElementById("notes-list-content");
var content=document.createElement("button");
content.className="notes-content";
var title=document.createElement("h2");title.className="n-title";
title.innerHTML=oneNote.title;
var detail=document.createElement("textarea");detail.readOnly=true;
detail.className="n-content";
detail.innerHTML=oneNote.content;
var day=document.createElement("p");
day.className="n-day";
day.innerHTML=oneNote.day;
var time=document.createElement("h3");
time.className="n-time";
time.innerHTML=oneNote.time;
var other=document.createElement("p");
other.className=other;
other.innerHTML=oneNote.other;
content.appendChild(title);
content.appendChild(detail);
content.appendChild(time);
content.appendChild(day);
content.appendChild(other);
ele.appendChild(content);
title.onclick=function(){
alert("Chỉnh sửa, xóa ghi chú là "+title.innerHTML);
}
}

function addNote(){
var user=new UserInfo();
var text=document.getElementById("inputNote").value.trim();
var id=makeid(5);
var note=new OneNote(id,text,"","","","",user.username);
if(text!==""){
var db=firebase.database();
var ref=db.ref("Notes/"+user.username+"/"+note.id);
ref.set({"id":note.id,"title":note.title,"content":note.content,"day":note.day,"time":note.time,"other":note.other,"username":note.username});
alert("Ghi xong!");
window.location.replace("userindex.html");
}else{
alert("Nội dung không được trống!");
}
}
function makeid(length) {
 var result = '';
 var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
 var charactersLength = characters.length;
 for ( var i = 0; i < length; i++ ) {
 result += characters.charAt(Math.floor(Math.random() * charactersLength));
}
 return result;
}

function UserInfo(){
this.username=localStorage.getItem("username");
this.fullname=localStorage.getItem("fullname");
this.password=localStorage.getItem("password");
this.banner=localStorage.getItem("banner");
this.avatar=localStorage.getItem("avatar");
}
function OneUserInfo(username,fullname,password,banner,avatar){
this.username=username;
this.fullname=fullname;
this.password=password;
this.banner=banner;
this.avatar=avatar;
}
function OneNote(id,title,content,day,time,other,username){
this.id=id;
this.title=title;
this.content=content;
this.day=day;
this.time=time;
this.other=other;
this.username=username;
}
