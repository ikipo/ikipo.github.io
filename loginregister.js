function register(){
  var username=document.getElementById("username").value.trim();
  var fullname=document.getElementById("fullname").value.trim();
  var password=document.getElementById("password").value.trim();
  var repassword=document.getElementById("repassword").value.trim();

  if(username==""||password==""||fullname==""||repassword==""||username.length<5||password.length<8){
    if(fullname==""){
      alert("Vui lòng điền Họ và Tên!");
    }else if(username==""){
      alert("Vui lòng điền Tên Đăng Nhập!");
    }else if(password==""){
      alert("Vui lòng điền Mật Khẩu!");
    }else if(repassword==""){
      alert("Vui lòng điền Lặp Lại Mật Khẩu!");
    }else if(username.length<5){
      alert("Tên đăng nhập phải nhiều hơn 4 ký tự.");
    }else if(password.length<8){
      alert("Mật khẩu phải nhiều hơn hoặc bằng 8 ký tự.");
    }
  }else{
    if(password!==repassword){
      alert("Mật khẩu không trùng khớp!");
    }else{
      try{
        var db=firebase.database();
        var ref=db.ref("UserInfo/"+username);
ref.on("value",function(snapshot){
var oneUserInfo=snapshot.val();
if(oneUserInfo!==null){
alert("Tài khoản đã tồn tại!");
}else{
ref.set({"username":username,"fullname":fullname,"password":password,"banner":"https://cdn.pixabay.com/photo/2017/12/15/23/20/roe-deer-3021880_960_720.jpg","avatar":"https://cdn.pixabay.com/photo/2016/03/31/14/47/avatar-1292817_640.png"});
        registerSuccess();
}
});
  
     }catch(e){alert(e.message);}
    }
  }
}
function loginWithFacebook(){
  alert("loginWithFacebook");
}
function loginWithGoogle(){
  alert("loginWithGoogle");
}
function login(){
  var username=document.getElementById("username").value.trim();
  var password=document.getElementById("password").value.trim();

  if(username==""||password==""){
    if(username==""){
      alert("Vui lòng điền Tên Đăng Nhập!");
    }else if(password==""){
      alert("Vui lòng điền Mật Khẩu!");
    }
  }else{
    try{
      var db=firebase.database();
      var ref=db.ref("UserInfo/"+username);
      ref.on("value",function(snapshot){
var oneUserInfo=snapshot.val();
if(oneUserInfo==null){
alert("Đăng nhập không thành công! Tài khoản không tồn tại!");
}else if(oneUserInfo.password!==password){
alert("Mật khẩu sai!");
}else{
localStorage.setItem("username",oneUserInfo.username);
localStorage.setItem("password",oneUserInfo.password);
localStorage.setItem("fullname",oneUserInfo.fullname);
localStorage.setItem("banner",oneUserInfo.banner);
localStorage.setItem("avatar",oneUserInfo.avatar);
window.location.href="userindex.html";
}
});
    }catch(e){alert(e.message);}
  }
}
function registerSuccess(){
var text="Xin chúc mừng! Bạn đã tạo tài khoản thành công!";
        var text2="Bây giờ bạn có thể đăng nhập và sử dụng dịch vụ.";
        var body=document.body;
        var title=document.createElement("h1");
        title.innerHTML=text;
        var content=document.createElement("p");
        content.innerHTML=text2;
  body.insertBefore(title,body.children[0]);
  body.insertBefore(content,body.children[1]);
}
