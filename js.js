
const idmonto     =  document.getElementById('idmonto');
const idinteres   =  document.getElementById('idinteres');
const idveces     =  document.getElementById('idveces'); 
const idcalculatorScreen1 = document.getElementById('calculatorScreen1');
const idcalculatorScreen2 = document.getElementById('calculatorScreen2');
const shower    = document.getElementById('idShower')

let monto   ; 
let interes ;  
let veces   ; 
let valorAcumulado ;
let valorCalculatorScreen;

function intSimple(monto , interesGanado , veces){
    let porcentaje  = interesGanado/100 ;
    let devolver = monto * Math.pow(1 + porcentaje ,  veces).toFixed(4);
    // return formatoMexico(  );
    return monto * Math.pow(1 + porcentaje ,  veces).toFixed(4);
    // return formatoMexico(devolver);     
}
//..........................................................
function intCompuesto(monto , interesGanado , veces){
    //intSimple(monto , interesGanado , veces);
    let acumulador = 0;
    for(let i = 1 ; i<=veces ; i++){
       acumulador += intSimple(monto , interesGanado , i);
    }
    return acumulador.toFixed(4);
}
//..........................................................

idmonto.addEventListener(   "change" , capturandoValor);
idinteres.addEventListener( "change" , capturandoValor);
idveces.addEventListener(   "change" , capturandoValor);

//......................................
function capturandoValor(){
    monto = parseInt(idmonto.value);     //si casilla esta vacio es NaN 
    interes = parseInt(idinteres.value); //si casilla esta vacio es NaN
    veces   = parseInt(idveces.value);   //si casilla esta vacio es NaN
    
        if(!isNaN(monto) & !isNaN(interes) & !isNaN(veces)){
            valorAcumulado =  intCompuesto(monto , interes , veces );
            showIncalculatorScreens();           
        }else{
            console.log("aun no es un numero")
        }
}
//......................................
function imprimirConsola(valor){
    console.log(valor)
}
//......................................
function trio(valor , n){
    console.log(valor[valor.length-n] + '' + 
                valor[valor.length-(n-1)] + ''+
                valor[valor.length-(n-2)])
}

// Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number);

//......................................
function showIncalculatorScreens(){
    idcalculatorScreen1.innerText = Intl.NumberFormat('de-DE', { style: 'currency', currency: 'DOL' }).format(valorAcumulado);;
    idcalculatorScreen2.innerText = Intl.NumberFormat('de-DE', { style: 'currency', currency: 'DOL' }).format(intSimple(monto , interes , veces));
    shower.classList.remove('oculto');
}


let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';



// let x1 = 10;
let x2 = .3;
let xIncrement =  .3;
// let y1 =  function(x){ return 1*Math.pow(1.02,x)};
let y1 =  function(x , ciclos){ return  1-150/(1*Math.pow(1.02 , x))    };
let y2 =  150;
let ciclos =  900;

for(let x1=0; x1 <= ciclos ; x1+= 300/ciclos){
    // ctx.fillRect(x1 ,(1- 150/y1(x1, ciclos))  , ciclos ,150);
    ctx.fillRect(x1 , (y1(x1, ciclos))  , ciclos ,150);
    // ctx.fillRect(x1 ,   , ciclos ,150);
}



// necesito que el eje Y para el maximo valor de x1 tome 150px
// 1.02 ^ 253 = 149.91
// para x1=300 x = 253  esto puede ser una funcion lineal.
// donde x es el valor de la funcion que se repite en el ciclo for
// por lo tanto el valor de x no tendra por q ser igual al valor de x1




// ctx.fillRect(20, (150 - y1(20)), 21, (150 - 0));
// ctx.fillRect(25, (150 - y1(25)), 30, (150 - 0));

// ctx.fillRect(10, 10, 100 , 100);
// ctx.fillRect(30, 30, 100 , 100);









// console.log(    intCompuesto(100 , 3 , 120)*5/100/12    )