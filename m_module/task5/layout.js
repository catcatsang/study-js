const postlayout = (() => {
  const showposts = (posts) => {
    const wrap = document.getElementById("showpost");
    let text = ``;
    // userservice.getusers(postlayout.showposts);
    console.log(posts);
    posts
      .filter((post) => post.title.includes("qui"))
      .forEach(({ userId, title }) => {
        text += `<tr>
      <td>${title}</td>
      <td>${userId}</td>
      </tr>`;
      });
    wrap.innerHTML = text;
  };
  return { showposts: showposts };
})();
// 사용자 ID별로 포스트를 필터링하고,
// 타이틀에 특정 단어(qui)가 포함된 포스트를 테이블로 출력하는 프로그램을 작성하세요.
