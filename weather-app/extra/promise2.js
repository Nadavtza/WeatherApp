//test with promises

const request = require('request');


var geoCodeAddress = (address)=>{
    return new Promise((resolve,reject)=>{
    var address_encoded = encodeURIComponent(address);
    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${address_encoded}`,
        json: true
    }, (error , response, body)=>{
        if(error){
            reject(`Unable to connect to Google srevers.`)
        }
        else if((body.status === 'ZERO_RESULTS') || (body.status ==='OVER_QUERY_LIMIT')){
            reject(`Unable to find that address.`);
        }else if (body.status === 'OK'){
            resolve( {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });         
        }
    });});};

    geoCodeAddress('00000').then((location)=>{
        console.log(JSON.stringify(location,undefined,2));
    }).catch((errorMessage)=>{
        console.log(errorMessage);
    });  



