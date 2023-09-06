// write your code here
let getWeather = function(city, info="all"){
    function display(data){
            for(let prop in data){
                if(prop == "wind"){
                    console.log(`WIND: ${data.prop.speed} m/s ${data.prop.deg} deg`);
                    if(data.prop.speed > 15){
                        console.log(" WARNING! Wind speed over 15 m/s");
                    }
                }if(prop == "city"){
                    console.log(`CITY: ${data.city}`);
                }
                if(prop == "clouds"){
                    console.log(`CLOUDS: ${data.clouds} %`);
                }
                if(prop == "temp"){
                     console.log(`TEMP: ${data.city}`);
                     if(data.temp < -20){
                         console.log("WARNING! Temperature below -20 degrees");
                     }
                }
                if(prop == "precipitation"){
                    console.log(`PRECIPITATION: ${data.precipitation} %`)
                }
            }
        }
    if(city instanceof String){
        fetch(`http://localhost:3000/weather?city=${city}&info=${info}`)
        .then(response => response.json())
        .then(data =>display(data))
        .catch(e => console.log(`No information for ${e.message}`));//the error is just the name of the town
    }
    if(city instanceof Array){
        for(let town of city){
        fetch(`http://localhost:3000/weather?city=${city}&info=${info}`)
        .then(response => response.json())
        .then(data =>display(data))
        .catch(e => console.log(`No information for ${e.message}`));//the error is just the name of the town
        }
    }
}
let weather1 = getWeather('Berlin', 'wind');
// CITY: Berlin
// WIND: 16 m/s, 117 deg
// WARNING! Wind speed over 15 m/s

let weather2 = getWeather(['Oslo', 'Yakutsk'], 'all');
// CITY: Oslo
// WIND: 8 m/s, 170 deg
// CLOUDS: 0 %
// TEMP: 0 C
// PRECIPITATION: 0 %
//
// CITY: Yakutsk
// WIND: 0 m/s, 0 deg
// CLOUDS: 0 %
// TEMP: -40 C
// WARNING! Temperature below -20 degrees
// PRECIPITATION: 0 %
