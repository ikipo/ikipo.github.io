function showUtilities(){
var oneUtilities1=new OneUtilities("Trang Cá Nhân","login.html","https://cdn.pixabay.com/photo/2016/04/01/10/59/boy-1300136_1280.png");
var oneUtilities2=new OneUtilities("Trò Chơi","google.com","https://cdn.pixabay.com/photo/2016/10/13/00/22/illustration-1736462_1280.png");
var oneUtilities3=new OneUtilities("Máy Tính Bỏ Túi","calculator.html","https://cdn.pixabay.com/photo/2012/04/01/13/10/blackboard-23421_1280.png");
var oneUtilities4=new OneUtilities("Câu Hỏi & Diễn Đàn ","google.com","https://cdn.pixabay.com/photo/2013/07/13/12/43/boy-160168_1280.png");
var oneUtilities5=new OneUtilities("Tin Tức Từ Báo","google.com","https://cdn.pixabay.com/photo/2016/06/20/07/03/megaphone-1468168_1280.png");
var oneUtilities6=new OneUtilities("Chuyển Đổi Đơn Vị","google.com","https://cdn.pixabay.com/photo/2017/11/24/08/48/office-2974407_1280.png");
var utilities=[oneUtilities1,oneUtilities2,oneUtilities3,oneUtilities4,oneUtilities5,oneUtilities6];
for(i=0;i<utilities.length;i++){
showOneUtilities(utilities[i]);
}
}
function showOneUtilities(oneUtilities){
var elem=document.getElementById("myutilities");
var a=document.createElement("a");
a.href=oneUtilities.link;
var content=document.createElement("div");
content.className="myutilities-content";
var title=document.createElement("div");
title.className="myutilities-title";
title.innerHTML=oneUtilities.title;
var img=document.createElement("img");
img.src=oneUtilities.img;
content.appendChild(img);
content.appendChild(title);
a.appendChild(content);
elem.appendChild(a);
}
function addSlide(){
alert(" ");
}
function showClass(){
var oneClass1=new OneClass("Toán lớp 1","1","https://cdn.pixabay.com/photo/2013/07/12/15/30/counting-149951_1280.png");
var oneClass2=new OneClass("Toán lớp 2","2","https://cdn.pixabay.com/photo/2013/07/12/15/30/counting-149952_1280.png");
var oneClass3=new OneClass("Toán lớp 3","3","https://cdn.pixabay.com/photo/2013/07/12/15/30/counting-149953_1280.png");
var oneClass4=new OneClass("Toán lớp 4","4","https://cdn.pixabay.com/photo/2013/07/12/15/30/counting-149954_1280.png");
var oneClass5=new OneClass("Toán lớp 5","5","https://cdn.pixabay.com/photo/2013/07/12/15/30/counting-149955_1280.png");
var oneClass6=new OneClass("Toán lớp 6","6","https://cdn.pixabay.com/photo/2013/07/12/15/30/counting-149956_1280.png");
var oneClass7=new OneClass("Toán lớp 7","7","https://cdn.pixabay.com/photo/2013/07/12/15/30/counting-149957_1280.png");
var oneClass8=new OneClass("Toán lớp 8","8","https://cdn.pixabay.com/photo/2013/07/12/15/30/counting-149958_1280.png");
var oneClass9=new OneClass("Toán lớp 9","9","https://cdn.pixabay.com/photo/2013/07/12/15/30/counting-149959_1280.png");
var oneClass10=new OneClass("Toán lớp 10","10","https://www.pinclipart.com/picdir/big/7-72675_number-10-clipart-ten-clipart-png-download.png");
var oneClass11=new OneClass("Toán lớp 11","11","http://www.art4apps.org/images/downloadable/11-eleven.png");
var oneClass12=new OneClass("Toán lớp 12","12","http://www.art4apps.org/images/downloadable/12-twelve.png");
var myclass=[oneClass1,oneClass2,oneClass3,oneClass4,oneClass5,oneClass6,oneClass7,oneClass8,oneClass9,oneClass10,oneClass11,oneClass12];
for(i=0;i<myclass.length;i++){
showOneClass(myclass[i]);
}
}
function showOneClass(oneClass){
var elem=document.getElementById("myclass");
var a=document.createElement("a");
a.href="toanlop.html";
var idClass=oneClass.link;
a.onclick=function(){localStorage.setItem("idClass",idClass);};
var content=document.createElement("div");
content.className="myclass-content";
var title=document.createElement("div");
title.className="myclass-title";
title.innerHTML=oneClass.title;
var img=document.createElement("img");
img.src=oneClass.img;
content.appendChild(img);
content.appendChild(title);
a.appendChild(content);
elem.appendChild(a);
}
function showSlide(){
var oneSlide1=new OneSlide("“Học, học nữa, học mãi” _V.I.Lenin_","google.com","https://media.istockphoto.com/photos/magical-old-book-with-sparkles-picture-id1070683626?k=6&m=1070683626&s=612x612&w=0&h=8PIEqqdbZV1i0gomtCShXr5vPSh_8JXXafOTOFWi6GQ=");
var oneSlide2=new OneSlide("“Đi một ngày đàng học một sàng khôn.” _Tục ngữ Việt Nam_","google.com","https://cdn.pixabay.com/photo/2015/03/02/23/40/father-656734_1280.jpg");
var oneSlide3=new OneSlide("“Luyện mãi thành tài, miệt mài tất giỏi.”","google.com","https://cdn.pixabay.com/photo/2015/07/28/22/05/child-865116_1280.jpg");
var oneSlide4=new OneSlide("“Học ăn học nói, học gói học mở.”","google.com","https://cdn.pixabay.com/photo/2014/09/11/19/56/children-441895_1280.jpg");
var oneSlide5=new OneSlide("“Học thầy chẳng tầy học bạn.”","google.com","https://cdn.pixabay.com/photo/2017/08/11/01/37/back-to-school-2629361_1280.jpg");
var oneSlide6=new OneSlide("“Hỏi một câu chỉ dốt chốc lát. Nhưng không hỏi sẽ dốt nát cả đời.”_Ngạn ngữ phương Tây_","google.com","https://cdn.pixabay.com/photo/2015/02/07/10/25/giraffes-627033_1280.jpg");
var slide=[oneSlide1,oneSlide2,oneSlide3,oneSlide4,oneSlide5,oneSlide6];
var slideIndex=0;
var elem=document.getElementById("myslideshow");
var content=document.createElement("div");
content.className="myslideshow-content";
var img=document.createElement("img");
var fisrtindex=slide.length-1;
img.src=slide[fisrtindex].img;
var title=document.createElement("div");
title.className="myslide-title";
title.innerHTML=slide[fisrtindex].title;
content.appendChild(img);
content.appendChild(title);
elem.appendChild(content);
setInterval(function(){
title.innerHTML=slide[slideIndex].title;
img.src=slide[slideIndex].img;
content.appendChild(title);
content.appendChild(img);
elem.appendChild(content);
slideIndex++;
leftToRight(title);
fadeIn(content);
if(slideIndex>fisrtindex){
slideIndex=0;
}
},6000);
}
function fadeIn(elem){
var opac=0;
var id=setInterval(function(){
if(opac==1){
clearInterval(id);
}else{
elem.style.opacity=opac;
opac=opac+0.1;
}
},1);
}
function leftToRight(elem){
var width=window.innerWidth;
var pos=width;
var id=setInterval(function(){
if(pos==0){
clearInterval(id);
elem.style.left="0px";
}else{
elem.style.left="-"+pos+"px";
pos=pos-10;
}
},1);
}
function addEquation(){
alert("addEquation");
}
function OneSlide(title,link,img){
this.title=title;
this.link=link;
this.img=img;
}
function OneClass(title,link,img){
this.title=title;
this.link=link;
this.img=img;
}
function OneUtilities(title,link,img){
this.title=title;
this.link=link;
this.img=img;
}
function OneUser(fullname,username,password){
this.fullname=fullname;
this.username=username;
this.password=password;
}
function OneUserInfo(username,fullname,password,banner,avatar){
this.username=username;
this.fullname=fullname;
this.password=password;
this.banner=banner;
this.avatar=avatar;
}

function OneTimetable(id,title,content,time,username){
this.id=id;
this.title=title;
this.content=content;
this.time=time;
this.username=username;
}
function layout(){
showSlide();
showClass();
showUtilities();
}
