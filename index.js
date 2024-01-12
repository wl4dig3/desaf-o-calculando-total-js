let precio = 400000

let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let btnIncrementar = document.querySelector('#incrementar');
let btnDisminuir = document.querySelector('#disminuir');
var cantidad = document.querySelector('.cantidad');
console.dir(cantidad)
var a = 0;

btnIncrementar =  ()=> {
    a++
     a = ( a < 10) ? "0" + a :  a;
    cantidad.innerHTML = a;
     console.log('incremento', a);
};

