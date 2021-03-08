var wrapper=document.body.querySelector(".wrapper");
var user = 0;
var dragon = 0;

while(user<5||dragon<10){
  var damage= Number(prompt("How many hits do you want to do to the dragon?"));
  var dragdamage = Math.floor(Math.random() * damage) + 1;
  if(dragdamage>5){
    dragdamage = 1
  }
  else{
    dragdamage = dragdamage
  }
  userdamage = Math.floor(Math.random() * 2) + 1;
  dragon = dragon + dragdamage;
  user = user + userdamage;
}
if(user>5||dragon<10){
  wrapper.innerHTML="You Lost";
}
else if(user<5||dragon>10){
  wrapper.innerHTML="You Won";
}
else{
  wrapper.innerHTML="Tie";
}