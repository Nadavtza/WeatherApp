//same using axios with built in promises

const yargs = require('yargs');
const axios = require('axios');


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

    var address_encoded = encodeURIComponent(argv.address);
    var gecodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address_encoded}`;

    axios.get(gecodeUrl).then((response)=>{
        if(response.data.status ==='ZERO_RESULTS'){
            throw new Error('unable to find that address');
        }
        var lat = response.data.results[0].geometry.location.lat; 
        var lng= response.data.results[0].geometry.location.lng;
        var tempUrl =  `https://api.darksky.net/forecast/e691a446c59e730dd20b4fd366942b5c/${lat},${lng}`;
        console.log(response.data.results[0].formatted_address);
        return axios.get(tempUrl);
    }).then((response)=>{
        var temperature = response.data.currently.temperature;
        var apparentTemperature = response.data.currently.apparentTemperature;
        console.log(`It's currently ${temperature}.`);
        console.log(`Feel like ${apparentTemperature}.`);

    })
    .catch((e)=>{
        if(e.code ==='ENOTFOUND'){
            console.log('unable to connect to API');
        }
        else{
            console.log(e.message)
        }
    });

