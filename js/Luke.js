let characterluke = fetch('https://swapi.dev/api/people/1/')
    .then(response => response.json())
    .then(data => {

        // Buscar el elemento HTML con el id name
        let nameCharacter = document.getElementById("name6");
        // Agrega el name al elemento <h1 id="name">
        nameCharacter.append("Name: " + data.name);
        // Agrega el elemento al elemento <body>
        // document.body.append(nameCharacter);

        let hairColorCharacter = document.getElementById("haircolor6");
        hairColorCharacter.append("Hair color: " + data.hair_color);
        //document.body.append(hairColorCharacter);

        let skinColorCharacter = document.getElementById("skincolor6");
        skinColorCharacter.append("Skin color: " + data.skin_color);
        //document.body.append(skinColorCharacter);

        let genderCharacter = document.getElementById("gender6");
        genderCharacter.append("Gender: " + data.gender);
        // document.body.append(genderCharacter);



        let films = document.getElementById("films6");
        // Recorro el array de films
        for (let film of data.films) {
            // Llamar el api de cada film
            fetch(film)
                .then(response => response.json())
                .then(data => {
                    // Crear un elemento HTML
                    let ulFilm = document.createElement("ul");
                    // Agregar el title dentro del elemento ul
                    ulFilm.append("Films: " + data.title);
                    // Agregar el elemento HTML al elemento films
                    films.append(ulFilm);
                })
        }
        // document.body.append(films);
    })