//user logic
$(document).ready(function() {
  $("form#form").submit(function(event){
    event.preventDefault();
var text = $("#inputText").val();
//var results = encrypt();
encrypt(inputText);
});
});


//business logic
function gridSize (text){
  var strLength= text.length;
  var sqrt= Math.sqrt(strLength);

  if (sqrt%1==0){
    var row = sqrt;
    var column = sqrt;
    //console.log("Square Root!");
  } else {
      Math.floor(sqrt)
      if ((row * column) > strLength ){
        row += 0;
        column += 1;
      } else {
        row += 1;
        column += 1;
      }
  }
};


function placeStr (row, column){

  for (var i=0; i<strLength; i++){
    [0,0],[0,1],[0,2]
  }
}



function readStr (row, column){

}
