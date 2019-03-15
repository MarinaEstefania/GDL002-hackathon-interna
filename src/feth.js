const arrayMoviesSelected = ['tt0451279', 'tt0117008', 'tt1454029', 'tt0120804', 'tt0120762', 'tt1392190', 'tt0114558', 'tt0780521', 'tt1217209', 'tt0078748', 'tt0089276', 'tt0266697', 'tt1536537', 'tt3077214', 'tt5083738', 'tt0085267', 'tt4925292', 'tt3716530', 'tt0457430', 'tt2873282', 'tt1620680'];

const containerRoot = document.getElementById('img');


const card = (data) => {
  return (`<div class=" containingImg card">
         <div class="image">
              <img src="${data.Poster}"/>
         </div>
          <div class="details">
          <div class="center">
              <h1> ${data.Year}</h1>
              <h2> ${data.Title}</h2>
              <h3> ${data.Rated}</h3>
              <h3> ${data.Director}</h3>
              <h3> ${data.Genre}</h3>
              <p> ${data.Plot}</p>
        </div>
        </div>
        </div>`);

};

const showmovies = (data) => {
  let result = "";
  result = containerRoot.innerHTML += card(data);
  return result;
}

const ferched = () =>{
  for ( i in arrayMoviesSelected) {
   fetch('http://www.omdbapi.com/?i=' + arrayMoviesSelected[i] + '&apikey=19e49d').then((data) => {
      return data.json();
    }).then((dataAsJson) => {
      console.log(dataAsJson); //muestra todos los objetos  
    });
  }
}

console.log(ferched());

/* for ( i in arrayMoviesSelected) {
  fetch('http://www.omdbapi.com/?i=' + arrayMoviesSelected[i] + '&apikey=19e49d').then((data) => {
    return data.json();
  }).then((dataAsJson) => {
    if (dataAsJson.Year = 2017);
      return (dataAsJson)
    //console.log(dataAsJson);
    //movies[i]= dataAsJson;
    //showmovies(dataAsJson);
    
  }).then((datafiltered) => {
    showmovies(datafiltered)
  });
}
 */


/* document.getElementById('genere').addEventListener('click', () => {
  const indexFilter = document.getElementById ('genere');
  const selectedFilter = indexFilter[indexFilter.selectedIndex].value;
  const arrayFiltered = window.movies.filterGenere(data, selectedFilter);
  showmovies(arrayFiltered);
});  */

/* function showFilter (type){
  let result = "";
  containerRoot.innerHTML = '';
  type.forEach(element => {
    result = containerRoot.innerHTML += card(data);
  });
  return result;
}

function typeGenere (data){

                 let selectedGenere = document.getElementById('genere');

                  //creo mi funcion donde cuando cambie la opcion de mi selector ordene los pokemones.
                  selectedGenere.addEventListener('change', () => {

                  //creo variable donde evalua el cambio del selector.
                  let genere = selectedGenere.value;
                  //creo una variable donde obtiene la funcion de filtrar. donde le estoy mandando mis datos y mi condicion del selector.
                  let type = window.movies.filterGenere(data, genere);

                  console.log(genere);

       showFilter(type);
   });


} */
