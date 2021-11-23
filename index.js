//const { fetchMyIP, fetchCoordsByIp, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);

// });

// fetchCoordsByIp('74.57.172.19',(error, geo) => {
//   if (error){
//     console.log(error);
//     return;
//   }
  
//   console.log('it worked, geo-coordinates are: ', geo);
// });


// let coordinates = {
//   latitude:45.51,
//   longitude:-73.5665,
// }
// fetchISSFlyOverTimes(coordinates, (error, coords) => {
//   if (error){
//     console.log(error);
//     return;
//   }

//   console.log('it worked. times are: ', coords)
// });

const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  console.log(typeof(passTimes))
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});
