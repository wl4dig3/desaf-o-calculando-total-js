const precio = 400000

let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio
bgColor = document.querySelector('.card')

let valorTotal = document.querySelector('.valor-total')
console.log('1er console', valorTotal);

let btnIncrementar = document.querySelector('#incrementar');
let btnDisminuir = document.querySelector('#disminuir');
var cantidad = document.querySelector('.cantidad');
var a = 1;

btnIncrementar =  ()=> {
    a++
    cantidad.innerHTML = a;
    valorTotal.innerHTML = a * precio;
    bgColor.style.background = "#c7ac45"
};
console.log(typeof btnIncrementar)
btnDisminuir =  ()=> {
    if (a >= 1) {
        a--
        cantidad.innerHTML = a;
        valorTotal.innerHTML = a * precio;
        bgColor.style.background = "#c99999"
    }
    else {
        bgColor.style.background = "red"
        alert('Cuidado, estás restando a nada')
    }
};



