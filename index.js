const inputSlider = document.querySelector("[data-lengthslider]")
const lengthDisplay = document.querySelector("[data-lengthNumber");
const passwrodDisplay = document.querySelector("[data-passwordDisplay]")
const copyBtn = document.querySelector("[data-copy]");
const copyMsg =document.querySelector("[data-copMsg]");
const uppercase =document.querySelector("#Uppercase");
const lowercase =document.querySelector("#Lowercase");
const numberCheck = document.querySelector("#numbers");
const symbolCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn =document.querySelector(".generatebtn");
const allCheck = document.querySelector("input[type=checkbox]");
const symbols ="`~!@#${%^}&[*](<)_-+=:;'[">";

let password ="";
let passwordLength=10;
checkCount = 1;
handslider();

// genrate of function for all btn
// set passwrod lenght
function handslider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerHTML =passwordLength;



}

function setIndicator(color){
    indicator.computedStyleMap.backgorund=color;


}

function getRanInteger(min, max){

return Math.floor(Math.random() * (max-min)) + min;
}

function generateRandomNumber(){
    return getRanInteger(0,9);
}

function generateLowerCase(){
    return String.fromCharCode(getRanInteger(97,123))
}

function generateUpperCase(){
    return String.fromCharCode(getRanInteger(65,91))
}

function generatesymoble(){
    const randNum =getRanInteger(0, symbols.length);
    
    return symbols.charAt(randNum);
}

function calcStrength(){
    let hasUpper =false;
    let hasLower= false;
    let hasNum = false;
    let hasSym =false;
    if(uppercaseCheck.checked) hasUpper =true;
    if(lowercaseCheck.checked) hasLower =true;
    if(numberCheck.checked) hasNum =true;
    if(symbolCheck.checked) hasSym = true;
    if(hasUpper && hasLower && (hasNum|| hasSym) && passwordLength >0){
        setIndicator("#0f0");
    
    }
    else if(
        (hasLower || hasUpper) && 
        (hasNum || hasSym) && 
        passwordLength >=6
    )
    {
        setIndicator("ff0");

    }
    else{
        setIndicator("#f00");
    }

}

async function copycontent(){
try{
    await navigator.clipboard.writeText(passwrodDisplay.value);
copyMsg.innerText = "copied";

}
catch(e){
    copyMsg.innerText="failed";
}



copyMsg.classList.add("active");
setTimeout(() => {
    copyMsg.classList.remove("active");
}, 5000);

}

function sufflePasword(){
    //fisher 
}
function handleCheckboxChange() {
    checkCount =0;
    allCheckBox.foreach((CheckBox)=>{
        if(checkCount.checked)
        checkCount++;

    });
    if(passwordLength<checkCount){
        passwordLength =checkCount;
        handslider();
    }
}

allCheckBox.foreach((CheckBox) =>{
    CheckBox.addEventListener('change',handleCheckboxChange)
})

inputSlider.addEventListener('input', (e)=>{
    passwordLength = e.target.value;
    handslider();
})

copyBtn.addEventListener('click', (e)=>{
    if(passwrodDisplay.value)
    copycontent();
})

generateBtn.addEventListener('click', ()=>{
  if(checkCount<=0) return;
  if(passwordLength <checkCount){
    passwordLength =checkCount;
    handslider();
  }
  password =""
  if(uppercase.checked){
    password += generateUpperCase();
  }
  if(lowercase.checked){
    password +=generateLowerCase();

  }
  if(numberCheck.checked){
    password += generateRandomNumber();
  }
  if(symbolCheck.checked){
    password += generatesymoble();
  }
})


//remvoe of old password
 let funcArr =[];

 if(lowercaseCheck.checked){
    funcArr.push(generateLowerCase);
 }

 if(numberCheck.checked){
    funcArr.push(generateRandomNumber);
 }
 if(symbolCheck.checked){
    funcArr.push(generatesymoble);
 }
 
 for(let i =0; i< funcArr.length; i++){
    password +=funcArr[i]();
 }
for(let i 0; )