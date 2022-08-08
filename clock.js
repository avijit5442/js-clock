//analog clock rotation

setInterval(rotation,1000)
function rotation(){
    var a=new Date;
    var h=a.getHours();
    var m=a.getMinutes();
    var s=a.getSeconds();
    var hr=30*h+m/2;
    var mr=6*m;
    var sr=6*s;
    hour.style.transform=`rotate(${hr}deg)`;
    minute.style.transform=`rotate(${mr}deg)`;
    second.style.transform=`rotate(${sr}deg)`;
}
//digital clock
setInterval(()=>{
var d=new Date();
   var hour=d.getHours();
   var minute=d.getMinutes();
   var second=d.getSeconds();
   if(hour>12)
      {hour=hour-12}
    if(hour<10){
        hour=`0`+hour
    }

   if(second<10)
   {
       second=`0`+second
   }
   
   document.getElementById("digital").innerHTML=`${hour} : ${minute} : ${second}`;
   
   
},1000)

