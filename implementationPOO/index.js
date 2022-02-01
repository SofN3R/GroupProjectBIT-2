let BASE_URL = 'https://swapi.dev/api/people'

let peopleToDisplay = []

fetch(BASE_URL)
  .then(response =>  response.json())
  .then(people => {
    peopleToDisplay.push( new Character(people.results[0]) );
    peopleToDisplay.push( new Character(people.results[1]) );
    peopleToDisplay.push( new Character(people.results[2]) );
    peopleToDisplay.push( new Character(people.results[3]) );
    peopleToDisplay.push( new Character(people.results[4]) );
    peopleToDisplay.push( new Character(people.results[9]) );
  });

console.log(peopleToDisplay);


// El siguiente bloque de código sería la opción más óptima
// const charactersId = [ 0, 1, 2, 3, 4, 9];
// fetch(BASE_URL)
//   .then(response =>  response.json())
//   .then(people => 
//     charactersId.forEach( id => peopleToDisplay.push( new Character(people.results[ id ]) ) )
//   );

// console.log(peopleToDisplay);

