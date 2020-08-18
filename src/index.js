import './styles.css';
import refs from './js/refs';
import fetchCountries from './js/fetchCountries';
import markup from './js/markup';
import errorMsg from './js/error';
import country from './templates/country.hbs';
import debounce from 'lodash.debounce';

refs.countryInpup.addEventListener(
  'input',
  debounce(() => {
    fetchCountries(refs.countryInpup.value).then(data => {
      if (data && data.length === 1) {
        markup.updateResultMarkup('');
        markup.updateCardMarkup(country(data[0]));
      } else if (data && data.length > 1 && data.length <= 10) {
        markup.updateCardMarkup('');
        markup.updateListMarkup(data);
      } else if (data && data.length > 10) {
        markup.updateCardMarkup('');
        markup.updateResultMarkup('');
        errorMsg();
      }
    });
  }, 500),
);
