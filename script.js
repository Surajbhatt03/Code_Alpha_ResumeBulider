 

function addNewWEField()
{ 
   let newNode = document.createElement('textarea')
//    belowline is used to add classes in textarea and rows is a attribute 
   newNode.classList.add('form-control') 
   newNode.classList.add('weField')
   newNode.classList.add('mt-3')
   newNode.setAttribute('rows',3)
   newNode.setAttribute('placeholder',"Enter here")

   let weOb= document.getElementById("we");
   let weAddButtonOb= document.getElementById("weAddButton");

  weOb.insertBefore(newNode,weAddButtonOb);
} 

function addNewAQField()
{
    let newNode = document.createElement('textarea')
    //    belowline is used to add classes in textarea and rows is a attribute 
       newNode.classList.add('form-control') 
       newNode.classList.add('aqField')
       newNode.classList.add('mt-3')
       newNode.setAttribute('rows',3)
       newNode.setAttribute('placeholder',"Enter here")
    
       let aqOb= document.getElementById("aq");
       let aqAddButtonOb= document.getElementById("aqAddButton");
    
      aqOb.insertBefore(newNode,aqAddButtonOb); 
}

// generate cv

function generateCV()
{
    let nameField= document.getElementById('nameField').value;
//  we take object of below line so that we can change value of this w.h.o that obj
//  long method
let nameT1= document.getElementById('nameT1');
  nameT1.innerHTML = nameField; 

// direct method or shortcut method
document.getElementById('nameT2').innerHTML= nameField
// contact
let contactField= document.getElementById('contactField').value
document.getElementById('contactT').innerHTML=contactField
// address
document.getElementById("addressT").innerHTML= document.getElementById("addressField").value;
// links 
document.getElementById("fbT").innerHTML= document.getElementById("fbField").value
document.getElementById("instaT").innerHTML= document.getElementById("instaField").value
document.getElementById("linkedT").innerHTML= document.getElementById("linkedField").value;

// objective
document.getElementById("objectiveT").innerHTML= document.getElementById("objectiveField").value;
// work experience 
  let wes = document.getElementsByClassName("weField");
  let str="";
  for (let e of wes) {
    str = str + `<li> ${e.value} </li>`;
}
document.getElementById('weT').innerHTML= str;

// academic qualification

    let eq = document.getElementsByClassName("aqField");
  let str1="";
  for (let e of eq) {
    str1= str1 + `<li> ${e.value} </li>`;
}
document.getElementById('aqT').innerHTML= str1;

// to hide or unhide 
//  document.getElementById('cv-form').style.display='none';
 document.getElementById('cv-template').style.display='block';  
} 

// to print cv
function printCV(){
  window.print();
}
