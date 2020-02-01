function getNumber(s){
var title=document.getElementById("title");
title.innerHTML=title.innerHTML+s;
var elem=document.getElementById("title-wraper");
elem.scrollLeft=elem.scrollWidth;
var result=document.getElementById("result");
var r=title.innerHTML;
//var r = string.match(title.innerHTML);
result.innerHTML=r;
}
