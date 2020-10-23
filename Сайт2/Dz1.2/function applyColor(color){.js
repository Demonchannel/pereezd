function checkSelectValue1(){
  let a = document.querySelector('.myclass1').value;
  
  document.body.style.backgroundColor = a;
  
}
function checkSelectValue2(){
  let b = document.querySelector('.mySelect2').value;
  
document.body.style.backgroundColor = b;
  
}
function checkSelectValue3(){
  let c = document.querySelector('.mySelect3').value;
  
  document.body.className = c;
  
}
function checkSelectValue(){
  let d = document.querySelector('.myclass').value;
  
document.body.style.backgroundColor = d;
  
}
function checkSelectValue5(selectElement){
  
  document.body.style.backgroundColor = selectElement.value;
    
  }