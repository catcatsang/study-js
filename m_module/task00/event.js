const button = document.getElementById("get-photos");

button.addEventListener("change", (e) => {
  photoService.getPhotos(1, photoLayout.showPhotos);
});
