let kitcheninput=document.getElementById("kitchen-input");
let addbtn=document.getElementById('btn');

let kitchenlist=document.getElementById('kitchen-list');


let save



function setlocalStorage(){

  localStorage.setItem('store',save);





}



function getlocalStorage(){


if(localStorage.getItem('store'))

save=localStorage.getItem('store')
buildui();

}

function buildui(){

let li=document.createElement('li');
let span=document.createElement('span')


li.appendChild(span)
span.innerText=save;


 kitchenlist.appendChild(li);

let trash=document.createElement('i');

trash.classList.add('fas','fa-trash');
li.appendChild(trash)



let edit=document.createElement('i');


edit.classList.add('fas','fa-edit')

li.appendChild(edit);



  
}

function working(){

save=kitcheninput.value;


getlocalStorage();
setlocalStorage();




}


function removeiteams(event){


  if(event.target.classList[1] === 'fa-trash'){

    
 let cancel=event.target.parentElement;

 cancel.remove();
 

  }


  
}



function edititeams(evet){


if(evet.target.classList[1]==='fa-edit'){

let edited =prompt("please add new text")
let cancel =evet.target.parentElement;

let span=cancel.querySelector('span');
span.innerText=edited

}



}





getlocalStorage();


kitchenlist.addEventListener('click',removeiteams);

addbtn.addEventListener('click',working);

kitchenlist.addEventListener('click', edititeams)


