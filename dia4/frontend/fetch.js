class Professional {

    constructor(name, surname, age, isRetired, profession) {

        this.name = name;
        this.surname = surname;
        this.age = age;             
        this.isRetired = isRetired;       
        this.profession = profession;

    }     
}

function postProfessionals() {

    let professional = new Professional(        
        document.getElementById("name").value,
        document.getElementById("surname").value,
        document.getElementById("age").value,
        document.getElementById("isRetired").value,
        document.getElementById("profession").value,
        
    )
    let url = "http://localhost:3000/professionals"

    if (validar(professional)) {
        let param =
        {
            headers: { "Content-type": "application/json; charset = UTF-8" },
            body: JSON.stringify(professional),
            method: "POST"
        }

        fetch(url, param)
            .then(function (data) {
                return data.json()
            })
            .then(function (result) {
                if (result.error) {
                    showToast("ERROR" + result.mensaje, "bg-danger")
                }
                else {
                    showToast("Usuario creado correctamente", "bg-success")
                    console.log(result);
                }
            })
            .catch(function (error) {
                console.log(error)
            })
    }
}

function getProfessionals(){
    let id = document.getElementById("id").value;
    let url = `http://localhost:3000/professionals/?id=${id}`;
    let param =
    {   headers: {"Content-type": "application/json; charset = UTF-8"},       
        method: "GET"
    }

    fetch(url,param)
    .then(function(data) {
        return data.json()
    })
    .then(function(result){
        if(!result.error){
            document.getElementById("tablaName").innerHTML = JSON.stringify(result)           
        }else{
            showToast("Error" + result.mensaje, "bg-danger") 
        }         
    })
    .catch(function (error) {
        console.log(error)
    })
} 

function putProfessionals(){    
       
    let id = document.getElementById("id").value;
    let url = `http://localhost:3000/professionals/?id=${id}`;
    
    let input= {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        age: document.getElementById("age").value,
        isRetired: document.getElementById("isRetired").value,
        profession: document.getElementById("profession").value,
        id : document.getElementById("id").value       
    }
  
        let param =
        {
            headers: { "Content-type": "application/json; charset = UTF-8" },
            body: JSON.stringify(input),
            method: "PUT"
        }

        fetch(url, param)
            .then(function (data) {
                return data.json()
            })
            .then(function (result) {
                if (result.error) {
                    showToast("ERROR" + result.mensaje, "bg-danger")
                }
                else {
                    showToast("Usuario creado correctamente", "bg-success")
                    console.log(result);
                }
            })
            .catch(function (error) {
                console.log(error)
            })
    }

function deleteProfessionals(){

    let id = document.getElementById("id").value;    
    let url = "http://localhost:3000/professionals";
    let inputId = {id}
    let param =
        {
            headers: { "Content-type": "application/json; charset = UTF-8" },
            body: JSON.stringify(inputId),
            method: "DELETE"
        }
        console.log(inputId)
        fetch(url, param)
            .then(function (data) {
                return data.json()
            })
            .then(function (result) {
                if (result.error) {
                    showToast("ERROR" + result.mensaje, "bg-danger")
                }
                else {
                    showToast("Usuario eliminado", "bg-success")
                    console.log(result);
                }
            })
            .catch(function (error) {
                console.log(error)
            })

}

function validar(professional) {
    resultado = false    
    if (professional.name == "" || professional.name == "null") {
        showToast("AVISO: Campo name vacío", "bg-warning");
    } else if (professional.surname == "" || professional.surname == "null") {
        showToast("AVISO: Campo surname vacío", "bg-warning")
    } else if (professional.age == "" || professional.age == "null") {
        showToast("AVISO: Campo age vacío", "bg-warning");
    } else if (professional.isRetired == "" || professional.isRetired == "null") {
        showToast("AVISO: Campo isRetired vacío", "bg-warning");
    } else if (professional.profession == "" || professional.profession == "null") {
        showToast("AVISO: Campo profession vacío", "bg-warning");
    } else {
        resultado = true;       
    } return resultado;
}

function showToast(message, color) {
    document.getElementById("toastText").innerText = message;
    let toastElement = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " " + color;

    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}