function display(value){
    calculator.screen.value+=value;
}

var i = 0;
function brackets(){
if(i == 0){
calculator.screen.value += '(';
i = 1;
}
else if(i == 1){
calculator.screen.value += ')';
i = 0;
}
}

function backspace(){
var x = calculator.screen.value;
if(x.length > 0){
x = x.substring(0, x.length-1);
calculator.screen.value = x;
}
}

function Cbtn(){
alert("Alert : Clearing Screen");
calculator.screen.value="";
}

function equalTo(){
    calculator.screen.value= eval(calculator.screen.value);
}

function val(){
    var y= calculator.screen.value;
    if(y=='undefined'){
    alert("No Input");
    }
}   
