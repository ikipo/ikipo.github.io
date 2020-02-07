window.onload=function(){
showUserInfo();
showNotesList();
for(i=0;i<7;i++){
showTimetable();
}
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

function OneTimetable(id,day,part,content,time,username){
this.id=id;
this.day=day;
this.part=part;
this.content=content;
this.time=time;
this.username=username;
}
function timeTableData(){
var user=new UserInfo();
//Thứ 2
var tb1=new OneTimetable("1","Thứ 2","Tiết 1","","1",user.username);
var tb2=new OneTimetable("2","Thứ 2","Tiết 2","","1",user.username);
var tb3=new OneTimetable("3","Thứ 2","Tiết 3","","1",user.username);
var tb4=new OneTimetable("4","Thứ 2","Tiết 4","","1",user.username);
var tb5=new OneTimetable("5","Thứ 2","Tiết 5","","1",user.username);
var tb6=new OneTimetable("6","Thứ 2","Tiết 6","","1",user.username);
var tb7=new OneTimetable("7","Thứ 2","Tiết 1","","2",user.username);
var tb8=new OneTimetable("8","Thứ 2","Tiết 2","","2",user.username);
var tb9=new OneTimetable("9","Thứ 2","Tiết 3","","2",user.username);
var tb10=new OneTimetable("10","Thứ 2","Tiết 4","","2",user.username);
var tb11=new OneTimetable("11","Thứ 2","Tiết 5","","2",user.username);
var tb12=new OneTimetable("12","Thứ 2","Tiết 6","","2",user.username);
//Thứ 3
var tb1=new OneTimetable("1","Thứ 3","Tiết 1","","1",user.username);
var tb2=new OneTimetable("2","Thứ 3","Tiết 2","","1",user.username);
var tb3=new OneTimetable("3","Thứ 3","Tiết 3","","1",user.username);
var tb4=new OneTimetable("4","Thứ 3","Tiết 4","","1",user.username);
var tb5=new OneTimetable("5","Thứ 3","Tiết 5","","1",user.username);
var tb6=new OneTimetable("6","Thứ 3","Tiết 6","","1",user.username);
var tb7=new OneTimetable("7","Thứ 3","Tiết 1","","2",user.username);
var tb8=new OneTimetable("8","Thứ 3","Tiết 2","","2",user.username);
var tb9=new OneTimetable("9","Thứ 3","Tiết 3","","2",user.username);
var tb10=new OneTimetable("10","Thứ 3","Tiết 4","","2",user.username);
var tb11=new OneTimetable("11","Thứ 3","Tiết 5","","2",user.username);
var tb12=new OneTimetable("12","Thứ 3","Tiết 6","","2",user.username);
//Thứ 4
var tb1=new OneTimetable("1","Thứ 4","Tiết 1","","1",user.username);
var tb2=new OneTimetable("2","Thứ 4","Tiết 2","","1",user.username);
var tb3=new OneTimetable("3","Thứ 4","Tiết 3","","1",user.username);
var tb4=new OneTimetable("4","Thứ 4","Tiết 4","","1",user.username);
var tb5=new OneTimetable("5","Thứ 4","Tiết 5","","1",user.username);
var tb6=new OneTimetable("6","Thứ 4","Tiết 6","","1",user.username);
var tb7=new OneTimetable("7","Thứ 4","Tiết 1","","2",user.username);
var tb8=new OneTimetable("8","Thứ 4","Tiết 2","","2",user.username);
var tb9=new OneTimetable("9","Thứ 4","Tiết 3","","2",user.username);
var tb10=new OneTimetable("10","Thứ 4","Tiết 4","","2",user.username);
var tb11=new OneTimetable("11","Thứ 4","Tiết 5","","2",user.username);
var tb12=new OneTimetable("12","Thứ 4","Tiết 6","","2",user.username);
//Thứ 5
var tb1=new OneTimetable("1","Thứ 5","Tiết 1","","1",user.username);
var tb2=new OneTimetable("2","Thứ 5","Tiết 2","","1",user.username);
var tb3=new OneTimetable("3","Thứ 5","Tiết 3","","1",user.username);
var tb4=new OneTimetable("4","Thứ 5","Tiết 4","","1",user.username);
var tb5=new OneTimetable("5","Thứ 5","Tiết 5","","1",user.username);
var tb6=new OneTimetable("6","Thứ 5","Tiết 6","","1",user.username);
var tb7=new OneTimetable("7","Thứ 5","Tiết 1","","2",user.username);
var tb8=new OneTimetable("8","Thứ 5","Tiết 2","","2",user.username);
var tb9=new OneTimetable("9","Thứ 5","Tiết 3","","2",user.username);
var tb10=new OneTimetable("10","Thứ 5","Tiết 4","","2",user.username);
var tb11=new OneTimetable("11","Thứ 5","Tiết 5","","2",user.username);
var tb12=new OneTimetable("12","Thứ 5","Tiết 6","","2",user.username);
//Thứ 6
var tb1=new OneTimetable("1","Thứ 6","Tiết 1","","1",user.username);
var tb2=new OneTimetable("2","Thứ 6","Tiết 2","","1",user.username);
var tb3=new OneTimetable("3","Thứ 6","Tiết 3","","1",user.username);
var tb4=new OneTimetable("4","Thứ 6","Tiết 4","","1",user.username);
var tb5=new OneTimetable("5","Thứ 6","Tiết 5","","1",user.username);
var tb6=new OneTimetable("6","Thứ 6","Tiết 6","","1",user.username);
var tb7=new OneTimetable("7","Thứ 6","Tiết 1","","2",user.username);
var tb8=new OneTimetable("8","Thứ 6","Tiết 2","","2",user.username);
var tb9=new OneTimetable("9","Thứ 6","Tiết 3","","2",user.username);
var tb10=new OneTimetable("10","Thứ 6","Tiết 4","","2",user.username);
var tb11=new OneTimetable("11","Thứ 6","Tiết 5","","2",user.username);
var tb12=new OneTimetable("12","Thứ 6","Tiết 6","","2",user.username);
//Thứ 7
var tb1=new OneTimetable("1","Thứ 7","Tiết 1","","1",user.username);
var tb2=new OneTimetable("2","Thứ 7","Tiết 2","","1",user.username);
var tb3=new OneTimetable("3","Thứ 7","Tiết 3","","1",user.username);
var tb4=new OneTimetable("4","Thứ 7","Tiết 4","","1",user.username);
var tb5=new OneTimetable("5","Thứ 7","Tiết 5","","1",user.username);
var tb6=new OneTimetable("6","Thứ 7","Tiết 6","","1",user.username);
var tb7=new OneTimetable("7","Thứ 7","Tiết 1","","2",user.username);
var tb8=new OneTimetable("8","Thứ 7","Tiết 2","","2",user.username);
var tb9=new OneTimetable("9","Thứ 7","Tiết 3","","2",user.username);
var tb10=new OneTimetable("10","Thứ 7","Tiết 4","","2",user.username);
var tb11=new OneTimetable("11","Thứ 7","Tiết 5","","2",user.username);
var tb12=new OneTimetable("12","Thứ 7","Tiết 6","","2",user.username);
//Chủ Nhật
var tb1=new OneTimetable("1","Chủ Nhật","Tiết 1","","1",user.username);
var tb2=new OneTimetable("2","Chủ Nhật","Tiết 2","","1",user.username);
var tb3=new OneTimetable("3","Chủ Nhật","Tiết 3","","1",user.username);
var tb4=new OneTimetable("4","Chủ Nhật","Tiết 4","","1",user.username);
var tb5=new OneTimetable("5","Chủ Nhật","Tiết 5","","1",user.username);
var tb6=new OneTimetable("6","Chủ Nhật","Tiết 6","","1",user.username);
var tb7=new OneTimetable("7","Chủ Nhật","Tiết 1","","2",user.username);
var tb8=new OneTimetable("8","Chủ Nhật","Tiết 2","","2",user.username);
var tb9=new OneTimetable("9","Chủ Nhật","Tiết 3","","2",user.username);
var tb10=new OneTimetable("10","Chủ Nhật","Tiết 4","","2",user.username);
var tb11=new OneTimetable("11","Chủ Nhật","Tiết 5","","2",user.username);
var tb12=new OneTimetable("12","Chủ Nhật","Tiết 6","","2",user.username);

}
function showTimetable(){
var ele=document.getElementById("timetable-list-content");
var content=document.createElement("div");
content.className="timetable-content";
var dayele=document.createElement("h3");
dayele.innerHTML="Thứ ...";
var t1=document.createElement("p");
t1.className="morning";
t1.innerHTML="Môn học";
var t2=document.createElement("p");
t2.className="morning";
t2.innerHTML="Môn học";
var t3=document.createElement("p");
t3.className="morning";
t3.innerHTML="Môn học";
var t4=document.createElement("p");
t4.className="morning";
t4.innerHTML="Môn học";
var t5=document.createElement("p");
t5.className="morning";
t5.innerHTML="Môn học";
var t6=document.createElement("p");
t6.className="morning";
t6.innerHTML="Môn học";
var t7=document.createElement("p");
t7.className="afternoon";
t7.innerHTML="Môn học";
var t8=document.createElement("p");
t8.className="afternoon";
t8.innerHTML="Môn học";
var t9=document.createElement("p");
t9.className="afternoon";
t9.innerHTML="Môn học";
var t10=document.createElement("p");
t10.className="afternoon";
t10.innerHTML="_";
var t11=document.createElement("p");
t11.className="afternoon";
t11.innerHTML="Môn học";
var t12=document.createElement("p");
t12.className="afternoon";
t12.innerHTML="Môn học";
content.appendChild(dayele);
content.appendChild(t1);
content.appendChild(t2);
content.appendChild(t3);
content.appendChild(t4);
content.appendChild(t5);
content.appendChild(t6);
content.appendChild(t7);
content.appendChild(t8);
content.appendChild(t9);
content.appendChild(t10);
content.appendChild(t11);
content.appendChild(t12);
ele.appendChild(content);
}
