// 전달받은 게시글들 중, id가 짝수인 게시글의 아이디와 제목만 출력

// const PostService = () => {
//   const getList = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const posts = await response.json();

//     const evenPosts = posts.filter((post) => post.id % 2 === 0);
//     return evenPosts;
//   };

//   return { getList };
// };

// console.log(evenPosts);
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((posts) => {
//     // const postDatas = posts.filter((post) => post.id % 2 == 0)
//     //     .map((post) => { return { id: post.id, title: post.title } })

//     // console.log(postDatas);

//     posts
//       .filter((post) => post.id % 2 == 0)
//       .forEach(({ id, title, ...rest }) => {
//         console.log(id, title);
//       });
//   });

// 전달받은 댓글들 중, postId가 3인 댓글 내용 출력

// const userservice = () => {
//   const getlist = async () => {
//     const response = await fetch("");
//     const posts = await response.json();

//     const posts =

//   };
// };

const userserivce = () => {
  const getlist = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const posts = await response.json();
    const result = posts.filter((post) => post.postId % 2 === 0);
    return result;
  };

  return { getlist };
};

const service = userserivce();

service.getlist().then((result) => console.log(result));
// ㅋㅋ
// fetch("https://jsonplaceholder.typicode.com/comments")
//   .then((response) => response.json())
//   .then((comments) => {
//     comments
//       .filter((comment) => comment.postId === 3)
//       .forEach(({ body, postId, ...rest }) => {
//         console.log(postId, body);
//       });
//   });
// fetch("https://jsonplaceholder.typicode.com/comments?postId=3")
//   .then((response) => response.json())
//   .then((comments) => {
//     comments.forEach(({ body, postId, ...rest }) => {
//       console.log(postId, body);
//     });
//   });

// 전달받은 회원들 중, zipcode만 출력
// const Userinfoservice = () => {
//   const Userinfo = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();

//     const zipcode = users.map((user) => user.addres.zipcode);
//     console.log(zipcode);
//     return result;
//   };
//   return { Userinfo };
// };
// Userinfoservice();
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((users) => {
//     users
//       .map((user) => user.address)
//       .forEach(({ zipcode, ...rest }) => {
//         console.log(zipcode);
//       });
//   });
