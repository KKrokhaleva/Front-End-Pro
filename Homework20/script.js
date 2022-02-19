function getPlanets () {
    let xhr = new XMLHttpRequest();
    let button = document.querySelector('button');

    button.addEventListener('click', showPlanets);

    function showPlanets () {
        xhr.open ('GET' , 'https://swapi.dev/api/planets');

        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = function ( event) {
            if (xhr.status === 200) {
                try {
                    console.table(JSON.parse (xhr.response).results);
                } catch (error) {
                    console.log(error);
                }
            }
            if (xhr.status === 404) {
                console.log(error);
            }
        }
        xhr.onerror = function ( event) {
            console.log(event);
        }
        xhr.send();
    }
}
getPlanets () ;
