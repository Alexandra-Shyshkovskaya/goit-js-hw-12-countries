import countriesListMarkup from "../templates/countriesList.hbs";
import countryCardMarkup from "../templates/countryCard.hbs";
import notifications from "./notification.js";
import refs from "./refs.js";

const { successNotification, preciseRequestNotification } = notifications;

const { countryList } = refs;

export default function fetchCountriesMarkup(data) {
  let markup;
  if (data.length >= 2 && data.length <= 10) {
    markup = countriesListMarkup(data);
  }
  if (data.length === 1) {
    markup = countryCardMarkup(data);
    successNotification();
  }
  if (data.length > 10) {
    preciseRequestNotification();
    return;
  }
  return countryList.insertAdjacentHTML("afterbegin", markup);
}