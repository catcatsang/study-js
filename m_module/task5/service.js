const postserivce = (() => {
  const getposts = async (callback) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    if (callback) {
      callback(posts);
    }
  };
  return { getposts: getposts };
})();
