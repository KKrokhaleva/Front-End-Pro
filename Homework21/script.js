function getPlanets () {

    let button = document.querySelector('button');
    button.addEventListener('click', showPlanets);

    function showPlanets () {
        fetch('https://swapi.dev/api/planets')
            .then(function (response) {
                response.json().then(function (data) {
                    buildTable(data.results);
                })
            })
    }
    function buildTable(data){
        let table = document.createElement('table');
        let tr = document.createElement('tr');
        let number = document.createElement('th');
        number.textContent = 'Num';
        let namePlanet = document.createElement('th');
        namePlanet.textContent ='Name';

        tr.append( number, namePlanet);
        table.append(tr);
        document.querySelector('body').append(table);
        for (let i = 0; i < data.length; i++){
            let  residents = data[i].residents;

            for (let i =0; i < residents.length; i++){
                let people=[];
                fetch(residents[i])
                    .then(function (response) {
                        response.json().then(function (data) {
                            people+= data.name;
                            console.log(people);
                        })

                    })
            }
        }


        for (let i = 0; i < data.length; i++){
            let row = `<tr>
							<td>${i+1}</td>
							<td>${data[i].name}</td>
							<td></td>
					  </tr>`
            table.innerHTML += row;
        }
    }


}
getPlanets ();
