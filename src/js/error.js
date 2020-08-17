import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
function errorMsg() {
  error({
    title: 'Too many matches found. Please enter a more specific query!',
    delay: 800,
  });
}
export default errorMsg;
