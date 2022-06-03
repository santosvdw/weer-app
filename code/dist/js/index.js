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
            let cuTemp = statMea[i].temperature;
            console.log(curStation + ' - ' + curRegio + ' - ' + i + ' - ' + cuTemp);
        }

        // Temperatuur (header)
        let temp = document.querySelector('.temp');
        let curTemp = statMea[2].temperature;
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
            } else if (curLocatie == 'Meetstation Herwijnen') {
                i = 15;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Hoek van Holland') {
                i = 16;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Hoogeveen') {
                i = 17;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Hoorn Terschelling') {
                i = 18;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Houtribdijk') {
                i = 19;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Lauwersoog') {
                i = 23;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Leeuwarden') {
                i = 24;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Lelystad') {
                i = 26;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Lopik-Cabauw') {
                i = 27;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Maastricht') {
                i = 28;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Marknesse') {
                i = 29;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Nieuw Beerta') {
                i = 30;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Rotterdam') {
                i = 32;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Rotterdam Geulhaven') {
                i = 33;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Schiphol') {
                i = 35;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Stavoren') {
                i = 37;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Twente') {
                i = 40;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Vlieland') {
                i = 42;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Vlissingen') {
                i = 42;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Volkel') {
                i = 44;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Voorschoten') {
                i = 45;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Westdopre') {
                i = 46;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Wijk aan Zee') {
                i = 48;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else if (curLocatie == 'Meetstation Woensdrecht') {
                i = 49;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
            } else {
                i = 0;
                curTemp = statMea[i].temperature;
                temp.innerHTML = 'ERROR';
                console.log(temp.innerHTML);
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
