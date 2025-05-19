import dayjs from 'dayjs'; 


const date = '2020-10-12T19:00:00';
const isDate = dayjs(date);

const formatted = isDate.format('MMM D(ddd) YYYY - HH:mm');

//Oct 12(Mon) 2020 - 19:00
 

console.log(formatted);
