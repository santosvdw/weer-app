fetch('https://data.buienradar.nl/2.0/feed/json')
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        // Hier gaan we de opgehaalde data verwerken!
        console.log(jsonData); // <-- Dit is alle data die we hebben opgehaald
        // Hier halen we de weeromschrijving van weerstation Berkhout op (weerstation 2)

        let weerstationId = 2;
        let weerstation = document.locatie.weerstation.value;

        console.log(weerstation);
        if (weerstation == 'arcen') {
            weerstationId = 1;
        } else if (weerstation == 'berkhout') {
            weerstationId = 2;
        } else {
            weerstationId = 3;
        }

        document.querySelector('.titel').innerHTML =
            jsonData.actual.stationmeasurements[
                weerstationId
            ].weatherdescription;

        var img = document.createElement('img');
        img.src = jsonData.actual.stationmeasurements[weerstationId].iconurl; // <-- Het weer icoon
        var src = document.querySelector('.weer-icoontje');
        src.appendChild(img);

        // En de tempatuur
        document.querySelector('.temperatuur').innerHTML =
            jsonData.actual.stationmeasurements[weerstationId].temperature +
            'graden';
    })
    .catch(function (err) {
        console.log('Opps, Something went wrong!', err);
    });
