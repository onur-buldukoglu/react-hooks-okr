function toCapitalize(str) {
  return `${str.charAt(0).toLocaleUpperCase()}${str
    .slice(1)
    .toLocaleLowerCase()}`;
}

export default toCapitalize;
