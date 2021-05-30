import './sass/main.scss';
import fetchCountry from './js/fetchCountries';
import notifications from "./js/notification.js";
import fetchCountriesMarkup from "./js/markup.js";
import refs from "./js/refs.js";
import debounce from "lodash.debounce";

const {
  errorNotification,
  noticeNotification,
  emptyNotification,
} = notifications;

const { input, countryList } = refs;

input.addEventListener('input', debounce(countryRequest, 500));

noticeNotification();

function countryRequest() {
    countryList.innerHTML = '';
    const searchQuery = input.value;
    if (!searchQuery) {
        emptyNotification();
        return;
    }
    fetchCountry(searchQuery).then(fetchCountriesMarkup).catch(errorNotification);
}