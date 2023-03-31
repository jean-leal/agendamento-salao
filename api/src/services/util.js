const moment = require('moment');

module.exports = {
  SLOT_DURATION: 30,
  hourToMinutes: (hourMinute) => {
      //receber horas como 1:30
    const [hour, minutes] = hourMinute.split(':');
    return parseInt(parseInt(hour) * 60 + parseInt(minutes));
  },
  sliceMinutes: (start, end, duration) =>{
    
    const slices = [];
    let count = 0;

    start = moment(start);
    end = moment(end);

    console.log(start, end)

    while (end > start) {
      slices.push(start.format('HH:mm'));

      start = start.add(duration, 'minutes');
      count ++;
    }
    return slices
  },
  mergeDateTime: (date, time) => {
    const merged = `${moment(date).format('YYYY-MM-DD')}T${moment(time).format('HH:mm')}`;

    return merged;
  }
}