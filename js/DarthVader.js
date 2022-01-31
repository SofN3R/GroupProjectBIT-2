let apidata = fetch('https://swapi.dev/api/people/4/')
    .then(response => response.json())
    .then(data => {
        // define variable to capture chararcter's name 
        let characterName = document.getElementById("name3");
        characterName.append("Name: " + data.name);

        // define variable to capture chararcter's hair color 
        let characterHair = document.getElementById("haircolor3");
        characterHair.append("Hair color: " + data.hair_color);

        // define variable to capture chararcter's skin color 
        let characterSkin = document.getElementById("skincolor3");
        characterSkin.append("Skin color: " + data.skin_color);
        
        // define variable to capture chararcter's gender 
        let characterGender = document.getElementById("gender3");
        characterGender.append("Gender: " + data.gender);

        // define variable to capture films 
        let films = document.getElementById("films3");
        // array of films
        for (let film of data.films) {
            fetch(film)
            .then(response => response.json())
            .then(data =>{
                let filmsHTML = document.createElement("ul");
                films.append("Films: " + data.title);
                films.append(filmsHTML);
            })
        }
    });
