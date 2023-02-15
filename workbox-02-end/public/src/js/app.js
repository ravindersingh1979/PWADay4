if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/swworkbox.js").then(function () {
    console.log("Service worker is registered");
  });
}
