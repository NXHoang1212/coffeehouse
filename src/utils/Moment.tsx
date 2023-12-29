import Moment from 'moment';
import { DataWellcome } from '../data/types/Enum.entity';

export const GetDelivery = () => {
  return Moment().add(15, 'minutes').format('HH[h]mm');
};


export const GetTime = (dateString: Date) => {
  const dateMoment = Moment(dateString);
  return dateMoment.format('HH[h]mm');
};


export const GetCurrentHour = () => {
  const currentHour = Moment().hours();
  let greeting = "";
  let imageSource = "";
  if (currentHour >= 6 && currentHour < 12) {
    greeting = DataWellcome.MORNING;
    imageSource = "http://res.cloudinary.com/dxlvdrb52/image/upload/v1703765007/category/wuriw5m5sbhxtvbxtrke.png";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = DataWellcome.AFTERNOON;
    imageSource = "http://res.cloudinary.com/dxlvdrb52/image/upload/v1703765034/category/livf7nq2d1vy5fvc5moe.png";
  } else if (currentHour >= 18 && currentHour < 24) {
    greeting = DataWellcome.EVENING;
    imageSource = "http://res.cloudinary.com/dxlvdrb52/image/upload/v1703765068/category/ygkvsziyd9jjui0snuwr.png";
  } else {
    greeting = DataWellcome.NIGHT;
    imageSource = "http://res.cloudinary.com/dxlvdrb52/image/upload/v1703765158/category/o4sktxhtopz21ysmi29s.png";
  }
  return { greeting, imageSource };
}
