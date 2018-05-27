const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const temperature = require('./temperature/temperature.js');


const argv = yargs
    .options({
        a:{
            demand: true,
            alias: 'address', 
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help','h')
    .argv ; 

geocode.geocodeAddress(argv.address, (errorMessage, results) =>{
    if(errorMessage){
        console.log(errorMessage);
    }
    else {
        console.log(results.address);
        temperature.getTemp(results.latitude, results.longitude,(errorMessage,wheatherResults)=>{
            if(errorMessage){
                console.log(errorMessage);
            }
            else{
               // console.log(JSON.stringify(wheatherResults, undefined, 2));
               console.log(`It's currently ${wheatherResults.temperature}`);
               console.log(`Feel like ${wheatherResults.apparentTemperature}`);
            }
        });
    }
});

