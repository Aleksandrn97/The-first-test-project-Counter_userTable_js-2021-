export const sortByUser = (userData) => userData.sort((a, b) => {
  if (a.username.toLowerCase() < b.username.toLowerCase()) {
    return -1;
  }
  return 0;
});

export const sortByCity = (userData) => userData.sort((a, b) => {
  if (a.address.city.toLowerCase() < b.address.city.toLowerCase()) {
    return -1;
  }
  return 0;
});

export const sortByCompany = (userData) => userData.sort((a, b) => {
  if (a.company.name.toLowerCase() < b.company.name.toLowerCase()) {
    return -1;
  }
  return 0;
});
