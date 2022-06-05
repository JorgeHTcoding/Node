function getPokemon() {
    let resultado = "";
    let resultado2 = "";
    let name = document.getElementById("inputName").value;
    let id = document.getElementById("inputID").value;
    document.getElementById("audio").play()
    name = name.toLowerCase();
    new Audio("frontend\sound.mp3").play()
    let url = `https://pokeapi.co/api/v2/pokemon/${id}${name}`;
    let param =
    {
        headers: { "Content-type": "application/json; charset = UTF-8" },
        method: "GET"
    }
    fetch(url, param)
        .then(function (data) {
            return data.json()
        })
        .then(function (result) {

            if (!result.error) {
                resultado =
                    `<div><img src="${result.sprites.front_default}">`
                resultado2 =
                    `<tr>              
             <td><b>Nombre: </b></td>              
             <td>${result.species.name}</td>   
             </tr>           
             <tr>              
             <td><b>Movimiento: </b></td>              
             <td>${result.moves[0].move.name}</td>              
             </tr>  
             <tr>              
             <td><b>Habilidades: </b></td>              
             <td>${result.abilities[0].ability.name}</td>              
             </tr>  
             <tr>              
             <td><b>Tipo: </b></td>              
             <td>${result.types[0].type.name}</td>              
             </tr>              
           
            </div>`
                document.getElementById("pokefoto").innerHTML = resultado
                document.getElementById("pokeinfo").innerHTML = resultado2
            } else {
                showToast("Error" + result.mensaje, "bg-danger")
            }
        })
        .catch(function (error) {
            console.log(error)
        })
}

function validar(pokemon) {
    resultado = false
    if (pokemon.name == "" || pokemon.name == "null") {
        showToast("AVISO: Campo name vacío", "bg-warning");
    } else if (pokemon.id == "" || pokemon.id == "null") {
        showToast("AVISO: Campo idvacío", "bg-warning")
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