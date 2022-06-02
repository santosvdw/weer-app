fetch('https://data.buienradar.nl/2.0/feed/json')
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        // Hier gaan we de opgehaalde data verwerken!
        console.log(jsonData);
        let statMea = jsonData.actual.stationmeasurements;
        // Weer-icoontje header
        var img = document.createElement('img');
        img.src = statMea[2].iconurl; // <-- Het weer icoon
        var src = document.querySelector('.weer-icoontje');
        src.appendChild(img);

        // Alle meetstations
        console.log(jsonData.actual.stationmeasurements);
        for (var i = 0; i < statMea.length; i++) {
            let curStation = statMea[i].stationname;
            console.log(curStation);
        }

        // Temperatuur (header)
        let temp = document.querySelector('.temp');
        let curTemp = statMea[2].temperature;
        temp.innerHTML = curTemp + '°C';
        console.log(temp.innerHTML);

        // Locatie (header)
        let locatie = document.querySelector('.loca').value.selected;
        console.log(locatie);
    });

// Welkoms bericht
let greetingEl = document.getElementById('welkom');
var today = new Date();
var curHr = today.getHours();

if (curHr < 12) {
    console.log('good morning');
    greetingEl.innerHTML = 'Goede ochtend!';
} else if (curHr < 18) {
    console.log('good afternoon');
    greetingEl.innerHTML = 'Goede middag!';
} else {
    console.log('good evening');
    greetingEl.innerHTML = 'Goede avond!';
}
