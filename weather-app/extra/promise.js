var asyncAdd = (a,b) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if((typeof a === 'number') &&(typeof a === 'number'))
                resolve(a+b);
            else{
                reject('must be numbers');
            }
        },1500);
    });

};
asyncAdd(5,6).then((ans)=>{
    console.log('Success: ', ans); 
    return asyncAdd(ans,5);
},
).then((res)=>{
    console.log(`ans = `,res);
}).catch((error)=>{
    console.log('Fail: ', errorMessage); 
});
var somePromise = new Promise((resolve, reject)=>{// create a promise, get callback
    resolve('hey');
    reject('not work');
}); 

somePromise.then((message)=>{
    console.log('Success: ', message); 
},(errorMessage)=>{
    console.log('Fail: ', errorMessage); 
}) ;


//promise- 
//1. create with lambda and to request
//2.promise.then
//3.lambda for reject