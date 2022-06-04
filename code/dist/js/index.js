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
            let weatherDesc = document.querySelector('.temp_desc');
            console.log(curLocatie);
            let i = 0;
            let curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
            if (curLocatie == 'Meetstation Arcen') {
                i = 0;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Arnhem') {
                i = 1;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Berkhout') {
                i = 2;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation De Bilt') {
                i = 4;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Den Helder') {
                i = 5;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Eindhoven') {
                i = 6;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Ell') {
                i = 7;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Europlatform') {
                i = 8;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Gilze Rijen') {
                i = 9;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Goes') {
                i = 10;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Groenlo-Hupsel') {
                i = 11;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Groningen') {
                i = 12;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Hansweert') {
                i = 13;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Heino') {
                i = 14;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Herwijnen') {
                i = 15;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Hoek van Holland') {
                i = 16;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Hoogeveen') {
                i = 17;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Hoorn Terschelling') {
                i = 18;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
            } else if (curLocatie == 'Meetstation Houtribdijk') {
                i = 19;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Lauwersoog') {
                i = 23;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Leeuwarden') {
                i = 24;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Lelystad') {
                i = 26;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Lopik-Cabauw') {
                i = 27;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Maastricht') {
                i = 28;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Marknesse') {
                i = 29;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Nieuw Beerta') {
                i = 30;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Rotterdam') {
                i = 32;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Rotterdam Geulhaven') {
                i = 33;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Schiphol') {
                i = 35;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Stavoren') {
                i = 37;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Twente') {
                i = 40;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Vlieland') {
                i = 42;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Vlissingen') {
                i = 42;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Volkel') {
                i = 44;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Voorschoten') {
                i = 45;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Westdopre') {
                i = 46;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Wijk aan Zee') {
                i = 48;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else if (curLocatie == 'Meetstation Woensdrecht') {
                i = 49;
                curTemp = statMea[i].temperature;
                temp.innerHTML = curTemp + '°C';
                console.log(temp.innerHTML);
                img.src = jsonData.actual.stationmeasurements[i].iconurl; // <-- Het weer icoon
                var src = document.querySelector('.weer-icoontje');
                src.appendChild(img);
                curWeatherDesc = jsonData.actual.stationmeasurements[i].weatherdescription;
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            } else {
                i = 0;
                curTemp = statMea[i].temperature;
                temp.innerHTML = 'ERROR';
                console.log(temp.innerHTML);
                weatherDesc.innerHTML = curWeatherDesc;
                console.log(weatherDesc.innerHTML);
            }
        }

        // fivedayforecast icons
        function forecastIcon01() {
            // day1
            var img = document.createElement('img');
            img.src = jsonData.forecast.fivedayforecast[0].iconurl; // <-- Het weer icoon
            var src = document.querySelector('#day01_icon');
            src.appendChild(img);
            console.log(img.src);
        }
        function forecastIcon02() {
            // day2
            var img = document.createElement('img');
            img.src = jsonData.forecast.fivedayforecast[1].iconurl; // <-- Het weer icoon
            var src = document.querySelector('#day02_icon');
            src.appendChild(img);
            console.log(img.src);
        }
        function forecastIcon03() {
            // day3
            var img = document.createElement('img');
            img.src = jsonData.forecast.fivedayforecast[2].iconurl; // <-- Het weer icoon
            var src = document.querySelector('#day03_icon');
            src.appendChild(img);
            console.log(img.src);
        }
        function forecastIcon04() {
            // day4
            var img = document.createElement('img');
            img.src = jsonData.forecast.fivedayforecast[3].iconurl; // <-- Het weer icoon
            var src = document.querySelector('#day04_icon');
            src.appendChild(img);
            console.log(img.src);
        }
        function forecastIcon05() {
            // day5
            var img = document.createElement('img');
            img.src = jsonData.forecast.fivedayforecast[4].iconurl; // <-- Het weer icoon
            var src = document.querySelector('#day05_icon');
            src.appendChild(img);
            console.log(img.src);
        }

        forecastIcon01();
        forecastIcon02();
        forecastIcon03();
        forecastIcon04();
        forecastIcon05();

        function minMaxForecast() {
            document.querySelector('#max-temp01').innerHTML = jsonData.forecast.fivedayforecast[0].maxtemperatureMax + '°C';
            document.querySelector('#max-temp02').innerHTML = jsonData.forecast.fivedayforecast[1].maxtemperatureMax + '°C';
            document.querySelector('#max-temp03').innerHTML = jsonData.forecast.fivedayforecast[2].maxtemperatureMax + '°C';
            document.querySelector('#max-temp04').innerHTML = jsonData.forecast.fivedayforecast[3].maxtemperatureMax + '°C';
            document.querySelector('#max-temp05').innerHTML = jsonData.forecast.fivedayforecast[4].maxtemperatureMax + '°C';
            document.querySelector('#min-temp01').innerHTML = jsonData.forecast.fivedayforecast[0].mintemperatureMin + '°C';
            document.querySelector('#min-temp02').innerHTML = jsonData.forecast.fivedayforecast[1].mintemperatureMin + '°C';
            document.querySelector('#min-temp03').innerHTML = jsonData.forecast.fivedayforecast[2].mintemperatureMin + '°C';
            document.querySelector('#min-temp04').innerHTML = jsonData.forecast.fivedayforecast[3].mintemperatureMin + '°C';
            document.querySelector('#min-temp05').innerHTML = jsonData.forecast.fivedayforecast[4].mintemperatureMin + '°C';
        }

        minMaxForecast();

        locatie.onchange = show;
        show();
    });

