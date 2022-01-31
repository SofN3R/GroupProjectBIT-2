let chracter = fetch('https://swapi.dev/api/people/5/')
// .then(response => response.json())
// .then(data => {console.log(data);})

.then(response => response.json())
.then(data =>{
    let nameChracter = document.querySelector("#name2");
    nameChracter.append(`Name: ${data.name}`);

    let haircolorChracter = document.querySelector("#haircolor2");
    haircolorChracter.append(`Hair: ${data.hair_color}`);

    let skincolorChracter = document.querySelector("#skincolor2");
    skincolorChracter.append(`Skin: ${data.skin_color}`);


    let genderCharacter = document.querySelector("#gender2");
    genderCharacter.append(`Gender: ${data.gender}`);

    let films = document.querySelector("#films2");
    // Recorro el array de films
    for (let film of data.films) {
        // Llamar el api de cada film
        fetch(film)
        .then(response => response.json())
        .then(data =>{
            // Crear un elemento HTML
            let ulFilm = document.createElement("ul");
            // Agregar el title dentro del elemento ul
            ulFilm.append(`Films: ${data.title}`);
            // Agregar el elemento HTML al elemento films
            films.append(ulFilm);
        })
    }
    
})
