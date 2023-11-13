export const TrunacteString = (str: string, maxlength: number) => {
  if (str.length > maxlength) {
    return str.substring(0, maxlength) + '...';
  } else {
    return str;
  }
};
