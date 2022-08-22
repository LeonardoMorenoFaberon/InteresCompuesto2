
let idmonto     =  document.getElementById('idmonto');
let idinteres   =  document.getElementById('idinteres');
let idveces     =  document.getElementById('idveces'); 
let idcalculatorScreen1 = document.getElementById('calculatorScreen1');
let idcalculatorScreen2 = document.getElementById('calculatorScreen2');

let monto   ; 
let interes ;  
let veces   ; 
let valorAcumulado ;
let valorCalculatorScreen;

function intSimple(monto , interesGanado , veces){
    let porcentaje  = interesGanado/100 ;
    return monto * Math.pow(1 + porcentaje ,  veces);    
}
//..........................................................
function intCompuesto(monto , interesGanado , veces){
    //intSimple(monto , interesGanado , veces);
    let acumulador = 0;
    for(let i = 1 ; i<=veces ; i++){
       acumulador += intSimple(monto , interesGanado , i);
    }
    return acumulador;
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
            // console.log(    valorAcumulado*5/100/12    )
            imprimirConsola(valorAcumulado);
            showIncalculatorScreens();           
        }else{
            console.log("aun no es un numero")
        }
}
//......................................
function imprimirConsola(valor){
    console.log(valor)
}

function showIncalculatorScreens(){
    idcalculatorScreen1.innerText = valorAcumulado;
    idcalculatorScreen2.innerText = intSimple(monto , interes , veces);;
}
// console.log(    intCompuesto(100 , 3 , 120)*5/100/12    )