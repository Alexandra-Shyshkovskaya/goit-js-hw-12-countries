import countryCardTpl from './templates/country.hbs';
import countriesListTpl from './templates/countries.hbs';
import _debounce from 'lodash.debounce';
import API from './js/fetchCountries';
import getRefs from './js/refs';
import toastify from './js/notification';
import './sass/main.scss';

const refs = getRefs();

refs.input.addEventListener('input', _debounce(onInputCountry, 500));

function onInputCountry(e) {
  clearCountryInput();
  if (!e.target.value) {
    return;
  }
  API.fetchCountries(e.target.value)
    .then(country => {
      if (country.length < 2) {
        createCountryCard(country);
        toastify.onSuccess(country);
      } else if (country.length < 10 && country.length > 1) {
        createCountriesList(country);
      } else {
        toastify.needMore(country);
      }
    })
    .catch(toastify.error);
}

function createCountryCard(country) {
  const markup = countryCardTpl(country);
  refs.country.insertAdjacentHTML('beforeend', markup);
}

function createCountriesList(countries) {
  const markup = countriesListTpl(countries);
  refs.country.insertAdjacentHTML('beforeend', markup);
}

function clearCountryInput() {
  refs.country.innerHTML = '';
}


