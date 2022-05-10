var attempt = 3;
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "admin" && password == "123"){
        alert ("Logado com sucesso");
        window.location = "areaRH.html"; 
        return false;
    }else{
    attempt--;
    
    if( attempt == 0){
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        return false;
    }else{
        let div = document.getElementById("alerta");
        const e = document.createElement("div");
        
        e.setAttribute('class', 'alert alert-warning');
        e.setAttribute('role','alert');
        e.innerHTML = "Alerta, você não inseriu um login válido. " + attempt + " tentativas restantes";
        div.appendChild(e);
    }
    }
}