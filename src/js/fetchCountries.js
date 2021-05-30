function fetchCountry(name) {
  const url = `https://restcountries.eu/rest/v2/name/${name}`;
  return fetch(url).then((response) => {
    if (response.ok) return response.json();
  });
}
export default fetchCountry;  
