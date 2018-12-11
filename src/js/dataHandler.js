function dataHandler(arr) {
 return arr.map(obj => {
  return {
    departureTime: obj.properties.departure.runwayTime ? new Date(obj.properties.departure.runwayTime.initial) : (obj.properties.departure.gateTime ? new Date(obj.properties.departure.gateTime.estimated) : null),
    arrivalTime: obj.properties.arrival.runwayTime ? new Date(obj.properties.arrival.runwayTime.initial) : null,
    arivalCity:obj.properties.arrival.aerodrome.scheduled,
    flightStatus: obj.properties.flightStatus,
    aircraft: obj.properties.aircraftDescription ? obj.properties.aircraftDescription.aircraftCode :  null,
    iataFlightNumber: obj.properties.iataFlightNumber
  };
  }).filter(obj => obj.flightStatus !== 'PLANNED').sort(function(a,b){
    return new Date(a.departureTime) - new Date(b.departureTime);
  }).map(obj => {
    const options = {
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric',
    };
    if(obj.flightStatus === 'AIRBORNE'){
      obj.flightStatus = 'В полёте';
    } else if(obj.flightStatus === 'SCHEDULED'){
      obj.flightStatus = 'В расписании';
  }
  if(obj.arivalCity === 'UUWW'){
    obj.arivalCity = 'Внуково';
  }
  return obj;});
}

function detainedDataHandler(arr){
  arr.filter(obj => obj.properties.departure.runwayTime !== undefined).filter(obj => obj.properties.departure.runwayTime.actual !== undefined).filter(obj => obj.properties.departure.runwayTime.initial !== obj.properties.departure.runwayTime.actual).map(obj => console.log(obj.properties.departure.runwayTime));
  return arr.filter(obj => obj.properties.departure.runwayTime !== undefined).filter(obj => obj.properties.departure.runwayTime.actual !== undefined).filter(obj => obj.properties.departure.runwayTime.initial !== obj.properties.departure.runwayTime.actual).map(obj => {
    return {
      departureTime: obj.properties.departure.runwayTime ? new Date(obj.properties.departure.runwayTime.initial) : (obj.properties.departure.gateTime ? new Date(obj.properties.departure.gateTime.estimated) : null),
      arrivalTime: new Date(obj.properties.departure.runwayTime.actual),
      arivalCity:obj.properties.arrival.aerodrome.scheduled,
      flightStatus: obj.properties.flightStatus,
      aircraft: obj.properties.aircraftDescription ? obj.properties.aircraftDescription.aircraftCode :  null,
      iataFlightNumber: obj.properties.iataFlightNumber
    };
    }).filter(obj => obj.flightStatus != 'PLANNED').sort(function(a,b){
      return new Date(a.departureTime) - new Date(b.departureTime);
    }).map(obj => {
      const options = {
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
      };
      if(obj.flightStatus === 'AIRBORNE'){
        obj.flightStatus = 'В полёте';
      } else if(obj.flightStatus === 'SCHEDULED'){
        let newDate = obj.departureTime;
        obj.flightStatus = 'В расписании';
    }
    if(obj.arivalCity === 'UUWW'){
      obj.arivalCity = 'Внуково';
    }
    return obj;});;
}

function makeDate(arr){
  const options = {
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
  };
  
  return arr.map(obj => {
    obj.departureTime = (new Date(obj.departureTime)).toLocaleString("ru", options);
    obj.arrivalTime = (new Date(obj.arrivalTime)).toLocaleString("ru", options);
    return obj;});
};

export {dataHandler, makeDate, detainedDataHandler};
