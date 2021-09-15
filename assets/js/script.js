//conteo simple
var totalsimple = 0;

actualizar();

function agregar(){
    totalsimple = totalsimple + 1;
    actualizar();
}                

function restar(){
    if(totalsimple > 0){
        totalsimple = totalsimple - 1;
        actualizar();
        }
}

function actualizar(){
    document.getElementById("totalsimple").innerHTML = totalsimple;
}

