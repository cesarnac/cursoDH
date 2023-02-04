let perfil = "dfsd";

switch(perfil){
    case " ":
        console.log("Debe especificar el perfil del usuario")
        break;
    
    case "Administrador" || "ADMINISTRADOR" || "administrador":
        console.log("Usted tiene todos los privilegios de uso del sistema");
        break;
    
    case "asistente" || "ASISTENTE" || "Asistente":
        console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
        break;
   
    case "invitado" || "INVITADO" || "Invitado":
        console.log("Usted sólo tiene permisos de consultar datos");
        break;   
    
        default :
        console.log("Debe especificar un perfil válido");
}
