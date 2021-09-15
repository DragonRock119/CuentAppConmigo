function limitar_caracteres(texto){
    if(palabras.length<6){
      $("#errornom").show();
      $("#errornom").html("<p>Minimo de 6 caracteres</p>");
    }
    else{
      $("#errornom p").remove();
      $("#errornom").hide();
    }
    return texto;
}

(document).ready(function(){
    $("#errornom").hide();
    
    $("#username").keyup(function(){
      $(this).val(limitar_caracteres($(this).val()));
    });
});