// Welkoms bericht
let greetingEl = document.getElementById('welkom');
let today = new Date();
var time = today.getHours() + ':' + today.getMinutes();
var curHr = today.getHours();

document.querySelector('.time').innerHTML = time;
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

// Weekdag
let curWeekDay = Date().substr(0, 2);
let weekDay01 = 'Dinsdag';
let weekDay02 = 'Woensdag';
let weekDay03 = 'Donderdag';
let weekDay04 = 'Vrijdag';
let weekDay05 = 'Zaterdag';
let pWD01 = document.querySelector('#day01');
let pWD02 = document.querySelector('#day02');
let pWD03 = document.querySelector('#day03');
let pWD04 = document.querySelector('#day04');
let pWD05 = document.querySelector('#day05');
// Forecast icons

if (curWeekDay == 'Mon') {
    console.log('Maandag');
    curWeekDay = 'Maandag';
    weekDay01 = 'Dinsdag';
    weekDay02 = 'Woensdag';
    weekDay03 = 'Donderdag';
    weekDay04 = 'Vrijdag';
    weekDay05 = 'Zaterdag';
    /////
    document.querySelector('.weekdag').innerHTML = curWeekDay;
    pWD01.innerHTML = weekDay01.substr(0, 2);
    pWD02.innerHTML = weekDay02.substr(0, 2);
    pWD03.innerHTML = weekDay03.substr(0, 2);
    pWD04.innerHTML = weekDay04.substr(0, 2);
    pWD05.innerHTML = weekDay05.substr(0, 2);
} else if (curWeekDay == 'Tue') {
    console.log('Dinsdag');
    curWeekDay = 'Dinsdag';
    weekDay01 = 'Woensdag';
    weekDay02 = 'Donderdag';
    weekDay03 = 'Vrijdag';
    weekDay04 = 'Zaterdag';
    weekDay05 = 'Zondag';
    /////
    document.querySelector('.weekdag').innerHTML = curWeekDay;
    pWD01.innerHTML = weekDay01.substr(0, 2);
    pWD02.innerHTML = weekDay02.substr(0, 2);
    pWD03.innerHTML = weekDay03.substr(0, 2);
    pWD04.innerHTML = weekDay04.substr(0, 2);
    pWD05.innerHTML = weekDay05.substr(0, 2);
} else if (curWeekDay == 'Wed') {
    console.log('Woensdag');
    curWeekDay = 'Woensdag';
    weekDay01 = 'Donderdag';
    weekDay02 = 'Vrijdag';
    weekDay03 = 'Zaterdag';
    weekDay04 = 'Zondag';
    weekDay05 = 'Maandag';
    /////
    document.querySelector('.weekdag').innerHTML = curWeekDay;
    pWD01.innerHTML = weekDay01.substr(0, 2);
    pWD02.innerHTML = weekDay02.substr(0, 2);
    pWD03.innerHTML = weekDay03.substr(0, 2);
    pWD04.innerHTML = weekDay04.substr(0, 2);
    pWD05.innerHTML = weekDay05.substr(0, 2);
} else if (curWeekDay == 'Thu') {
    console.log('Donderdag');
    curWeekDay = 'Donderdag';
    weekDay01 = 'Vrijdag';
    weekDay02 = 'Zaterdag';
    weekDay03 = 'Zondag';
    weekDay04 = 'Maandag';
    weekDay05 = 'Dinsdag';
    /////
    document.querySelector('.weekdag').innerHTML = curWeekDay;
    pWD01.innerHTML = weekDay01.substr(0, 2);
    pWD02.innerHTML = weekDay02.substr(0, 2);
    pWD03.innerHTML = weekDay03.substr(0, 2);
    pWD04.innerHTML = weekDay04.substr(0, 2);
    pWD05.innerHTML = weekDay05.substr(0, 2);
} else if (curWeekDay == 'Fri') {
    console.log('Vrijdag');
    curWeekDay = 'Vrijdag';
    weekDay01 = 'Zaterdag';
    weekDay02 = 'Zondag';
    weekDay03 = 'Maandag';
    weekDay04 = 'Dinsdag';
    weekDay05 = 'Woensdag';
    /////
    document.querySelector('.weekdag').innerHTML = curWeekDay;
    pWD01.innerHTML = weekDay01.substr(0, 2);
    pWD02.innerHTML = weekDay02.substr(0, 2);
    pWD03.innerHTML = weekDay03.substr(0, 2);
    pWD04.innerHTML = weekDay04.substr(0, 2);
    pWD05.innerHTML = weekDay05.substr(0, 2);
} else if (curWeekDay == 'Sat') {
    console.log('Zaterdag');
    curWeekDay = 'Zaterdag';
    weekDay01 = 'Zondag';
    weekDay02 = 'Maandag';
    weekDay03 = 'Dinsdag';
    weekDay04 = 'Woensdag';
    weekDay05 = 'Donderdag';
    /////
    document.querySelector('.weekdag').innerHTML = curWeekDay;
    pWD01.innerHTML = weekDay01.substr(0, 2);
    pWD02.innerHTML = weekDay02.substr(0, 2);
    pWD03.innerHTML = weekDay03.substr(0, 2);
    pWD04.innerHTML = weekDay04.substr(0, 2);
    pWD05.innerHTML = weekDay05.substr(0, 2);
} else {
    console.log('Zondag');
    curWeekDay = 'Zondag';
    weekDay01 = 'Maandag';
    weekDay02 = 'Dinsdag';
    weekDay03 = 'Woensdag';
    weekDay04 = 'Donderdag';
    weekDay05 = 'Vrijdag';
    /////
    document.querySelector('.weekdag').innerHTML = curWeekDay;
    pWD01.innerHTML = weekDay01.substr(0, 2);
    pWD02.innerHTML = weekDay02.substr(0, 2);
    pWD03.innerHTML = weekDay03.substr(0, 2);
    pWD04.innerHTML = weekDay04.substr(0, 2);
    pWD05.innerHTML = weekDay05.substr(0, 2);
}
