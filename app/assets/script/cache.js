var DEV = location.host == 'localhost:9001';

if ('serviceWorker' in navigator && DEV) {
    navigator.serviceWorker.register('app/assets/script/sw.js').then(function (registration) {
        console.log('Service Worker Registered.');

        navigator.serviceWorker.registration = registration;

        registration.addEventListener('updatefound', function (updatefound) {
            registration.updatefound = updatefound;
            registration.installing && registration.installing.addEventListener('statechange', function (statechange) {
                registration.statechange = statechange;
            });
        });
    });
}
