import refs from './refs';

export default {
  updateResultMarkup(str) {
    refs.result.innerHTML = str;
  },
  updateCardMarkup(str) {
    refs.card.innerHTML = str;
  },
  updateListMarkup(arr) {
    let markup = '';
    arr.forEach(item => {
      markup += `<li>${item.name}</li>`;
    });
    refs.result.innerHTML = markup;
  },
};
