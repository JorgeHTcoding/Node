class Professional {

    constructor(name, age, genre, weight, height, hairColor
        , eyeColor, race, isRetired, nationality, oscar, profession) {

        this.name = name;
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