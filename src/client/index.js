import { handleSubmit } from './js/formHandler'
import './styles/style.scss';

if('serviceWorker' in navigator){

    if (navigator.serviceWorker) {
        navigator.serviceWorker.register('sw.js', {scope: './'})
        .then(registration => console.log('Service Worker Registered'))
        .catch(err => console.log('Service Worker failed to register', err))
    }
}

document.getElementById('btn').addEventListener('click', handleSubmit);
