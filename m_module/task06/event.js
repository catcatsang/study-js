const button = document.getElementById("postId");

button.addEventListener("click", (e) => {
  userservice.getusers(postlayout.showposts);
});
