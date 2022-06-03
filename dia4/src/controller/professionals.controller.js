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
    if (arrayProf.length > 0) {
        respuesta = arrayProf;
    } else {
        respuesta = { error: true, codigo: 200, mensaje: "El profesional no existe" };
    } response.send(respuesta);
}

function getParams(request, response) {
    let id = request.params.id
    console.log(id)
    if (arrayProf.length > 0) {
        for (let i = 0; i < arrayProf.length; i++) {
            if (i + 1 == id) {
                respuesta = arrayProf[i];
            }
        }
    } else {
        respuesta = { error: true, codigo: 200, mensaje: "El profesional no existe" };
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
            request.body.age,
            request.body.genre,
            request.body.weight,
            request.body.height,
            request.body.hairColor,
            request.body.eyeColor,
            request.body.race,
            request.body.isRetired,
            request.body.nationality,
            request.body.oscar,
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
    if (arrayProf[id] != null ) {

            arrayProf[id].name = request.body.name,
            arrayProf[id].surname = request.body.surname,
            arrayProf[id].age = request.body.age,
            arrayProf[id].genre = request.body.genre,
            arrayProf[id].weight = request.body.weight,
            arrayProf[id].height = request.body.height,
            arrayProf[id].hairColor = request.body.hairColor,
            arrayProf[id].eyeColor = request.body.eyeColor,
            arrayProf[id].race = request.body.race,
            arrayProf[id].isRetired = request.body.isRetired,
            arrayProf[id].nationality = request.body.nationality,
            arrayProf[id].oscar = request.body.oscar,
            arrayProf[id].profession = request.body.profession

        respuesta = {
            error: false, codigo: 200,
            mensaje: 'Profesional actualizado', resultado:  arrayProf[id]
        };
    }
    else
        respuesta = {
            error: true, codigo: 200,
            mensaje: 'Profesional no existe', resultado: null
        };
    response.send(respuesta);
}


function deleteProfessionals(request, response) {
    let respuesta;
    let toDelete = request.body.name;
    if (arrayProf.length > 0) {
        for (let i = 0; i < arrayProf.length; i++) {
            if (toDelete == arrayProf[i].name) {
                arrayProf.splice(i,1)
                respuesta = {
                    error: false, codigo: 200,
                    mensaje: 'Profesional borrado', resultado: arrayProf
                }
            }
        }
    }
    else
        respuesta = {
            error: true, codigo: 200,
            mensaje: 'Profesional no existe', resultado: null
        }
        response.send(respuesta);
}



module.exports = { getStart, getProfessionals, getParams, deleteProfessionals, putProfessionals, postProfessionals };