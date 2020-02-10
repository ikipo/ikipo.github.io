window.onload=function(){
showUserInfo();
showNotesList();
showTimetable();

}
var noteId=1;
var noteId2="";
function addNewNote(){
var user=new UserInfo();
var username=user.username;
var id=makeid(5);
if(noteId==1){
id=makeid(5);
}else if(noteId==2){
id=noteId2;
}
var title=document.getElementById("ip-note-title").value.trim();
var content=document.getElementById("ip-note-content").value.trim();
var day=document.getElementById("ip-note-day").value.trim();
var time=document.getElementById("ip-note-time").value.trim();
var other=document.getElementById("ip-note-other").value.trim();
var note=new OneNote(id,title,content,day,time,other,username);
var db=firebase.database();
var ref=db.ref("Notes/"+username+"/"+note.id);
ref.set({"id":note.id,"title":note.title,"content":note.content,"day":note.day,"time":note.time,"other":note.other,"username":note.username});
alert("Xong");
window.location.href="userindex.html";
}
function showEditNote(){
noteId=1;
var div1=document.getElementById("ed-note-container");
var div2=document.getElementById("ed-note-content");
div1.style.display="block";
div2.style.display="block";
showEditNote2(0);
}
function noteClose(){
var div1=document.getElementById("ed-note-container");
var div2=document.getElementById("ed-note-content");
div1.style.display="none";
div2.style.display="none";
}
function showEditTimetable(){
var div1=document.getElementById("add-timetable-container-div");
div1.style.display="block";

var div2=document.getElementById("add-timetable-div");
div2.style.display="block";
}
function showEditTimetableData(){
var user=new UserInfo();
var username=user.username;
var db=firebase.database();
var dayele=document.getElementById("edday");
var dayid=tbindex;
dayele.innerHTML="Thứ "+dayid;
if(dayid==8){
dayele.innerHTML="Chủ Nhật";
}
var ref=db.ref("Timetable/"+username+"/"+dayid);
ref.on("value",function(snapshot){
var tb=snapshot.val();
document.getElementById("edt1").value=tb.t1;
document.getElementById("edt2").value=tb.t2;
document.getElementById("edt3").value=tb.t3;
document.getElementById("edt4").value=tb.t4;
document.getElementById("edt5").value=tb.t5;
document.getElementById("edt6").value=tb.t6;
document.getElementById("edt7").value=tb.t7;
document.getElementById("edt8").value=tb.t8;
document.getElementById("edt9").value=tb.t9;
document.getElementById("edt10").value=tb.t10;
document.getElementById("edt11").value=tb.t11;
document.getElementById("edt12").value=tb.t12;
});
}
function editTimetable(){
showEditTimetable();
showEditTimetableData();
}

function editNotes(){
showEditNote();
}

function addTimetable(tb){

var id=tb.id;
var day=tb.day;
var t1=tb.t1;
var t2=tb.t2;
var t3=tb.t3;
var t4=tb.t4;
var t5=tb.t5;
var t6=tb.t6;
var t7=tb.t7;
var t8=tb.t8;
var t9=tb.t9;
var t10=tb.t10;
var t11=tb.t11;
var t12=tb.t12;
var username=tb.username;
var db=firebase.database();
var ref=db.ref("Timetable/"+username+"/"+id);
ref.set({"id":id,"day":day,"t1":t1,"t2":t2,"t3":t3,"t4":t4,"t5":t5,"t6":t6,"t7":t7,"t8":t8,"t9":t9,"t10":t10,"t11":t11,"t12":t12});
}

function showTimetable(){
var list=[];
var user=new UserInfo();
var username=user.username;
var db=firebase.database();
var ref=db.ref("Timetable/"+username);
ref.on("value",function(snapshot){
snapshot.forEach(function(childSnapshot){
  var tb=childSnapshot.val();
    list.push(tb);
});
  
  //to do
  if(list.length==0){
    list=new timeTableData();
  }
  for(i=0;list.length;i++){
    var tb=list[i];
    showOneTimetable(tb);
    
  }
  
});
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
var closeele=document.createElement("span");
closeele.onclick=function(){
var db=firebase.database();
var ref=db.ref("Notes/"+oneNote.username+"/"+oneNote.id);
ref.remove();
alert("Đã xóa ghi chú này");
window.location.href="userindex.html";
}
closeele.style.float="right";
closeele.style.fontSize="20px";
closeele.style.padding="0px 0px 20px 20px";
closeele.innerHTML="&times";
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
content.appendChild(closeele);
content.appendChild(title);
content.appendChild(detail);
content.appendChild(time);
content.appendChild(day);
content.appendChild(other);
ele.appendChild(content);
title.onclick=function(){
showEditNote();
noteId=2;
noteId2=oneNote.id;
showEditNote2(oneNote);
}
}
function showEditNote2(oneNote){
if(noteId==1){
document.getElementById("ip-note-title").value="";
document.getElementById("ip-note-content").value="";
document.getElementById("ip-note-day").value="";
document.getElementById("ip-note-time").value="";
document.getElementById("ip-note-other").value="";
}else if(noteId==2){
document.getElementById("ip-note-title").value=oneNote.title;
document.getElementById("ip-note-content").value=oneNote.content;
document.getElementById("ip-note-day").value=oneNote.day;
document.getElementById("ip-note-time").value=oneNote.time;
document.getElementById("ip-note-other").value=oneNote.other;
}
}

