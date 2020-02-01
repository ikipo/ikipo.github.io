function layout(){
var idclass=localStorage.getItem("idClass");
showChapter(idclass);
}
function addClassNameFromForm(){
var id=document.getElementById("idclass").value.trim();
var name=document.getElementById("nameclass").value.trim();
var classname=new ClassName(id,name);
if(id==""|name==""){
alert("null");
}else{
addClassName(classname);
alert("ok");
}
}
function addChapterFromForm(){
var id=document.getElementById("idchapter").value.trim();
var name=document.getElementById("namechapter").value.trim();
var idclass=document.getElementById("idclasschapter").value.trim();
var chapter=new Chapter(id,name,idclass);
if(id==""|name==""|idclass==""){
alert("null");
}else{
addChapter(chapter);
alert("ok");
}
}
function addChapterContentFromForm(){
var id=document.getElementById("idchaptercontent").value.trim();
var name=document.getElementById("namechaptercontent").value.trim();
var idclass=document.getElementById("idclasschaptercontent").value.trim();
var idchapter=document.getElementById("idchapterchaptercontent").value.trim();
var chaptercontent=new ChapterContent(id,name,idclass,idchapter);
if(id==""|name==""|idclass==""|idchapter==""){
alert("null");
}else{
addChapterContent(chaptercontent);
alert("ok");
}
}
function addDemo(){
var classname1=new ClassName("1","Lớp 1");
var classname2=new ClassName("2","Lớp 2");
var classname3=new ClassName("3","Lớp 3");
var classname4=new ClassName("4","Lớp 4");
var classname5=new ClassName("5","Lớp 5");
var classname6=new ClassName("6","Lớp 6");
var classname7=new ClassName("7","Lớp 7");
var classname8=new ClassName("8","Lớp 8");
var classname9=new ClassName("9","Lớp 9");
var classname10=new ClassName("10","Lớp 10");
var classname11=new ClassName("11","Lớp 11");
var classname12=new ClassName("12","Lớp 12");
var chapter1=new Chapter("1","Các số đến 10. Hình vuông, hình tròn, hình tam giác","1");
var chapter2=new Chapter("2","Phép cộng, phép trừ trong phạm vi 10.","1");
var chapter3=new Chapter("3","Các số trong phạm vi 100. Đo độ dài. Giải bài toán","1");
var chapter4=new Chapter("4","Phép cộng phép trừ trong phạm vi 100. Đo thời gian","1");
var chapter5=new Chapter("1","Ôn tập và bổ sung","2");
var chapter6=new Chapter("2","Phép cộng có nhớ trong phạm vi 100","2");
var chapter7=new Chapter("3","Phép trừ có nhớ trong phạm vi 100","2");
var chapter8=new Chapter("4","Ôn tập","2");
var chapter9=new Chapter("5","Phép nhân và phép chia","2");
var chapter10=new Chapter("6","Các số trong phạm vi 1000","2");
var chapter11=new Chapter("7","Ôn tập cuối năm học","2");
//var chapter=new Chapter("1","","3");
var chaptercontent1=new ChapterContent("1","Nhiều hơn, ít hơn","1","1");
var chaptercontent2=new ChapterContent("2","Hình vuông, hình tròn, hình tam giác","1","1");
var chaptercontent3=new ChapterContent("3","Các số 1, 2, 3","1","1");
var chaptercontent4=new ChapterContent("4","Các số 1, 2, 3, 4, 5","1","1");
var chaptercontent5=new ChapterContent("5","Bé hơn, dấu <. Lớn hơn, dấu >. Bằng nhau, dấu =","1","1");
var chaptercontent6=new ChapterContent("6","Số 6","1","1");
var chaptercontent7=new ChapterContent("7","Số 7","1","1");
var chaptercontent8=new ChapterContent("8","Số 8","1","1");
var chaptercontent9=new ChapterContent("9","Số 9","1","1");
var chaptercontent10=new ChapterContent("10","Số 0","1","1");
var chaptercontent11=new ChapterContent("11","Số 10","1","1");
var chaptercontent12=new ChapterContent("12","Kiểm tra chương 1.","1","1");
var chaptercontent13=new ChapterContent("1","Phép cộng trong phạm vi 3","1","2");
var chaptercontent14=new ChapterContent("2","Phép cộng trong phạm vi 4","1","2");
var chaptercontent15=new ChapterContent("3","Phép cộng trong phạm vi 5","1","2");
var chaptercontent16=new ChapterContent("4","Số 0 trong phép cộng","1","2");
var chaptercontent17=new ChapterContent("5","Phép trừ trong phạm vi 3","1","2");
var chaptercontent18=new ChapterContent("6","Phép trừ trong phạm vi 4","1","2");
var chaptercontent19=new ChapterContent("7","Phép trừ trong phạm vi 5","1","2");
var chaptercontent20=new ChapterContent("8","Số 0 trong phép trừ","1","2");
var chaptercontent21=new ChapterContent("9","Phép cộng trong phạm vi 6","1","2");
var chaptercontent22=new ChapterContent("10","Phép trừ trong phạm vi 6","1","2");
var chaptercontent23=new ChapterContent("11","Phép cộng trong phạm vi 7","1","2");
var chaptercontent24=new ChapterContent("12","Phép trừ trong phạm vi 7","1","2");
var chaptercontent25=new ChapterContent("13","Phép cộng trong phạm vi 8","1","2");
var chaptercontent26=new ChapterContent("14","Phép trừ trong phạm vi 8","1","2");
var chaptercontent27=new ChapterContent("15","Phép cộng trong phạm vi 9","1","2");
var chaptercontent28=new ChapterContent("16","Phép trừ trong phạm vi 9","1","2");
var chaptercontent29=new ChapterContent("17","Phép cộng trong phạm vi 10","1","2");
var chaptercontent30=new ChapterContent("18","Phép trừ trong phạm vi 10","1","2");
var chaptercontent31=new ChapterContent("19","Bảng cộng và bảng trừ trong phạm vi 10","1","2");
var chaptercontent32=new ChapterContent("20","Kiểm tra cuối kì 1","1","2");
var chaptercontent33=new ChapterContent("1","Điểm - Đoạn thẳng - Độ dài đoạn thẳng","1","3");
var chaptercontent34=new ChapterContent("2","Một chục. Tia số","1","3");
var chaptercontent35=new ChapterContent("3","Mười một, mười hai","1","3");
var chaptercontent36=new ChapterContent("4","Mười ba, mười bốn, mười lăm","1","3");
var chaptercontent37=new ChapterContent("5","Mười sáu, mười bảy, mười tám, mười chín","1","3");
var chaptercontent38=new ChapterContent("6","Hai mươi. Hai chục","1","3");
var chaptercontent39=new ChapterContent("7","Phép cộng dạng 14 + 3","1","3");
var chaptercontent40=new ChapterContent("8","Phép trừ dạng 17 - 3","1","3");
var chaptercontent41=new ChapterContent("9","Phép trừ dạng 17 - 7","1","3");
var chaptercontent42=new ChapterContent("10","Bài toán có lời văn. Giải toán có lời văn","1","3");
var chaptercontent43=new ChapterContent("11","Xăng-ti-mét. Đo độ dài","1","3");
var chaptercontent44=new ChapterContent("12","Các số tròn chục","1","3");
var chaptercontent45=new ChapterContent("13","Cộng các số tròn chục","1","3");
var chaptercontent46=new ChapterContent("14","Trừ các số tròn chục","1","3");
var chaptercontent47=new ChapterContent("15","Điểm ở trong, điểm ở ngoài một hình","1","3");
var chaptercontent48=new ChapterContent("16","Các số có hai chữ số","1","3");
var chaptercontent49=new ChapterContent("17","Bảng các số từ 1 đến 100","1","3");
var chaptercontent50=new ChapterContent("18","Giải toán có lời văn (tiếp theo)","1","3");
var chaptercontent51=new ChapterContent("19","Kiểm tra chương 3","1","3");
var chaptercontent52=new ChapterContent("1","Phép cộng (không nhớ) trong phạm vi 100","1","4");
var chaptercontent53=new ChapterContent("2","Phép trừ (không nhớ) trong phạm vi 100","1","4");
var chaptercontent54=new ChapterContent("3","Đồng hồ- Thời gian- Tuần lễ","1","4");
var chaptercontent55=new ChapterContent("4","Cộng , trừ (không nhớ) trong phạm vi 100","1","4");
var chaptercontent56=new ChapterContent("5","Luyện tập chung","1","4");
var chaptercontent57=new ChapterContent("6","Ôn tập các số đến 10","1","4");
var chaptercontent58=new ChapterContent("7","Ôn tập các số đến 100","1","4");
var chaptercontent59=new ChapterContent("8","Kiểm tra cuối năm","1","4");

var chaptercontent60=new ChapterContent("1","Ôn tập các số đến 100","2","1");
var chaptercontent61=new ChapterContent("2","Số hạng - tổng","2","1");
var chaptercontent62=new ChapterContent("3","Đề -xi-mét","2","1");
var chaptercontent63=new ChapterContent("4","Số bị trừ-số trừ-hiệu","2","1");
var chaptercontent64=new ChapterContent("5","Luyện tập chung","2","1");
var chaptercontent65=new ChapterContent("6","Kiểm tra cuối chương","2","1");
var chaptercontent66=new ChapterContent("1","Phép cộng có tổng bằng 10","2","2");
var chaptercontent67=new ChapterContent("2","26 + 4 ; 36 + 24","2","2");
var chaptercontent68=new ChapterContent("3","9 cộng với 1 số ; 9 + 5","2","2");
var chaptercontent69=new ChapterContent("4","29+5","2","2");
var chaptercontent70=new ChapterContent("5","49+25","2","2");
var chaptercontent71=new ChapterContent("6","8 cộng với 1 số : 8+5","2","2");
var chaptercontent72=new ChapterContent("7","28+5","2","2");
var chaptercontent73=new ChapterContent("8","38+25","2","2");
var chaptercontent74=new ChapterContent("9","Hình chữ nhật - Hình tứ giác","2","2");
var chaptercontent75=new ChapterContent("10","Bài toán về nhiều hơn","2","2");
var chaptercontent76=new ChapterContent("11","7 cộng với 1 số : 7+5","2","2");
var chaptercontent77=new ChapterContent("12","47+5","2","2");
var chaptercontent78=new ChapterContent("13","47+25","2","2");
var chaptercontent79=new ChapterContent("14","Bài toán về ít hơn","2","2");
var chaptercontent80=new ChapterContent("15","Ki-lô-gam","2","2");
var chaptercontent81=new ChapterContent("16","6 cộng với một số : 6+5","2","2");
var chaptercontent82=new ChapterContent("17","26+5","2","2");
var chaptercontent83=new ChapterContent("18","36+15","2","2");
var chaptercontent84=new ChapterContent("19","Bảng cộng","2","2");
var chaptercontent85=new ChapterContent("20","Phép cộng có tổng bằng 100","2","2");
var chaptercontent86=new ChapterContent("21","Lít","2","2");
var chaptercontent87=new ChapterContent("22","Luyện tập chung","2","2");
var chaptercontent88=new ChapterContent("23","Kiểm tra cuối chương","2","2");
var chaptercontent89=new ChapterContent("1","Tìm một số hạng trong một tổng","2","3");
var chaptercontent90=new ChapterContent("2","Số tròn chục trừ đi một số","2","3");
var chaptercontent91=new ChapterContent("3","11 trừ đi một số : 11 - 5","2","3");
var chaptercontent92=new ChapterContent("4","31 - 5","2","3");
var chaptercontent93=new ChapterContent("5","51 - 15","2","3");
var chaptercontent94=new ChapterContent("6","12 trừ đi một số : 12 - 8","2","3");
var chaptercontent95=new ChapterContent("7","32 - 8","2","3");
var chaptercontent96=new ChapterContent("8","52 - 28","2","3");
var chaptercontent97=new ChapterContent("9","Tìm số bị trừ","2","3");
var chaptercontent98=new ChapterContent("10","13 trừ đi một số: 13 - 5","2","3");
var chaptercontent99=new ChapterContent("11","33 - 5","2","3");
var chaptercontent100=new ChapterContent("12","53 - 15","2","3");
var chaptercontent101=new ChapterContent("13","14 trừ đi một số: 14 - 8","2","3");
var chaptercontent102=new ChapterContent("14","34 - 8","2","3");
var chaptercontent103=new ChapterContent("15","54 -18","2","3");
var chaptercontent104=new ChapterContent("16","15, 16, 17, 18 trừ đi một số","2","3");
var chaptercontent105=new ChapterContent("17","55 - 8; 55 - 7; 37 - 8; 68 - 9","2","3");
var chaptercontent106=new ChapterContent("18","65 - 38; 46 - 17 ;57 - 28; 78 - 29","2","3");
var chaptercontent107=new ChapterContent("19","Bảng trừ","2","3");
var chaptercontent108=new ChapterContent("20","100 trừ đi một số","2","3");
var chaptercontent109=new ChapterContent("21","Tìm số trừ","2","3");
var chaptercontent110=new ChapterContent("22","Đường thẳng","2","3");
var chaptercontent111=new ChapterContent("23","Luyện tập chung","2","3");
var chaptercontent112=new ChapterContent("24","Ngày, giờ","2","3");
var chaptercontent113=new ChapterContent("25","Ngày, tháng","2","3");
var chaptercontent114=new ChapterContent("26","Luyện tập chung","2","3");
var chaptercontent115=new ChapterContent("27","Kiểm tra cuối chương","2","3");
var chaptercontent116=new ChapterContent("1","Ôn tập về phép cộng và phép trừ","2","4");
var chaptercontent117=new ChapterContent("2","Ôn tập về hình học","2","4");
var chaptercontent118=new ChapterContent("3","Ôn tập về đo lường","2","4");
var chaptercontent119=new ChapterContent("4","Ôn tập về giải toán","2","4");
var chaptercontent120=new ChapterContent("5","Luyện tập chung","2","4");
//var chaptercontent121=new ChapterContent("6","Kiểm tra cuối kì 1","2","4");
var classarr=[classname1,classname2,classname3,classname4,classname5,classname6,classname7,classname8,classname9,classname10,classname11,classname12];
var chapterarr=[chapter1,chapter2,chapter3,chapter4,chapter5,chapter6,chapter7,chapter8,chapter9,chapter10,chapter11];
var chaptercontentarr=[chaptercontent1,chaptercontent2,chaptercontent3,chaptercontent4,chaptercontent5,chaptercontent6,chaptercontent7,chaptercontent8,chaptercontent9,chaptercontent10,chaptercontent11,chaptercontent12,chaptercontent13,chaptercontent14,chaptercontent15,chaptercontent16,chaptercontent17,chaptercontent18,chaptercontent19,chaptercontent20,chaptercontent21,chaptercontent22,chaptercontent23,chaptercontent24,chaptercontent25,chaptercontent26,chaptercontent27,chaptercontent28,chaptercontent29,chaptercontent30,chaptercontent31,chaptercontent32,chaptercontent33,chaptercontent34,chaptercontent35,chaptercontent36,chaptercontent37,chaptercontent38,chaptercontent39,chaptercontent40,chaptercontent41,chaptercontent42,chaptercontent43,chaptercontent44,chaptercontent45,chaptercontent46,chaptercontent47,chaptercontent48,chaptercontent49,chaptercontent50,chaptercontent51,chaptercontent52,chaptercontent53,chaptercontent54,chaptercontent55,chaptercontent56,chaptercontent57,chaptercontent58,chaptercontent59,chaptercontent60,chaptercontent61,chaptercontent62,chaptercontent63,chaptercontent64,chaptercontent65,chaptercontent66,chaptercontent67,chaptercontent68,chaptercontent69,chaptercontent70,chaptercontent71,chaptercontent72,chaptercontent73,chaptercontent74,chaptercontent75,chaptercontent76,chaptercontent77,chaptercontent78,chaptercontent79,chaptercontent80,chaptercontent81,chaptercontent82,chaptercontent83,chaptercontent84,chaptercontent85,chaptercontent86,chaptercontent87,chaptercontent88,chaptercontent89,chaptercontent90,chaptercontent91,chaptercontent92,chaptercontent93,chaptercontent94,chaptercontent95,chaptercontent96,chaptercontent97,chaptercontent98,chaptercontent99,chaptercontent100,chaptercontent101,chaptercontent102,chaptercontent103,chaptercontent104,chaptercontent105,chaptercontent106,chaptercontent107,chaptercontent108,chaptercontent109,chaptercontent110,chaptercontent111,chaptercontent112,chaptercontent113,chaptercontent114,chaptercontent115,chaptercontent116,chaptercontent117,chaptercontent118,chaptercontent119,chaptercontent120];
for(a=0;a<classarr.length;a++){addClassName(classarr[a]);}
for(b=0;b<chapterarr.length;b++){addChapter(chapterarr[b]);}
for(c=0;c<chaptercontentarr.length;c++){addChapterContent(chaptercontentarr[c]);}
alert("");
}
function getDataClassName(){
var classarr=[];
var db=firebase.database();
var ref=db.ref("ClassName");
ref.on("value",function(snapshot){
snapshot.forEach(function(childSnapshot){
var classname=childSnapshot.val();
classarr.push(classname);
});
});
}
function showChapter(idclass){
var db=firebase.database();
var ref=db.ref("Chapter");
ref.on("value",function(snapshot){
snapshot.forEach(function(childSnapshot){
var chapter=childSnapshot.val();
if(chapter.idclass==idclass){
getDataChapterContent(chapter);
}
});
});
}
function getDataChapterContent(chapter){
var elem=document.getElementById("mychapter");
var wraper=document.createElement("div");
wraper.className="mychapter-wraper";
var elemtitle=document.createElement("div");
elemtitle.className="mychapter-title-wraper";
var elemcontent=document.createElement("div");
elemcontent.className="mychapter-content-wraper";
var titlenumber=document.createElement("div");
titlenumber.className="mychapter-title-number";
titlenumber.innerHTML=chapter.id;
var titletitle=document.createElement("div");
titletitle.className="mychapter-title-title";
titletitle.innerHTML=chapter.name;
elemtitle.appendChild(titlenumber);
elemtitle.appendChild(titletitle);
wraper.appendChild(elemtitle);
var idchapter=chapter.id;
var idclass=chapter.idclass;
var chaptercontentarr=[];
var db2=firebase.database();
var ref2=db2.ref("ChapterContent");
ref2.on("value",function(snapshot2){
snapshot2.forEach(function(childSnapshot2){
var chaptercontent=childSnapshot2.val();
if(chaptercontent.idchapter==idchapter&chaptercontent.idclass==idclass){
chaptercontentarr.push(chaptercontent);
}
});
for(j=0;j<chaptercontentarr.length;j++){
var content=document.createElement("div");
content.className="mychapter-content";
var contentimg=document.createElement("div");
contentimg.className="mychapter-content-img";
var img=document.createElement("img");
img.src="https://cdn.pixabay.com/photo/2017/02/01/08/55/social-2029116_1280.png";
contentimg.appendChild(img);
var contenttitle=document.createElement("div");
contenttitle.className="mychapter-content-title";
contenttitle.innerHTML=chaptercontentarr[j].name;
content.appendChild(contentimg);
content.appendChild(contenttitle);
elemcontent.appendChild(content);
wraper.appendChild(elemcontent);
}
});
elem.appendChild(wraper);
}
function addClassName(classname){
var id=classname.id;
var name=classname.name;
var db=firebase.database();
var ref=db.ref("ClassName/"+id);
ref.set({"id":id,"name":name});
}
function addChapter(chapter){
var id=chapter.id;
var idclass=chapter.idclass;
var name=chapter.name;
var db=firebase.database();
var ref=db.ref("Chapter/"+idclass+id);
ref.set({"id":id,"name":name,"idclass":idclass});
}
function addChapterContent(content){
var id=content.id;
var name=content.name;
var idclass=content.idclass;
var idchapter=content.idchapter;
var db=firebase.database();
var ref=db.ref("ChapterContent/"+idclass+idchapter+id);
ref.set({"id":id,"name":name,"idclass":idclass,"idchapter":idchapter});
}
function ClassName(id,name){
this.id=id;
this.name=name;
}
function Chapter(id,name,idclass){
this.id=id;
this.name=name;
this.idclass=idclass;
}
function ChapterContent(id,name,idclass,idchapter){
this.id=id;
this.name=name;
this.idclass=idclass;
this.idchapter=idchapter;
}
