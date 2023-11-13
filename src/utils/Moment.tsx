import Moment from 'moment';

export const GetDelivery = () => {
  return Moment().add(15, 'minutes').format('HH[h]mm');
};
