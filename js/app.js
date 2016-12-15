//jshint esversion: 6

(function(window) {

  /* -------------------------------------------------------------
  Person 4 Req Listener */

  function person4ReqListener(){
    // console.log(this.responseText);
    let person = JSON.parse(this.responseText);
    // console.log(person);
    document.getElementById('person4Name').innerHTML = person.name;

    function homeWorldListener(){
      let homeWorld = JSON.parse(this.responseText);
      // console.log(homeWorld);
      document.getElementById('person4HomeWorld').innerHTML = homeWorld.name;
    }

    const homeWorldReq = new XMLHttpRequest();
    homeWorldReq.addEventListener('load', homeWorldListener);
    homeWorldReq.open('GET', person.homeworld);
    homeWorldReq.send();
  }

  const person4Req = new XMLHttpRequest();
  person4Req.addEventListener('load', person4ReqListener);
  person4Req.open('GET', 'http://swapi.co/api/people/4/');
  person4Req.send();

  /* -------------------------------------------------------------
  Person 14 Req Listener */

  function person14ReqListener(){
    // console.log(this.responseText);
    let person = JSON.parse(this.responseText);
    document.getElementById('person14Name').innerHTML = person.name;

    function speciesListener(){
      // console.log(this.responseText);
      let homeWorld = JSON.parse(this.responseText);
      // console.log(homeWorld);
      document.getElementById('person14Species').innerHTML = homeWorld.name;
    }

    const speciesReq = new XMLHttpRequest();
    speciesReq.addEventListener('load', speciesListener);
    speciesReq.open('GET', person.species);
    speciesReq.send();
  }

  const person14Req = new XMLHttpRequest();
  person14Req.addEventListener('load', person14ReqListener);
  person14Req.open('GET', 'http://swapi.co/api/people/14/');
  person14Req.send();

  /* -------------------------------------------------------------
  Films Req Listener */

  function filmReqListener(){
    // console.log(this.responseText);
    let films = JSON.parse(this.responseText);
    let filmDiv = document.getElementById('filmList');
    console.log(films.results);

    for(let i = 0; i < films.results.length; i++){
      let titleListItem = document.createElement('li');
      let titleListItemH2 = document.createElement('h2');
      let planetsLabel = document.createElement('h3');
      let planetsUl = document.createElement('ul');
      planetsLabel.innerHTML = 'Planets';
      titleListItemH2.innerHTML = films.results[i].title;
      titleListItem.appendChild(titleListItemH2);
      titleListItem.appendChild(planetsLabel);
      titleListItem.appendChild(planetsUl);
      for(let j = 0; j < films.results[i].planets.length; j++){
        function planetListener(){
          var planet = JSON.parse(this.responseText);
          let planetNameLi = document.createElement('li');
          let planetNameH4 = document.createElement('h4');
          planetNameH4.innerHTML = planet.name;
          planetNameLi.appendChild(planetNameH4);
          planetsUl.appendChild(planetNameLi);
          console.log(planet.name);
        }
        reqHelper(films.results[i].planets[j], planetListener);
        // console.log(films.results[i].planets[j]);
      }
      filmDiv.appendChild(titleListItem);
    }

  }

  const filmReq = new XMLHttpRequest();
  filmReq.addEventListener('load', filmReqListener);
  filmReq.open('GET', 'http://swapi.co/api/films/');
  filmReq.send();

  function reqHelper(api, listener){
    var req = new XMLHttpRequest();
    req.addEventListener('load', listener);
    req.open('GET', api);
    req.send();
  }

})(window);