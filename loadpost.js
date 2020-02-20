window.onload = function (){
var onePostString = localStorage.getItem("onePost");
var onePost = JSON.parse(onePostString);
load(onePost);
reply();
loadRep();
}
function loadRep(){

}
function reply(){
var replyTextarea = document.createElement("textarea");
replyTextarea.rows = "3";
replyTextarea.placeholder = "Nhập nội dung ...";

var replyBtn = document.createElement("button");
replyBtn.className = "button";
replyBtn.innerHTML = "Trả lời";
replyBtn.onclick = function(){
var content = replyTextarea.value.trim();
var repUser = localStorage.getItem("username");
var onePostString = localStorage.getItem("onePost");
var onePost = JSON.parse(onePostString);
var idPost = onePost.id;
var quesUser = onePost.username;
var oneReply = new OneReply(content, quesUser, repUser, idPost);
alert(JSON.stringify(oneReply));
}
document.body.appendChild(replyBtn);
document.body.appendChild(replyTextarea);
}
function load(onePost){
 var posttitle = onePost.title;
 var postcontent = onePost.content;
 var postimages = onePost.images;

 var body = document.body;
 var ele = document.createElement("div");
document.className = "one-post-container";
var wraper = document.createElement("div");
document.className = "one-post-wraper";
wraper.style.textAlign = "center";
var title = document.createElement("h3");
document.className = "one-post-title";
title.innerHTML = posttitle;
var content = document.createElement("pre");
document.className = "one-post-content";
content.style.textAlign = "left";
content.innerHTML = postcontent;
wraper.appendChild(title);
wraper.appendChild(content);
if(postimages[0]!==""){
for(j=0;j<postimages.length;j++){
var img = document.createElement("img");
img.src = postimages[j];
img.style.width = "80%";
wraper.appendChild(img);
}
}
ele.appendChild(wraper);
body.appendChild(ele);
}

function OneReply(content, quesUser, repUser, idPost){
this.id = makeid(5);
this.content = content;
this.quesUser = quesUser;
this.repUser = repUser;
this.idPost = idPost;
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