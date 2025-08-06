function display(value){
	if (calculator.screen.value.slice(-1) != ")") {
		calculator.screen.value+=value;
		click=true;
		if(i==1){
			i=0;
		}
	}
}
var click;

function display1(value){
	if(value=="-" && calculator.screen.value[calculator.screen.value.length-1] != "-"){
		calculator.screen.value+=value;
		click = false;
	}
	if(click){
		(i == 1 && value == "-") || i == 0 ? (calculator.screen.value += value, click = false) : null;
	}
}

var i = 0;
function brackets(){
	var x = calculator.screen.value;
	var y = x.slice(-1);
	if(i == 0 && (y == "+" || y == "-" || y == "x" || y == "/" || y == "%" || y == "")){
		calculator.screen.value += '(';
		i = 1;
	}
	else if((i == 1 && !(y == "+" || y == "-" || y == "x" || y == "/" || y == "%" || y == "(")) ||
	(i == 0 && !(y == "+" || y == "-" || y == "x" || y == "/" || y == "%" || y == "(" || x.length == 1 || y == ")")))
	{
		calculator.screen.value += ')';
		i = 0;
	}
	else if (i == 0 && y == ")") {
		let eqtn = calculator.screen.value;
		
		let openCnt = (eqtn.match(/\(/g)||[]).length;
		let closeCnt = (eqtn.match(/\)/g)||[]).length;

		if (closeCnt<openCnt) {
			calculator.screen.value += ')';
		}
	}
	click=true;
}

function backspace(){
	var x = calculator.screen.value;
	if(x.length > 0){
		x = x.substring(0, x.length-1);
		calculator.screen.value = x;
	}
	click=true;
}

function Cbtn(){
	i=0;
    document.getElementById('clearScreen').style.display = 'block';
	calculator.screen.value="";
	disableForm();
}

function equalTo(){
	var displayVal=calculator.screen.value.replaceAll('x','*');
    calculator.screen.value= eval(displayVal);
}

function val(){
    var y= calculator.screen.value;
    if(y=='undefined'){
		document.getElementById('noInput').style.display = 'block';
		calculator.screen.value="";
		disableForm();
    }
}

function restrictKeyboard(event) {
  event.preventDefault();
}

function disableForm() {
  const elements = document.getElementById('calculator').elements;
  for (let i = 0; i < elements.length; i++) {
	if(elements[i].name != 'clrScrn' && elements[i].name != "noIn"){
		elements[i].disabled = true;
	}
  }
}

function enableForm() {
  const elements = document.getElementById('calculator').elements;
  for (let i = 0; i < elements.length; i++) {
		elements[i].disabled = false;
  }
}