/*code functionality for post.html including the edit/save, like and comment buttons */
var modal=document.getElementById("myModal");
var btn=document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick=function(){
    modal.style.display="block";
}
span.onclick=function(){
    modal.style.display="none";
}

var mod=document.getElementById("Modal");
var buttonn=document.getElementById("Btn");
var spann = document.getElementsByClassName("clo")[0];
buttonn.onclick=function(){
    mod.style.display="block";
}
spann.onclick=function(){
    mod.style.display="none";
}

var modd=document.getElementById("Modal1");
var button1=document.getElementById("Btn1");
var span1 = document.getElementsByClassName("clos")[0];
button1.onclick=function(){
    modd.style.display="block";
}
span1.onclick=function(){
    modd.style.display="none";
}
function saveEdits() {
    var text = document.getElementById("change");
    console.log(text.innerHTML);
    if (text.innerHTML > 0) {
        document.getElementById("edit").contentEditable = true;
        text.innerHTML = 0;
        document.getElementById("save").value = "Save";

        var editElements = document.getElementById("edit");

        
        var user = editElements.innerHTML;

        
        localStorage.userEdits = user;

    } else {
        text.innerHTML = 1;
        document.getElementById("save").value = "Edit";
        document.getElementById("edit").contentEditable = false;

    }
}
function saveEdit() {

    if (localStorage.userEdits != null)
        document.getElementById("edit").innerHTML = localStorage.userEdits;
}
window.onclick = function(add)
    {   var id =  add.target.id;   
       if (id === 'pass')  
       { var text = document.getElementById('try');  
         var text1 = text.value;
         var par = document.createElement('p');
        par.className="pc";
        par.id="commentpara";
        par.innerHTML=text1;
        var pt=document.getElementById('pg');
        pt.appendChild(par);
        // $( "#para" ).append( text1 + '<br>');
         $( text ).val('');  
       }
    }



