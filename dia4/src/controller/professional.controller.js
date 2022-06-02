const { response } = require("express");
const { Professional } = require("../models/professional")
let professional = null;

function getStart(request, response) {
    let respuesta = { error: true, codigo: 200, mensaje: 'Punto de inicio' };
    response.send(respuesta);
}

function getProfessional(request, response) {
    let respuesta;
    if (professional != null)
        respuesta = professional;
    else
        respuesta = { error: true, codigo: 200, mensaje: "El profesional no existe" };

    response.send(respuesta);
}

function postProfessional(request, response) {
    let respuesta;
    console.log(request.body)
    if (professional === null) {
        professional = new Professional(
           
            request.body.name,
            request.body.surname,
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
            request.body.profession
        )

        respuesta = {
            error: false, codigo: 200,
            mensaje: 'Profesional creado', resultado: professional
        }
    }
    else
        respuesta = {
            error: true, codigo: 200,
            mensaje: 'Profesional ya existe', resultado: null

        };
    response.send(respuesta)
}

function putProfessional(request, response) {
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


function deleteProfessional(request, response) {
    let respuesta
    if (professional != null) {
        professional = null;
        respuesta = {
            error: false, codigo: 200,
            mensaje: 'Profesional borrado', resultado: professional
        };
    }
    else
        respuesta = {
            error: true, codigo: 200,
            mensaje: 'Profesional no existe', resultado: professional
        }

    response.send(respuesta);
};


module.exports = {getStart,getProfessional, deleteProfessional,putProfessional, postProfessional};