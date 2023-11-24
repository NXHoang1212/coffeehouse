import Moment from 'moment';

export const GetDelivery = () => {
  return Moment().add(15, 'minutes').format('HH[h]mm');
};


export const GetTime = (dateString: Date) => {
  // Chuyển đổi chuỗi ngày tháng thành đối tượng Moment
  const dateMoment = Moment(dateString);

  // Format thời gian theo định dạng mong muốn
  return dateMoment.format('HH[h]mm');
};
