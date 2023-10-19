// eslint-disable-next-line 
export default {
  hourToMinutes: (hourMinute) => {
    //receber horas como 1:30
  const [hour, minutes] = hourMinute.split(':');
  return parseInt(parseInt(hour) * 60 + parseInt(minutes));
},
}