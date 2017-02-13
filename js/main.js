//turn red light on for this much time
//turn red light off
function streetLight(){
  setTimeout(function (){
    $("#top").css("background-color", "red");

  }, 1000);
  setTimeout(function (){
    $("#top").css("background-color", "black");

  }, 2000);

  //turn yellow time on for this time
  //turn yellow light off
  var test = setTimeout(function (){
    $("#middle").css("background-color", "yellow");

  }, 2000);
  setTimeout(function (){
    $("#middle").css("background-color", "black");

  }, 3000);


  //turn green light on for this much time
  //turn green light off

  var test = setTimeout(function (){
    $("#down").css("background-color", "green");

  }, 3000);
  setTimeout(function (){
    $("#down").css("background-color", "black");
    streetLight()
  }, 4000);


}
streetLight()



//begin cycle again
setInterval
