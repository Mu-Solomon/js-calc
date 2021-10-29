let number,operator,inputNum,clear,answerNum,equals,allClear;

number = document.querySelectorAll('button#number');
operator = document.querySelectorAll('button#symbol');
inputNum = document.getElementById('inputNum');
clear = document.getElementById("empty");
answerNum = document.getElementById('answerNum');
equals = document.querySelectorAll('button#number')[11];
allClear = document.getElementsByClassName('allClear')[0];
for(var i = 0; i < number.length - 1; i++) {
    number[i].addEventListener('click', function() {input(this)});
}

function input(that) {
    let num = that.innerText;
    let numb = document.createTextNode(num.toLocaleString('en-US'));
    return inputNum.appendChild(numb);;
    //inputNum.innerHTML = this.innerHTML;
    //alert('The number clicked is ' + this.innerHTML);

}
clear.addEventListener("click",backspace);
function backspace() {
    let arr = inputNum.innerHTML.split('');
    arr.pop();
    //arr.pop();
    inputNum.innerHTML = arr.join('');
/*inputNum.innerHTML = "";
answerNum.innerText = "";*/
}

allClear.addEventListener('click',clearAll);

//clear.addEventListener('mousedown', clearAll);
function clearAll() {

        inputNum.innerHTML = "";
        answerNum.innerText = "";
        //alert("I've gone")
}

for(var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function() {operate(this)});
}

function operate(that) {
    //let numb = document.createTextNode(this.innerHTML);
    if(inputNum.innerHTML === ""){
        if(that.innerHTML == operator[2].innerHTML) {
            let minus = document.createTextNode("-");
            inputNum.appendChild(minus);
        }  else if(that.innerHTML == operator[1].innerHTML) {
            let minus = document.createTextNode("+");
            inputNum.appendChild(minus);
        }  

    } else {
        //if(that.innerHTML == '')
        if(that.innerHTML == operator[3].innerHTML) {
            let times = document.createTextNode("*");
            inputNum.appendChild(times);
        } else if(that.innerHTML == operator[0].innerHTML) {
            let divide = document.createTextNode("/");
            inputNum.appendChild(divide);
        }
         else {
            let operand = document.createTextNode(that.innerHTML);
            inputNum.appendChild(operand);
            return operand;
        }

        /*if(inputNum.appendChild(operand)) { }*/
    }
    //alert(typeof inputNum);
}
equals.addEventListener('click', function() {
    if(isNaN(inputNum.innerHTML) || inputNum.innerHTML !== "") {

        answerNum.style.fontSize = "40px";
        document.getElementById('answer').style.height = '83px';
        answerNum.textContent = eval(inputNum.innerHTML).toLocaleString('en-US');
        
        if(answerNum.innerHTML.length > 12){
        document.getElementById('answerNum').style.fontSize = '25px';
        document.getElementById('answer').style.height = '82px';

        } /*else if(answerNum.innerHTML.length > 13) {
            console.log('Too many!');
        } else {
            console.log('Everything OK');
        }*/
        
    } else if(inputNum.innerHTML === "") {

        let txt = "That is not correct!";
        //let modTxt = txt.fontsize = "10px";
        answerNum.style.fontSize = "25px";
        document.getElementById('answer').style.height = '65px';
        answerNum.textContent = txt;
    }
    //alert(Number(inputNum.innerHTML
    
});
var testing = document.getElementById('locale').innerHTML;
//alert(eval(testing).toLocaleString('en-US'));