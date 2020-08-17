const fetchCountries = function (searchQuery) {
  let link = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  return fetch(link)
    .then(res => res.json())
    .catch(error => console.log(error));
};
export default fetchCountries;
