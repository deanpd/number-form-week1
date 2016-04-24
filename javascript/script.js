$("document").ready( function(){

var count = 0;

var sum = 0;

var average = 0;

displayStats();
  
$('#submit').on('click', addNumbersEntered);
$('#reset').on('click', reset);
$('#number-entered').on('focus', clearMessage);

function addNumbersEntered(evt)
  {
    var val = $('#number-entered').val();
    var num = parseFloat(val);
    if (isNaN(num)){
      showMessage('That is not a number.');
    }
    else {
      processNumber(num);
    }
    evt.preventDefault();
  }

function processNumber(number){
  ++count; //++ Adds 1 to the variable.
  sum += number; //Adds number to the sum.
  computeStats(); //Runs computeStats function
  displayStats(); //Runs displayStats function
}
  
function computeStats(){
  var variance;
  if (count > 0){
    average = sum / count;
  }
  else {
    average = undefined;
  }
}
  
function displayStats(){
  displayValue('#count', count); //Displays count variable in <p> with id="count".
  displayValue('#sum', sum); //Displays sum variable in <p> with id="sum".
  displayValue('#average', average); //Displays average variable in <p> with id="average"
 
  function displayValue(selector, value){
    if (value === undefined){
      $(selector).empty();
    }
    else {
      $(selector).text(value);
    }
  }
}
  
function reset(){
  count = 0;
  sum = 0;
  average = 0;
  computeStats();
  displayStats();
}
  
function showMessage(msg){
  $('#message').text(msg);
}
  
function clearMessage(){
  $('#message').text('');
}
  
});