function oneNoteData(note){
addOneNote(oneNote);
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

function timeTableData(){

var user=new UserInfo();
var day2=new TimeTable("2","Thứ 2","?","?","?","?","?","?","?","?","?","?","?","?",user.username);
var day3=new TimeTable("3","Thứ 3","?","?","?","?","?","?","?","?","?","?","?","?",user.username);
var day4=new TimeTable("4","Thứ 4","?","?","?","?","?","?","?","?","?","?","?","?",user.username);
var day5=new TimeTable("5","Thứ 5","?","?","?","?","?","?","?","?","?","?","?","?",user.username);
var day6=new TimeTable("6","Thứ 6","?","?","?","?","?","?","?","?","?","?","?","?",user.username);
var day7=new TimeTable("7","Thứ 7","?","?","?","?","?","?","?","?","?","?","?","?",user.username);
var day8=new TimeTable("8","Chủ Nhật","?","?","?","?","?","?","?","?","?","?","?","?",user.username);
var list=[day2,day3,day4,day5,day6,day7,day8];
return list;
}

function showOneTimetable(timetb){
var user=new UserInfo();
var id=timetb.id;
var p1=timetb.t1;
var p2=timetb.t2;
var p3=timetb.t3;
var p4=timetb.t4;
var p5=timetb.t5;
var p6=timetb.t6;
var p7=timetb.t7;
var p8=timetb.t8;
var p9=timetb.t9;
var p10=timetb.t10;
var p11=timetb.t11;
var p12=timetb.t12;
var day=timetb.day;
var username=timetb.username;
var ele=document.getElementById("timetable-list-content");
var content=document.createElement("div");
content.className="timetable-content";
var dayele=document.createElement("h3");
dayele.innerHTML=day;
var t1=document.createElement("p");
t1.className="morning";
t1.innerHTML=p1;
var t2=document.createElement("p");
t2.className="morning";
t2.innerHTML=p2;
var t3=document.createElement("p");
t3.className="morning";
t3.innerHTML=p3;
var t4=document.createElement("p");
t4.className="morning";
t4.innerHTML=p4;
var t5=document.createElement("p");
t5.className="morning";
t5.innerHTML=p5;
var t6=document.createElement("p");
t6.className="morning";
t6.innerHTML=p6;
var t7=document.createElement("p");
t7.className="afternoon";
t7.innerHTML=p7;
var t8=document.createElement("p");
t8.className="afternoon";
t8.innerHTML=p8;
var t9=document.createElement("p");
t9.className="afternoon";
t9.innerHTML=p9;
var t10=document.createElement("p");
t10.className="afternoon";
t10.innerHTML=p10;
var t11=document.createElement("p");
t11.className="afternoon";
t11.innerHTML=p11;
var t12=document.createElement("p");
t12.className="afternoon";
t12.innerHTML=p12;
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

function TimeTable(id,day,t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,username){
//id="1"
this.id=id;
this.day=day;
this.t1=t1;
this.t2=t2;
this.t3=t3;
this.t4=t4;
this.t5=t5;
this.t6=t6;
this.t7=t7;
this.t8=t8;
this.t9=t9;
this.t10=t10;
this.t11=t11;
this.t12=t12;
this.username=username;
if(t1=="")this.t1="-";
if(t2=="")this.t2="-";
if(t3=="")this.t3="-";
if(t4=="")this.t4="-";
if(t5=="")this.t5="-";
if(t6=="")this.t6="-";
if(t7=="")this.t7="-";
if(t8=="")this.t8="-";
if(t9=="")this.t9="-";
if(t10=="")this.t10="-";
if(t11=="")this.t11="-";
if(t12=="")this.t12="-";
}
function tbclose(){
var div1=document.getElementById("add-timetable-container-div");
div1.style.display="none";

var div2=document.getElementById("add-timetable-div");
div2.style.display="none";
window.location.href="userindex.html";
}
var tbindex=2;
function tbpre(){
tbindex=tbindex-1;
if(tbindex==1){
tbindex=2;
}
tbreset();
showEditTimetableData();

}

function tbnext(){
tbindex=tbindex+1;
if(tbindex==9){
tbindex=8;
}
tbreset();
showEditTimetableData();

}

function tbdone(){
var user=new UserInfo();
var username=user.username;
var id=tbindex;
var dayele=document.getElementById("edday");
var day=dayele.innerHTML;
var t1=document.getElementById("edt1").value.trim();
var t2=document.getElementById("edt2").value.trim();
var t3=document.getElementById("edt3").value.trim();
var t4=document.getElementById("edt4").value.trim();
var t5=document.getElementById("edt5").value.trim();
var t6=document.getElementById("edt6").value.trim();
var t7=document.getElementById("edt7").value.trim();
var t8=document.getElementById("edt8").value.trim();
var t9=document.getElementById("edt9").value.trim();
var t10=document.getElementById("edt10").value.trim();
var t11=document.getElementById("edt11").value.trim();
var t12=document.getElementById("edt12").value.trim();

var tb=new TimeTable(id,day,t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,username);
addTimetable(tb);
alert("Xong "+day);

}

function tbreset(){
document.getElementById("edt1").value="";
document.getElementById("edt2").value="";
document.getElementById("edt3").value="";
document.getElementById("edt4").value="";
document.getElementById("edt5").value="";
document.getElementById("edt6").value="";
document.getElementById("edt7").value="";
document.getElementById("edt8").value="";
document.getElementById("edt9").value="";
document.getElementById("edt10").value="";
document.getElementById("edt11").value="";
document.getElementById("edt12").value="";
}
