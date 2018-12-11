const APIKEY = '8e141ff3d5c8231a95e9bc5dcfab66b8';
const urlDepartures = `https://api.laminardata.aero/v1/aerodromes/UUWW/departures?user_key=${APIKEY}`;
const urlArrivals = `https://api.laminardata.aero/v1/aerodromes/UUWW/arrivals?user_key=${APIKEY}`
async function connectionDepartures (){ 
  let response = await fetch(urlDepartures,{
  headers: {
    "Accept": "application/json"
  },
})

  let data = await response.json();
  return data.features;
  }

  async function connectionArrivals (){ 
    let response = await fetch(urlArrivals,{
    headers: {
      "Accept": "application/json"
    },
  })
  
    let data = await response.json();
    return data.features;
    }


  export {connectionDepartures, connectionArrivals};