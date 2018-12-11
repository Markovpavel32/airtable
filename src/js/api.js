function today(arr){
  let date = new Date;
  return arr.filter(el => el.departureTime !== null).filter(el => el.departureTime.getDate() === date.getDate());
}

export default today;