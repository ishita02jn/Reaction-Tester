var start=new Date().getTime();
function disappear(idno){
   document.getElementById(idno).style.display="none";
}
function getRandomcolor(){
    var num='123456789ABCDEF'.split('');
    var color='#';
    for(var i=1;i<=6;i++){
        color+=num[Math.floor(Math.random()*16)];
    }
    return color;
}
function appear(){
    var left=Math.random()*500;
    var top=Math.random()*500;
    var wi_hi=(Math.random()*200)+50;
   if(Math.random()<0.5){
    document.getElementById("box").style.borderRadius="50%";
   }else{
    document.getElementById("box").style.borderRadius="0px";
   }
   document.getElementById("box").style.backgroundColor=getRandomcolor();
   document.getElementById("box").style.left=left+"px";
   document.getElementById("box").style.top=top+"px";
   document.getElementById("box").style.width=wi_hi+"px";
   document.getElementById("box").style.height=wi_hi+"px";
   document.getElementById("box").style.display="block";
   start=new Date().getTime();
}
function appearAfterDelay(){
    setTimeout(appear,Math.random()*2000);
}
var id1="box";
appearAfterDelay();
document.getElementById(id1).onclick = function(){
    disappear(id1);
    var end=new Date().getTime();
    var timeTaken=(end-start)/1000;
    document.getElementById("time").innerHTML=timeTaken+"s";
    appearAfterDelay();
 } 
 
