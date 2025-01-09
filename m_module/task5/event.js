const button = document.getElementById("postId");

button.addEventListener("click", (e) => {
  postserivce.getposts(postlayout.showposts);
});
