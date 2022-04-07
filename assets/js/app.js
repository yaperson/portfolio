if("serviceWorker" in navigator){
    console.log("serviceWorker installer");
    navigator.serviceWorker.register("./ServiceWorker.js");
}

// TODO
/*
const veilleList = document.getElementById("veilleList");

const veilleTab = ['PWA', 'intelligence_artificielle'];

const currentSong = veilleTab[veilleIndex];

loadVeille(currentSong);

function loadVeille(song){
  title.innerText = song;
  cover.src = `./assets/img//veilleImg/${song}.png` || `./assets/img/NoImage.png`;
}
*/