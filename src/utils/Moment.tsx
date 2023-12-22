import Moment from 'moment';
import { DataWellcome } from '../data/types/Enum.entity';
import { category } from '../constant/Icon';

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
    imageSource = category.TEAMILK;
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = DataWellcome.AFTERNOON;
    imageSource = category.CLOUDTEA;
  } else if (currentHour >= 18 && currentHour < 24) {
    greeting = DataWellcome.EVENING;
    imageSource = category.TEAPEACH;
  } else {
    greeting = DataWellcome.NIGHT;
    imageSource = category.ENJOYHOME;
  }
  return { greeting, imageSource };
}
