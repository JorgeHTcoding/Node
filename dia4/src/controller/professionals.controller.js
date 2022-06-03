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
    if (professional != null) {

            professional.name = request.body.name,
            professional.surname = request.body.surname,
            professional.age = request.body.age,
            professional.genre = request.body.genre,
            professional.weight = request.body.weight,
            professional.height = request.body.height,
            professional.hairColor = request.body.hairColor,
            professional.eyeColor = request.body.eyeColor,
            professional.race = request.body.race,
            professional.isRetired = request.body.isRetired,
            professional.nationality = request.body.nationality,
            professional.oscar = request.body.oscar,
            professional.profession = request.body.profession

        respuesta = {
            error: false, codigo: 200,
            mensaje: 'Profesional actualizado', resultado: professional
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