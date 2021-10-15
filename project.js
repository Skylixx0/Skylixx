document.getElementById("clear").onclick = function (e) {
    // Если необходимо предотвратить/отменить событие по умолчанию,
    // то необходимо вызвать метод preventDefault у события
    // https://developer.mozilla.org/ru/docs/Web/API/Event/preventDefault
    // e.preventDefault();
    // если необходимо также предотвратить дальнейшее "всплытие" события,
    // то необходимо вызвать метод stopPropagation у события
    // https://developer.mozilla.org/ru/docs/Web/API/Event/stopPropagation
    // e.stopPropagation();
    document.getElementById("input").value = "";
}
// document.getElementById("submit").onclick = function (e) {
//     const word = document.getElementById("input").value
//     document.innerContent(word) = "awd"
// }
// var additionText = 'Введите слово'
// if (document.getElementById("input") == '') {
//     document.getElementById("Text").innerHTML = additionText
// }
            // const changeText = document.getElementById("Text");
            // changeText.innerHTML = 'LOL'
// function myFunc() {
//     const changeText = document.getElementById("Text").value;
//     changeText.innerHTML = 'LOL'
// }
// if (document.getElementById('submit').value == onclick) {
//     myFunc()
// }
document.getElementById("submit").onclick = myClick;
function myClick() {
    // let a = document.querySelector('#input').value;
    // document.querySelector('#Text').innerHTML = a;
    let inp = document.querySelector('div')
    // inp.after('after')
    let newDiv = document.createElement('div')
    newDiv.className = 'newDiv'
    newDiv.innerHTML =  `${document.getElementById('input').value}.`
    inp.after(newDiv)
    // let newDiv = document.createElement('div')
    // newDiv.innerHTML = document.querySelector('#Text').value
}
for (let x = 0; x < 9; x++) {
    console.log(x)
}