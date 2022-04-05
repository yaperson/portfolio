// const divInstall = document.getElementById('installContainer');
// const butInstall = document.getElementById('butInstall');


if("serviceWorker" in navigator){
    console.log("serviceWorker installer");
    navigator.serviceWorker.register("./ServiceWorker.js");
}

// if (window.location.protocol === 'http:') {
//     const requireHTTPS = document.getElementById('requireHTTPS');
//     const link = requireHTTPS.querySelector('a');
//     link.href = window.location.href.replace('http://', 'https://');
//     requireHTTPS.classList.remove('hidden');
// }

// window.addEventListener('beforeinstallprompt', (event) => {
//   console.log('👍', 'beforeinstallprompt', event);
//   // Stash the event so it can be triggered later.
//   window.deferredPrompt = event;
//   // Remove the 'hidden' class from the install button container
//   divInstall.classList.toggle('hidden', false);
// });
// butInstall.addEventListener('click', async () => {
//     console.log('👍', 'butInstall-clicked');
//     const promptEvent = window.deferredPrompt;
//     if (!promptEvent) {
//       // The deferred prompt isn't available.
//       return;
//     }
//     // Show the install prompt.
//     promptEvent.prompt();
//     // Log the result
//     const result = await promptEvent.userChoice;
//     console.log('👍', 'userChoice', result);
//     // Reset the deferred prompt variable, since
//     // prompt() can only be called once.
//     window.deferredPrompt = null;
//     // Hide the install button.
//     divInstall.classList.toggle('hidden', true);
//   });
// window.addEventListener('appinstalled', (event) => {
//   console.log('👍', 'appinstalled', event);
//   // Clear the deferredPrompt so it can be garbage collected
//   window.deferredPrompt = null;
// });

// var button = document.getElementById("notifications");
// button.addEventListener('click', function(e) {
//     Notification.requestPermission().then(function(result) {
//         if(result === 'granted') {
//             randomNotification();
//         }
//     });
// });

// function randomNotification() {
//     var notifTitle = 'New weekSong.';
//     var notifBody = '2 nouveaux sons et des boutons plus espacés !';
//     var notifImg = 'assets/icons/icon.ico';
//     var options = {
//         body: notifBody,
//         icon: notifImg
//     }
//     var notif = new Notification(notifTitle, options);
//     // setTimeout(randomNotification, 3000000000);
// }
// if (window.parent.length){randomNotification()}
