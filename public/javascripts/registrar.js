var ingRadioButtons =document.querySelectorAll('.ing-radios input');
var itemRadioButtons =document.querySelectorAll('.item-radios input');
var catRadioButtons =document.querySelectorAll('.cat-radios input');
var forms = document.querySelectorAll('.form-area');
var ingForms = document.querySelectorAll('.ing-form');
var itemForms = document.querySelectorAll('.item-form');


function toggleClass(elem,className){
  if (elem.className.indexOf(className) !== -1){
  	//if it exist
    elem.className = elem.className.replace(className,'');
  }
  else{
    elem.className = elem.className.replace(/\s+/g,' ') + ' ' + className;
  }
  return elem;
}

var currentIngIndex=0;
for (let i in ingRadioButtons){
	ingRadioButtons[i].onchange=function(){
		toggleClass(ingForms[i],'hide');
		toggleClass(ingForms[currentIngIndex],'hide');
		currentIngIndex=i;
	}	
}

var currentItemIndex=0;
for (let i in itemRadioButtons){
	itemRadioButtons[i].onchange=function(){
		toggleClass(itemForms[i],'hide');
		toggleClass(itemForms[currentItemIndex],'hide');
		currentItemIndex=i;
	}	
}

//Hide/Show form containers
var currentIndex = 0;
for (let i in catRadioButtons){
	catRadioButtons[i].onchange=function(){
		toggleClass(forms[i],'hide');
		toggleClass(forms[currentIndex],'hide');
		currentIndex=i;
	}
}