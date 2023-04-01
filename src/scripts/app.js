if("serviceWorker" in navigator){
    console.log("serviceWorker installer");
    navigator.serviceWorker.register("/serviceWorker.js");
}