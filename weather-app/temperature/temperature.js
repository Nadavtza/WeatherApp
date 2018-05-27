const request = require('request');

var getTemp = (lat,lng ,callback) =>{

    request({
        url: `https://api.darksky.net/forecast/e691a446c59e730dd20b4fd366942b5c/${lat},${lng}`,
        json:true
    },(error, response, body)=>{
        if(!error && response.statusCode === 200){
            callback(undefined ,{
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature 
            });
        }
        else{
            callback('Unable to fetch wheather.');  
        }
    });



}




//exports module
module.exports = {
    getTemp
};

