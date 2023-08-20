// DateUtils.js
export const FormatDate = (date: any) => {
    const day = ("0" + date.getDate()).slice(-2); // Định dạng ngày với 2 chữ số
    const month = ("0" + (date.getMonth() + 1)).slice(-2); // Định dạng tháng với 2 chữ số
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};
