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
            let curRegio = statMea[i].regio;
            console.log(curStation + ' - ' + curRegio + ' - ' + i + ' - ' + curTemp);
        }

        // Temperatuur (header)
        let temp = document.querySelector('.temp');
        let curTemp = statMea[i].temperature;
        temp.innerHTML = curTemp + '°C';
        console.log(temp.innerHTML);

        // Locatie (header)
        var locatie = document.getElementById('locSelect');

        function show() {
            var curLocatie = document.forms[0].locSelect.value;
            console.log(curLocatie);
            let i = 0;
            if (curLocatie == 'Meetstation Arcen') {
                i = 0;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Arnhem') {
                i = 1;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Berkhout') {
                i = 2;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Cadzand') {
                i = 3;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation De Bilt') {
                i = 4;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Den Helder') {
                i = 5;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Eindhoven') {
                i = 6;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Ell') {
                i = 7;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Europlatform') {
                i = 8;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Gilze RIjen') {
                i = 9;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Goes') {
                i = 10;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Groenlo-Hupsel') {
                i = 11;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Groningen') {
                i = 12;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Hansweert') {
                i = 13;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Heino') {
                i = 14;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            }
        }

        locatie.onchange = show;
        show();

        // for (var i = 0; i < statMea.length; i++) {
        //     if (curLocatie == curStation) {
        //         console.log('Hoi');
        //     } else {
        //         console.log('Doei');
        //     }
        // }
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
