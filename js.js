
const idmonto     =  document.getElementById('idmonto');
const idinteres   =  document.getElementById('idinteres');
const idveces     =  document.getElementById('idveces'); 
const idcalculatorScreen1 = document.getElementById('calculatorScreen1');
const idcalculatorScreen2 = document.getElementById('calculatorScreen2');

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

//......................................
function showIncalculatorScreens(){
    idcalculatorScreen1.innerText = valorAcumulado;
    idcalculatorScreen2.innerText = intSimple(monto , interes , veces);;
}
// console.log(    intCompuesto(100 , 3 , 120)*5/100/12    )