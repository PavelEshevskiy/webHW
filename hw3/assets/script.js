
function changedText() {
    let replaceText = document.getElementById("description").innerText = prompt('Введите новое описание товара');
    replaceText.classList.toggle();
}

function changedColor() {

    let replaceColor = document.getElementById("description");
    replaceColor.classList.toggle('ice');
}

function changedList() {
    let lists = document.querySelector( "list" )
    for( let i = 0; i < lists.length; i++){
        lists[i].classList.toggle('modList');
    // let replaceColorList = document.getElementById("specifications");
    // replaceColorList.classList.toggle('modList');
    }
}


let btn1 = document.getElementById("btn1");
console.log(btn1);
let btn2 = document.getElementById("btn2");
console.log(btn2);
let btn3 = document.getElementById("btn3");
console.log(btn3);
// let btn4 = document.getElementById("btn4");
// console.log(btn4);

btn1.addEventListener('click', changedColor);
btn1.addEventListener('click', changedText);
// btn2.addEventListener('click', changedColor);
// btn2.addEventListener('click', changedText);
// btn3.addEventListener('click', changedList); 
document.querySelector('button').addEventListener('click', function(){
    document.querySelector('li').style.color='green';
})      