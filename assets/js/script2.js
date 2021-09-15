//conteoCI
var Estado = true;
var totalCI = 0;

actualizarF();

function agregarCI() {
    totalCI = totalCI + 1;
    actTotal();
    document.getElementById("myForm").reset();
}

function restarCI() {
    if(totalCI > 0){
        totalCI = totalCI - 1;
        actTotal();
        document.getElementById("myForm2").reset();

    }
}

function actTotal(){
    document.getElementById("totalCI").innerHTML = totalCI;
}

function actualForm(status){
    Estado = status;
    actualizarF();
}

function actualizarF(){
    const formAgregar =
     
    `
    <div class="row justify-content-center mt-4">
    <div class="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
        <form class="mbr-form form-with-styler" data-form-title="Form Name"id="myForm">
            <input type="hidden" name="email" data-form-email="true" >
            
               
                
            <div class="dragArea row">
                <div class="col-md col-sm-12 form-group mb-3" data-for="name">
                    <input type="text" name="name" placeholder="Nombre" data-form-field="name" class="form-control" value="" id="name-form5-1i">
                </div>
                <div class="col-md col-sm-12 form-group mb-3" data-for="email">
                    <input type="text" name="text" placeholder="Apellido" data-form-field="email" class="form-control" value="" id="text-form5-1i">
                </div>
                <div class="col-12 form-group mb-3" data-for="url">
                    <input type="text" name="text" placeholder="RUT" data-form-field="url" class="form-control" value="" id="text-form5-1i">
                </div>
                
                
            </div>
        </form>

        <a class="btn btn-primary display-4"onclick="agregarCI()">Agregar</a>
    </div>
</div>
    `
 
    const formQuitar =
    `
    <div class="row justify-content-center mt-4">
    <div class="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
        <form class="mbr-form form-with-styler" data-form-title="Form Name"id="myForm2">
            <input type="hidden" name="email" data-form-email="true" >
            
               
                
            <div class="dragArea row">
               
                <div class="col-12 form-group mb-3" data-for="url">
                    <input type="text" name="text" placeholder="RUT" data-form-field="url" class="form-control" value="" id="text-form5-1i">
                </div>
                
                
            </div>
        </form>

        <a class="btn btn-primary display-4"onclick="restarCI()">Quitar</a>
    </div>
</div>
    `


    if(Estado){
        document.getElementById("form-container").innerHTML = formAgregar;
    }else{
        document.getElementById("form-container").innerHTML = formQuitar;
    }
}

