import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css'; 

function onSuccess(success) {
  Toastify({
    text: 'Hooray, we found a country that interests you =)',
    duration: 2000,
    gravity: 'bottom', 
    position: 'right', 
    stopOnFocus: true, 
    className: 'info info-success',
    offset: {
      x: 300, 
      y: 15, 
    },
  }).showToast();
}

function needMore(more) {
  Toastify({
    text: 'Please, enter more letters =(',
    duration: 2000,
    gravity: 'bottom', 
    position: 'right',
    stopOnFocus: true, 
    className: 'info info-more',
    offset: {
      x: 300, 
      y: 15,
    },
  }).showToast();

}

function error() {
  Toastify({
    text: 'Something is not found, perhaps there is no such country. Try again =,(',
    duration: 2000,
    gravity: 'bottom', 
    position: 'right',
    stopOnFocus: true, // Prevents dismissing of toast on hover
    className: 'info info-error',
    offset: {
      x: 300, 
      y: 15,
    },
  }).showToast();
}

export default { onSuccess, needMore, error };