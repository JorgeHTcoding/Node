const { response } = require("express");
const { Professional } = require("../models/professional")
let professional = null;

let arrayProf = []

function getStart(request, response) {
    let respuesta = { error: true, codigo: 200, mensaje: 'Punto de inicio' };
    response.send(respuesta);
}

function getProfessionals(request, response) {
    let respuesta;
    let id = request.query.id
    if (arrayProf.length > 0 && arrayProf[id] != null) {
        respuesta = arrayProf[id];
    } else if (id > arrayProf.length - 1 || arrayProf.length - 1 < 0) {
        respuesta = { error: true, codigo: 200, mensaje: "El profesional no existe" };
    } else {
        respuesta = arrayProf;
    }
    response.send(respuesta);

}

function postProfessionals(request, response) {
    let respuesta;
    professional = null;
    console.log(request.body)
    if (professional === null) {
        professional = new Professional(
            request.body.name,
            request.body.surname,
            request.body.age,           
            request.body.isRetired,            
            request.body.profession,
        )
        arrayProf.push(professional)

        respuesta = {
            error: false, codigo: 200,
            mensaje: 'Profesional creado', resultado: professional
        }
    } else {
        respuesta = {
            error: true, codigo: 200,
            mensaje: 'Profesional ya existe', resultado: null

        }
    } response.send(respuesta)
}

function putProfessionals(request, response) {
    let respuesta
    let id = request.query.id
    if (professional != null) {

            arrayProf[id].name = request.body.name,
            arrayProf[id].surname = request.body.surname,
            arrayProf[id].age = request.body.age,           
            arrayProf[id].isRetired = request.body.isRetired,           
            arrayProf[id].profession = request.body.profession
           

        respuesta = {
            error: false, codigo: 200,
            mensaje: 'Profesional actualizado', resultado: arrayProf[id]
        };
    }
    else
        respuesta = {
            error: true, codigo: 200,
            mensaje: 'Profesional no existe papá', resultado: null
        };
    response.send(respuesta);
}


function deleteProfessionals(request, response) {
    let respuesta;
    let id = request.query.id
    if (professional != null) {
        arrayProf.splice(id, 1)
        respuesta = {
            error: false, codigo: 200,
            mensaje: 'Profesional borrado', resultado: arrayProf
        }
    }
    else
        respuesta = {
            error: true, codigo: 200,
            mensaje: 'Profesional no existe', resultado: null
        }
    response.send(respuesta);
}
// let respuesta;
// let toDelete = request.body.name;
// if (arrayProf.length > 0) {
//     for (let i = 0; i < arrayProf.length; i++) {
//         if (toDelete == arrayProf[i].name) {
//             arrayProf.splice(i,1)
//             respuesta = {
//                 error: false, codigo: 200,
//                 mensaje: 'Profesional borrado', resultado: arrayProf
//             }
//         }
//     }
// }
// else
//     respuesta = {
//         error: true, codigo: 200,
//         mensaje: 'Profesional no existe', resultado: null
//     }
//     response.send(respuesta);
// }



module.exports = { getStart, getProfessionals, deleteProfessionals, putProfessionals, postProfessionals };