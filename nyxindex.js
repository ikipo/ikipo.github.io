window.onload=function(){
var firebaseConfig = {
    apiKey: "AIzaSyAlyaVlI6Hge_bvmB1iGlr1E-79nfjFSDI",
    authDomain: "nguoiyeuxa-e5589.firebaseapp.com",
    databaseURL: "https://nguoiyeuxa-e5589.firebaseio.com",
    projectId: "nguoiyeuxa-e5589",
    storageBucket: "nguoiyeuxa-e5589.appspot.com",
    messagingSenderId: "800878951272",
    appId: "1:800878951272:web:33cb718c1a1c4bfcdcb4dd",
    measurementId: "G-V0G602Y9GN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
//demo();
}

function add(){
  var type = document.getElementById("type").value;
  
  var vl = document.getElementById("vl").value;
  var chiso = document.getElementById("chiso").value;
  var dieukien = document.getElementById("dk").value;
  var mota = document.getElementById("rs").value;
  var dieukiens = dieukien.split(",,");
  var motas = mota.split(",,");
  them(type,vl,chiso,dieukiens,motas);
  alert("OK!");
}


function robot(){
	
}

function user(){
  
}

function them(type,vl,chiso,dk,rs){
  vl = Date.now();
	var db = firebase.database();
	var ref = db.ref(type+"/"+vl);
	var rb = new robot();
	rb.vl = vl;
	rb.chiso = chiso;
	rb.dk = dk;
	rb.rs = rs;
	ref.set(rb);
  var typew = "Robot";
  if(type=="Robot"){
    typew="User";
  }
  for(i=0;i<dk.length;i++){
  ref = db.ref(typew+"/"+dk[i]+"/"+vl);
    var us = new user();
    us.vl = vl;
    us.chiso = chiso;
    ref.set(us);
  }
}



function demo(){
  
  var s = "";

 them("Robot","sở thích","nhắn tin",1,["vui","buon"],["nhắn tin cho vơi nỗi buồn nào anh ơi","nhắm tin trò chuyện cùng anh không"]);
 them("Robot","sở trường","lắng nghe",1,["vui","buon"],["anh thích lắng nghe em nói","lắng nghe tâm sự của em là sở thích của anh"]);
}
