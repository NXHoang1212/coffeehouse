export const findDistrictName = (districtCode: any, Location: any) => {
  const district = Location.District.find(
    (item: any) => item.code === districtCode,
  );
  return district.name_with_type;
};

export const findWardName = (wardCode: any, Location: any) => {
  const ward = Location.Ward.find((item: any) => item.code === wardCode);
  return ward.name_with_type;
};
