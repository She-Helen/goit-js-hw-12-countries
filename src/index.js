import './styles.css';
import refs from './js/refs';
import fetchCountries from './js/fetchCountries';
import updateListMarkup from './js/updateMarkup';
import errorMsg from './js/error';
import country from './templates/country.hbs';
import debounce from 'lodash.debounce';

refs.countryInpup.addEventListener(
  'input',
  debounce(() => {
    fetchCountries(refs.countryInpup.value).then(data => {
      if (data && data.length === 1) {
        refs.result.innerHTML = '';
        refs.card.innerHTML = country(data[0]);
      } else if (data && data.length > 1 && data.length <= 10) {
        refs.card.innerHTML = '';
        updateListMarkup(data);
      } else if (data && data.length > 10) {
        refs.card.innerHTML = '';
        refs.result.innerHTML = '';
        errorMsg();
      }
    });
  }, 500),
);
