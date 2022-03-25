function getPlanets () {
    let button = document.querySelector('button');
    button.addEventListener('click', showPlanets);

    function useFetching (url) {
        return fetch(url).then(response => response.json());
    }

    function showPlanets () {
        useFetching('https://swapi.dev/api/planets').then(data => buildTableNew(data.results));
    }

    function buildTableNew(planetsArr){
        let table = document.createElement('table');
        let tr = document.createElement('tr');
        let number = document.createElement('th');
        number.textContent = 'Num';
        let namePlanet = document.createElement('th');
        namePlanet.textContent ='Name';
        let ResidentsTh = document.createElement('th');
        ResidentsTh.textContent ='Residents';

        tr.append( number, namePlanet, ResidentsTh);
        table.append(tr);
        document.querySelector('body').append(table);

        buildPlanets(planetsArr, table);
    }

    function buildPlanets (planetsArr, table) {

        for (let i=0; i<planetsArr.length; i++){
            let tr = document.createElement('tr');
            let planetNum = document.createElement('td');
            planetNum.innerText = i+1 ;
            let planetName = document.createElement('td');
            planetName.innerText = planetsArr[i].name;

            tr.append(planetNum, planetName);
            table.append(tr);
            buildResidents(planetsArr[i].residents, tr);
        }
    }

    function buildResidents (residents, tr) {
        residents.forEach(residentUrl => {
            useFetching(residentUrl).then(residentObj => {
                let residentTd = document.createElement('td');
                residentTd.innerText = residentObj.name;
                tr.append(residentTd);
            })
        })

    }
}
getPlanets ();
