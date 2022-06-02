class Professional {

    constructor(id, name, surname, age, genre, weight, height, hairColor
        , eyeColor, race, isRetired, nationality, oscar, profession) {

        this.id = id;
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscar = oscar;
        this.profession = profession;

    }

    consolePrint() {
        console.log(this);
    }
}


let professional1 = new Professional(0,"Pepito","Palote",65,"Male",71,189,"Castaño","Azul","Caucasico",true,"Irlandés",58,"Actor");
let professional2 = new Professional(1,"Paquita","La del Barrio",75,"Female",82,159,"Rubio","Avellana","Caucasico",true,"Mexicana",0,"Cantante");
let professional3 = new Professional(2,"Clint","Eastwood",91,"Male",80,190,"Gris","Azul","Caucasico",false,"Estado Unidense",2,"Actor, Director");
let professional4 = new Professional(3,"Donnie","Yen",58,"Male",68,173,"Negro","Negro","Asiático",false,"Chino",0,"Actor, Director, Productor");

let arrayProf = [professional1,professional2,professional3,professional4]

let respuesta;
for(let i = 0; i < arrayProf.length; i++){
    if (arrayProf != null)
        respuesta = arrayProf;
        
}
console.log(respuesta)


let pos = professional.id;  

for(let i = 0; i < arrayProf.length; i++){
    if(arrayProf != null && pos === arrayProf[i].id)
    response.send(arrayProf[i]);
    else
    respuesta = { error: true, codigo: 200, mensaje: "El profesional no existe" };
}    
{"name":"lahermana","surname":"Shootingstar","age":18,"genre":"male","weight":30,"height":200,"hairColor":"blonde",
"eyeColor":"white","race":"asiatico","isRetired":false,"nationality":"chinese","oscar":54,"profession":"actorporno"}