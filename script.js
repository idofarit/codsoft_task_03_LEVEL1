let display1 = document.querySelector(".disp-1");
let display2 = document.querySelector(".disp-2");
let temporaryR = document.querySelector(".tmp-result");
let numbers = document.querySelectorAll(".number");
let operationEl = document.querySelectorAll(".operation");
let equal = document.querySelector(".equal");
let allClear = document.querySelector(".all-clear");
let clear = document.querySelector(".last-entity-clear");


let disp1num = "";
let disp2num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

numbers.forEach(number=>{
    number.addEventListener('click',(e)=>{
        if(e.target.innerText === "." && !haveDot){
            haveDot = true
        }else if(e.target.innerText==="." && haveDot){
            return
        }
        disp2num += e.target.innerText;
        display2.innerText = disp2num
    })
})


operationEl.forEach(operation =>{
    operation.addEventListener('click',(e)=>{
        if(!disp2num){
            result
        }
        haveDot = false;
        let operationName = e.target.innerText;
        if(disp1num && disp2num && lastOperation){
            mathOperation();
        }else{
            result = parseFloat(disp2num)
        }
        clearVar(operationName);
        lastOperation = operationName;
        console.log(result);
    })
})

function clearVar(name = ""){
    disp1num += disp2num + ' '+ name + ' ';
    display1.innerText = disp1num;
    display2.innerText ="";
    disp2num ='';
    temporaryR.innerText = result;
}

function mathOperation(){
    if(lastOperation === "*"){
        result = parseFloat(result) * parseFloat(disp2num)
    }else if(lastOperation === "+"){
        result = parseFloat(result) + parseFloat(disp2num)
    }else if(lastOperation === "-"){
        result = parseFloat(result) + parseFloat(disp2num)
    }else if(lastOperation === "/"){
        result = parseFloat(result) / parseFloat(disp2num)
    }else if(lastOperation === "%"){
        result = parseFloat(result) % parseFloat(disp2num)
    }
} 


equal.addEventListener('click', (e)=>{
    if(!disp2num || !disp1num){
        return
    }
    haveDot = false;
    mathOperation();
    clearVar();
    display2.innerText = result;
    temporaryR.innerText = '';
    disp2num = result;
    disp1num='';
})

allClear.addEventListener('click',(e)=>{
    display1.innerText = '0';
    display2.innerText='0';
    disp1num='';
    disp2num='';
    result='';
    temporaryR.innerText='0';
})

clear.addEventListener('click',(e)=>{
    display2.innerText=display2.innerText.slice(0,-1);
    disp2num=display2.innerText;
})


window.addEventListener('keydown',(e)=>{
    if(
        e.key === "0" ||
        e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4" ||
        e.key === "5" ||
        e.key === "6" ||
        e.key === "7" ||
        e.key === "8" ||
        e.key === "9" ||
        e.key === "."
    ){
        clickNumbers(e.key);
    }else if(
        e.key === "*" ||
        e.key === "-" ||
        e.key === "/" ||
        e.key === "+"
    ){
        clickOperation(e.key)
    }else if(e.key == "Enter" || e.key === "=" || e.keyCode == 13){
        clickEqual();
    }else if(e.key == "Backspace"){
        clickBackspace();
    }else if(e.key == "Space" || e.keyCode == 32 || e.key ==" "){
        clickAllClear();
    }

})

function clickNumbers(key){
    numbers.forEach(button =>{
        if(button.innerText === key){
            button.click(); 
        }
    })
}

function clickOperation(key){
    operationEl.forEach(button =>{
        if(button.innerText === key){
            button.click();
        }
    })
}
function clickAllClear(){
    allClear.click();

}

function clickEqual(){
    equal.click();
}
function clickBackspace(){
    clear.click();
}



