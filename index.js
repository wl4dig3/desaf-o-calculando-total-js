const precio = 400000

let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let valorTotal = document.querySelector('.valor-total')
console.log('1er console', valorTotal);

let btnIncrementar = document.querySelector('#incrementar');
let btnDisminuir = document.querySelector('#disminuir');
var cantidad = document.querySelector('.cantidad');
var a = 1;

btnIncrementar =  ()=> {
    a++
    // a = ( a < 10) ? "0" + a :  a;
    cantidad.innerHTML = a;
    valorTotal.innerHTML = a * precio;
};
console.log(typeof btnIncrementar)
btnDisminuir =  ()=> {
    if (a >= 1) {
        a--
         //a = ( a < 10) ? "0" + a :  a;
        cantidad.innerHTML = a;
        valorTotal.innerHTML = a * precio;

    }
};

// precioSpan.innerHTML = a * precio


