import refs from './refs';

function updateListMarkup(arr) {
  let markup = '';
  arr.forEach(item => {
    markup += `<li>${item.name}</li>`;
    refs.result.innerHTML = markup;
  });
}
export default updateListMarkup;
